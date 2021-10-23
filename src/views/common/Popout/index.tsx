import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Prop = {
  title: string;
  url: string;
  name: string;
  features?: string;
  closeWindow: Function;
};

const Popout: React.FC<Prop> = (props) => {
  const [containerElement, setContainerElement] =
    useState<HTMLDivElement | null>(null);

  useEffect(() => {
    // FIXME: features 크기 변경
    const features =
      props.features ?? "width=1000 height=1000 left=300 top=200";

    const externalWindow = window.open(props.url, props.name, features);
    let _containerElement = null;

    if (externalWindow) {
      externalWindow.document.body.innerHTML = "";
      _containerElement = externalWindow.document.createElement("div");
      externalWindow.document.body.appendChild(_containerElement);

      externalWindow.document.title = props.title;

      externalWindow.addEventListener("beforeunload", () => {
        props.closeWindow();
      });
    }

    setContainerElement(_containerElement);
  }, [props]);
  return containerElement
    ? createPortal(props.children, containerElement)
    : null;
};

export default Popout;
