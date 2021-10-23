import React, { useEffect, useRef, useCallback } from "react";
import { select } from "d3";
import { scaleLinear } from "d3-scale";
import { TLocationExtended } from "../../../hooks/useLocation";

type Props = {
  location: TLocationExtended;
};

const MapContent: React.FC<Props> = (props) => {
  const svgRef = useRef(null);
  // Scale
  // When floor data updated, update scale functions.
  const xScale = useCallback(
    (x) => {
      if (!props.location.floor || !props.location.building) return null;

      const xScale = scaleLinear()
        .domain([0, props.location.building.size.width])
        .range([
          props.location.floor.img.padding.left,
          props.location.floor.img.size.width -
            props.location.floor.img.padding.right,
        ]);
      return xScale(x);
    },
    [props.location.floor, props.location.building]
  );

  const yScale = useCallback(
    (y) => {
      if (!props.location.floor || !props.location.building) return null;
      const yScale = scaleLinear()
        .domain([props.location.building.size.height, 0])
        .range([
          props.location.floor.img.size.height -
            props.location.floor.img.padding.top,
          props.location.floor.img.padding.bottom,
        ]);
      return yScale(y);
    },
    [props.location.floor, props.location.building]
  );

  // Map Image
  // When floor data updated, draw floor map image
  useEffect(() => {
    if (!props.location.floor) return;

    const svg = select(svgRef.current)
      .attr("width", props.location.floor.img.size.width)
      .attr("height", props.location.floor.img.size.height);

    // image
    svg
      .selectAll("#backgroundMapImg")
      .data([props.location])
      .join("image")
      .attr("id", "backgroundMapImg")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", props.location.floor.img.size.width)
      .attr("height", props.location.floor.img.size.height)
      .attr("xlink:href", (d) => d.floor!.img.url);
  }, [props.location.floor]);

  // location Marker
  // When location data or floor data updated, draw location marker.
  useEffect(() => {
    if (!props.location.floor) return;

    const svg = select(svgRef.current);
    // location

    svg
      .selectAll("#userLocation")
      .data([props.location])
      .join("circle")
      .attr("id", "userLocation")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => d.floor!.img.size.height - yScale(d.y)!)
      .attr("r", 8)
      .style("fill", "red")
      .style("stroke", "black");
  }, [props.location, xScale, yScale]);

  return <svg ref={svgRef}></svg>;
};

export default MapContent;
