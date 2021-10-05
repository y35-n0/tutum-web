import React, { useState, useEffect, useRef, useCallback } from "react";
import { select } from "d3";
import { scaleLinear } from "d3-scale";
import { useQuery } from "react-query";
import { deserialize } from "typescript-json-serializer";
import { Position } from "../../@types/mapAPITypes";
import { getMap } from "../../api/mapApi";
import _ from "lodash";

const REFETCH_INTERVAL_MS = 1000;

type Props = {
  targetId: number;
};

const Map: React.FC<Props> = ({ targetId }) => {
  // Fetch position data
  const { data, error } = useQuery("position", () => getMap(targetId), {
    refetchInterval: REFETCH_INTERVAL_MS,
    // FIXME: position이 1초에 3번씩 업데이트 되며 null, null, data를 가지고 있음. position을 변경할 때 nested object도 함께 바뀌기 때문에 발생하는 (floor, building) 문제일 수도 있을 것 같음
    onSuccess: (data) => {
      const _position = deserialize<Position>(data, Position);
      if (!_.isEqual(_position, position)) {
        setPosition(_position);
      }
    },
  });

  const [position, setPosition] = useState<Position | null>(null);

  const svgRef = useRef(null);

  // Scale
  // When floor data updated, update scale functions.
  const xScale = useCallback(
    (x) => {
      if (!position) return null;

      const xScale = scaleLinear()
        .domain([0, position.building.size.width])
        .range([
          position.floor.img.padding.left,
          position.floor.img.size.width - position.floor.img.padding.right,
        ]);
      return xScale(x);
    },
    [position?.floor, position?.building]
  );

  const yScale = useCallback(
    (y) => {
      if (!position) return null;
      const yScale = scaleLinear()
        .domain([position.building.size.height, 0])
        .range([
          position.floor.img.size.height - position.floor.img.padding.top,
          position.floor.img.padding.bottom,
        ]);
      return yScale(y);
    },
    [position?.floor, position?.building]
  );

  // Map Image
  // When floor data updated, draw floor map image
  useEffect(() => {
    if (!position) return;

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
  }, [position?.floor]);

  // Position Marker
  // When position data or floor data updated, draw position marker.
  // FIXME: when data fetcted, window refeshes.
  useEffect(() => {
    if (!position) return;

    const svg = select(svgRef.current);
    // position

    svg
      .append("circle")
      .attr("id", "user_position")
      .attr("cx", xScale(position.x))
      .attr("cy", position.floor.img.size.height - yScale(position.y)!)
      .attr("r", 8)
      .style("fill", "red")
      .style("stroke", "black");

    // TODO: 시간 표시
  }, [position]);

  // When error occurs or loading data
  if (error) throw new Error();
  if (!position) return <p>Loading...</p>;

  return <svg ref={svgRef}></svg>;
};

export default Map;
