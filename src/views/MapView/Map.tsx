import React, { useState, useEffect, useRef, useCallback } from "react";
import { select } from "d3";
import { scaleLinear } from "d3-scale";
import { useQuery } from "react-query";
import { deserialize } from "typescript-json-serializer";
import { Position } from "../../@types/mapAPITypes";
import { userPositionJson } from "../../test/jsonData";
import { getMap } from "../../api/mapApi";

const REFETCH_INTERVAL_MS = 1000;

type Props = {
  targetId: number;
};

const Map: React.FC<Props> = ({ targetId }) => {
  // TODO: 실제 값 가져오기
  // Fetch position data
  const { data /* , error, isFetching */ } = useQuery(
    "position",
    () => getMap(targetId),
    {
      refetchInterval: REFETCH_INTERVAL_MS,
      onSuccess: (data) => {
        setPosition(deserialize<Position>(data, Position));
      },
    }
  );

  // TODO: position 최초 설정 수정 (default X)
  const [position, setPosition] = useState<Position>(() => {
    return deserialize<Position>(userPositionJson, Position);
  });
  const svgRef = useRef(null);

  // Scale
  // When floor data updated, update scale functions.
  const xScale = useCallback(
    (x) => {
      const xScale = scaleLinear()
        .domain([0, position.building.size.width])
        .range([
          position.floor.img.padding.left,
          position.floor.img.size.width - position.floor.img.padding.right,
        ]);
      return xScale(x);
    },
    [position.floor, position.building]
  );

  const yScale = useCallback(
    (y) => {
      const yScale = scaleLinear()
        .domain([position.building.size.height, 0])
        .range([
          position.floor.img.size.height - position.floor.img.padding.top,
          position.floor.img.padding.bottom,
        ]);
      return yScale(y);
    },
    [position.floor, position.building]
  );

  // Map Image
  // When floor data updated, draw floor map image
  useEffect(() => {
    const svg = select(svgRef.current)
      .attr("width", position.floor.img.size.width)
      .attr("height", position.floor.img.size.height);

    // image
    svg
      .append("image")
      .attr("id", "background_map_img")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", position.floor.img.size.width)
      .attr("height", position.floor.img.size.height)
      .attr("xlink:href", position.floor.img.url);
  }, [position.floor]);

  // Position Marker
  // When position data or floor data updated, draw position marker.
  useEffect(() => {
    const svg = select(svgRef.current);
    // position
    svg
      .append("circle")
      .attr("id", "user_position")
      .attr("cx", xScale(position.x))
      .attr("cy", position.floor.img.size.height - yScale(position.y))
      .attr("r", 8)
      .style("fill", "red")
      .style("stroke", "black");

    // TODO: 시간 표시
  }, [position, xScale, yScale]);

  return <svg ref={svgRef}></svg>;
};

export default Map;
