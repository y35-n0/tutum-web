import React, { useState, useEffect, useRef } from "react";
import { Building, Floor, Position } from "../../@types/MapAPITypes";
import { select } from "d3";
import { ScaleLinear, scaleLinear } from "d3-scale";
import {
  building_info_json,
  floor_info_json,
  user_position_json,
} from "../../test/json_data";
import { deserialize } from "typescript-json-serializer";

type MapProps = {
  targetId: number;
};

const Map: React.FC<MapProps> = ({ targetId }) => {
  // FIXME: 실제 값 가져오기
  const [position, setPosition] = useState<Position>(() => {
    return deserialize<Position>(user_position_json, Position);
  });
  const [floor, setFloor] = useState<Floor>(() => {
    return deserialize<Floor>(floor_info_json, Floor);
  });

  const [building, setBuilding] = useState<Building>(() => {
    return deserialize<Building>(building_info_json, Building);
  });
  const svgRef = useRef(null);
  // FIXME: current read-only error
  const x = useRef<ScaleLinear<number, number, never>>(null);
  const y = useRef<ScaleLinear<number, number, never>>(null);

  // TODO: 최초 설정
  // - interval로 값 가져오기
  useEffect(() => {}, []);

  // TODO: floor 변경되었을 때 업데이트
  useEffect(() => {
    const svg = select(svgRef.current)
      .attr("width", floor.img.size.width)
      .attr("height", floor.img.size.height);

    // image
    svg
      .select("#background_map_img")
      .append("image")
      .attr("id", "background_map_img")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", floor.img.size.width)
      .attr("height", floor.img.size.height)
      .attr("xlink:href", floor.img.url);

    // scale
    x.current = scaleLinear()
      .domain([0, building.size.width])
      .range([
        floor.img.padding.left,
        floor.img.size.width - floor.img.padding.right,
      ]);

    y.current = scaleLinear()
      .domain([building.size.height, 0])
      .range([
        floor.img.size.height - floor.img.padding.top,
        floor.img.padding.bottom,
      ]);
  }, [floor]);

  // TODO: position 변경되었을 때 업데이트
  useEffect(() => {
    const svg = select(svgRef.current);

    // position
    svg
      .select("#user_position")
      .append("circle")
      .attr("id", "user_position")
      .attr("cx", x(position.x))
      .attr("cy", floor.img.size.height - position.y);
  }, [position, floor]);
  return <svg ref={svgRef}></svg>;
};

export default Map;
