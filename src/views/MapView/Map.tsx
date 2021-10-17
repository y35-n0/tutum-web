import React, { useState, useEffect, useRef, useCallback } from "react";
import { select } from "d3";
import { scaleLinear } from "d3-scale";
import _ from "lodash";
import LocationExtended from "../../types/LocationExtended";

const REFETCH_INTERVAL_MS = 1000;

type Props = {
  userId: number;
};

// FIXME: not working properly
const Map: React.FC<Props> = (props) => {
  const [location, setLocation] = useState<LocationExtended>(
    () => new LocationExtended({ userId: props.userId })
  );
  const svgRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setLocation((prev) => new LocationExtended({ prev: prev }));
    }, 1000);
  }, []);

  useEffect(() => {
    console.dir(location);
  }, [location]);

  // // Scale
  // // When floor data updated, update scale functions.
  // const xScale = useCallback(
  //   (x) => {
  //     if (!position) return null;

  //     const xScale = scaleLinear()
  //       .domain([0, position.building.size.width])
  //       .range([
  //         position.floor.img.padding.left,
  //         position.floor.img.size.width - position.floor.img.padding.right,
  //       ]);
  //     return xScale(x);
  //   },
  //   [position?.floor, position?.building]
  // );

  // const yScale = useCallback(
  //   (y) => {
  //     if (!position) return null;
  //     const yScale = scaleLinear()
  //       .domain([position.building.size.height, 0])
  //       .range([
  //         position.floor.img.size.height - position.floor.img.padding.top,
  //         position.floor.img.padding.bottom,
  //       ]);
  //     return yScale(y);
  //   },
  //   [position?.floor, position?.building]
  // );

  // // Map Image
  // // When floor data updated, draw floor map image
  // useEffect(() => {
  //   if (!position) return;

  //   const svg = select(svgRef.current)
  //     .attr("width", position.floor.img.size.width)
  //     .attr("height", position.floor.img.size.height);

  //   // image
  //   svg
  //     .append("image")
  //     .attr("id", "background_map_img")
  //     .attr("x", 0)
  //     .attr("y", 0)
  //     .attr("width", position.floor.img.size.width)
  //     .attr("height", position.floor.img.size.height)
  //     .attr("xlink:href", position.floor.img.url);
  // }, [position?.floor]);

  // // Position Marker
  // // When position data or floor data updated, draw position marker.
  // // FIXME: when data fetcted, window refeshes.
  // useEffect(() => {
  //   if (!position) return;

  //   const svg = select(svgRef.current);
  //   // position

  //   svg
  //     .append("circle")
  //     .attr("id", "user_position")
  //     .attr("cx", xScale(position.x))
  //     .attr("cy", position.floor.img.size.height - yScale(position.y)!)
  //     .attr("r", 8)
  //     .style("fill", "red")
  //     .style("stroke", "black");

  //   // TODO: 시간 표시
  // }, [position]);

  // // When error occurs or loading data
  // if (error) throw new Error();
  // if (!position) return <p>Loading...</p>;

  // return <svg ref={svgRef}></svg>;
  return <></>;
};

export default Map;
