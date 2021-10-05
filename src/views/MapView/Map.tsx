import React, { useState, useEffect, useRef, useCallback } from "react";
import { select } from "d3";
import { scaleLinear } from "d3-scale";
import { useQuery } from "react-query";
import { deserialize } from "typescript-json-serializer";
import { Building, Floor, Position } from "../../@types/mapAPITypes";
import { getMap } from "../../api/mapApi";

const REFETCH_INTERVAL_MS = 1000;

type Props = {
  targetId: number;
};

const Map: React.FC<Props> = ({ targetId }) => {
  // Fetch position data
  const {
    data: position,
    error,
    isLoading,
  } = useQuery("position", () => getMap(targetId), {
    refetchInterval: REFETCH_INTERVAL_MS,
    onSuccess: (data) => {
      const _position = deserialize<Position>(data, Position);
      setFloor(_position.floor);
      setBuilding(_position.building);
    },
  });
  const [floor, setFloor] = useState<Floor | null>(null);
  const [building, setBuilding] = useState<Building | null>(null);

  // TODO: position 최초 설정 수정 (default X)
  const svgRef = useRef(null);

  // Scale
  // When floor data updated, update scale functions.
  const xScale = useCallback(
    (x) => {
      if (building == null || floor == null) return null;

      const xScale = scaleLinear()
        .domain([0, building.size.width])
        .range([
          floor.img.padding.left,
          floor.img.size.width - floor.img.padding.right,
        ]);
      return xScale(x);
    },
    [floor, building]
  );

  const yScale = useCallback(
    (y) => {
      if (building == null || floor == null) return null;
      const yScale = scaleLinear()
        .domain([building.size.height, 0])
        .range([
          floor.img.size.height - floor.img.padding.top,
          floor.img.padding.bottom,
        ]);
      return yScale(y);
    },
    [floor, building]
  );

  // Map Image
  // When floor data updated, draw floor map image
  useEffect(() => {
    if (floor == null) return;

    const svg = select(svgRef.current)
      .attr("width", floor.img.size.width)
      .attr("height", floor.img.size.height);

    // image
    svg
      .append("image")
      .attr("id", "background_map_img")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", floor.img.size.width)
      .attr("height", floor.img.size.height)
      .attr("xlink:href", floor.img.url);
  }, [floor]);

  // Position Marker
  // When position data or floor data updated, draw position marker.
  // FIXME: when data fetcted, window refeshes.
  useEffect(() => {
    if (position == null || floor == null || building == null) return;

    const svg = select(svgRef.current);
    // position

    svg
      .append("circle")
      .attr("id", "user_position")
      .attr("cx", xScale(position.x))
      .attr("cy", floor.img.size.height - yScale(position.y)!)
      .attr("r", 8)
      .style("fill", "red")
      .style("stroke", "black");

    // TODO: 시간 표시
  }, [position, xScale, yScale]);

  // When error occurs or loading data
  if (error) throw new Error();
  if (isLoading) return <p>Loading...</p>;

  return <svg ref={svgRef}></svg>;
};

export default Map;
