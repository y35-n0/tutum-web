import React, { useState, useEffect, useRef, useCallback } from "react";
import { select } from "d3";
import { scaleLinear } from "d3-scale";
import { useQuery } from "react-query";
import { deserialize } from "typescript-json-serializer";
import { Position } from "../../@types/MapAPITypes";
import { user_position_json } from "../../test/jsonData";
import { getMap } from "../../api/workerApi";

const REFETCH_INTERVAL_MS = 1000;

type MapProps = {
  targetId: number;
};

const Map: React.FC<MapProps> = ({ targetId }) => {
  // TODO: 실제 값 가져오기
  // Fetch position data
  const { data, error, isFetching } = useQuery(
    "position",
    () => getMap(targetId),
    {
      refetchInterval: REFETCH_INTERVAL_MS,
      refetchOnWindowFocus: false,
    }
  );

  const [position, setPosition] = useState<Position>(() => {
    return deserialize<Position>(user_position_json, Position);
  });
  const svgRef = useRef(null);

  // TODO: 최초 설정
  // - interval로 값 가져오기
  // - Deserialize buliding, floor, position data
  useEffect(() => {}, []);

  useEffect(() => {
    if (data) {
      setPosition(deserialize<Position>(data, Position));
    }
  }, [data]);

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
    [position.floor]
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
    [position.floor]
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
  }, [position]);

  return <svg ref={svgRef}></svg>;
};

export default Map;
