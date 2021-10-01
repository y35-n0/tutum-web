import React, { useState, useEffect, useRef, useCallback } from "react";
import { select } from "d3";
import { scaleLinear } from "d3-scale";
import { deserialize } from "typescript-json-serializer";
import { Building, Floor, Position } from "../../@types/MapAPITypes";
import {
  building_info_json,
  floor_info_json,
  user_position_json,
} from "../../test/json_data";

type MapProps = {
  targetId: number;
};

const Map: React.FC<MapProps> = ({ targetId }) => {
  // TODO: 실제 값 가져오기
  const [building, setBuilding] = useState<Building>(() => {
    return deserialize<Building>(building_info_json, Building);
  });
  const [floor, setFloor] = useState<Floor>(() => {
    return deserialize<Floor>(floor_info_json, Floor);
  });
  const [position, setPosition] = useState<Position>(() => {
    return deserialize<Position>(user_position_json, Position);
  });
  const svgRef = useRef(null);

  // TODO: 최초 설정
  // - interval로 값 가져오기
  // - Deserialize buliding, floor, position data
  useEffect(() => {}, []);

  // Scale
  // When floor data updated, update scale functions.
  const xScale = useCallback(
    (x) => {
      const xScale = scaleLinear()
        .domain([0, building.size.width])
        .range([
          floor.img.padding.left,
          floor.img.size.width - floor.img.padding.right,
        ]);
      return xScale(x);
    },
    [floor]
  );

  const yScale = useCallback(
    (y) => {
      const yScale = scaleLinear()
        .domain([building.size.height, 0])
        .range([
          floor.img.size.height - floor.img.padding.top,
          floor.img.padding.bottom,
        ]);
      return yScale(y);
    },
    [floor]
  );

  // Map Image
  // When floor data updated, draw floor map image
  useEffect(() => {
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
  useEffect(() => {
    const svg = select(svgRef.current);
    // position
    svg
      .append("circle")
      .attr("id", "user_position")
      .attr("cx", xScale(position.x))
      .attr("cy", floor.img.size.height - yScale(position.y))
      .attr("r", 8)
      .style("fill", "red")
      .style("stroke", "black");

    // TODO: 시간 표시
  }, [position, floor]);

  return <svg ref={svgRef}></svg>;
};

export default Map;
