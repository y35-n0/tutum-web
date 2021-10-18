import React, { useEffect, useRef, useCallback } from "react";
import { select } from "d3";
import { scaleLinear } from "d3-scale";
import useLocation from "../../hooks/useLocation";

const REFETCH_INTERVAL_MS = 1000;

type Props = {
  userId: number;
};

// FIXME: seperate file to presenter and container
const Map: React.FC<Props> = (props) => {
  const [location, updateLocation] = useLocation(props.userId);
  const svgRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(async () => {
      await updateLocation();
    }, REFETCH_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [updateLocation]);

  // Scale
  // When floor data updated, update scale functions.
  const xScale = useCallback(
    (x) => {
      if (!location.floor || !location.building) return null;

      const xScale = scaleLinear()
        .domain([0, location.building.size.width])
        .range([
          location.floor.img.padding.left,
          location.floor.img.size.width - location.floor.img.padding.right,
        ]);
      return xScale(x);
    },
    [location.floor, location.building]
  );

  const yScale = useCallback(
    (y) => {
      if (!location.floor || !location.building) return null;
      const yScale = scaleLinear()
        .domain([location.building.size.height, 0])
        .range([
          location.floor.img.size.height - location.floor.img.padding.top,
          location.floor.img.padding.bottom,
        ]);
      return yScale(y);
    },
    [location.floor, location.building]
  );

  // Map Image
  // When floor data updated, draw floor map image
  useEffect(() => {
    if (!location.floor) return;

    const svg = select(svgRef.current)
      .attr("width", location.floor.img.size.width)
      .attr("height", location.floor.img.size.height);

    // image
    svg
      .selectAll("#backgroundMapImg")
      .data([location])
      .join("image")
      .attr("id", "backgroundMapImg")
      .attr("x", 0)
      .attr("y", 0)
      // .attr("width", location.floor.img.size.width)
      // .attr("height", location.floor.img.size.height)
      .attr("xlink:href", (d) => d.floor!.img.url);
  }, [location.floor]);

  // location Marker
  // When location data or floor data updated, draw location marker.
  useEffect(() => {
    if (!location.floor) return;

    const svg = select(svgRef.current);
    // location

    svg
      .selectAll("#userLocation")
      .data([location])
      .join("circle")
      .attr("id", "userLocation")
      .attr("cx", (d) => xScale(d.x))
      .attr("cy", (d) => d.floor!.img.size.height - yScale(d.y)!)
      .attr("r", 8)
      .style("fill", "red")
      .style("stroke", "black");

    // TODO: 시간 표시
  }, [location, xScale, yScale]);

  // When error occurs or loading data
  if (!location) return <p>Loading...</p>;

  return <svg ref={svgRef}></svg>;
};

export default Map;
