"use client"
import React from 'react';
import { Panel, useReactFlow, getRectOfNodes, getTransformForBounds } from 'reactflow';
import { toPng } from 'html-to-image';
import { Button } from "@/components/ui/button"
function downloadImage(dataUrl: string) {
  const a = document.createElement('a');

  a.setAttribute('download', 'reactflow.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 768;

function DownloadButton() {
  const { getNodes } = useReactFlow();

  const onClick = () => {

    const nodesBounds = getRectOfNodes(getNodes());
    const transform = getTransformForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2);
    const viewportElement = document.querySelector('.react-flow__viewport') as HTMLElement;
    if (!viewportElement) {
      console.error('Viewport element not found');
      return;
    }
    toPng(viewportElement, {
      backgroundColor: '#1a365d',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth.toString() + 'px',
        height: imageHeight.toString() + 'px',
        transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
      },
    }).then(downloadImage);

  };

  return (
    <Panel position="top-right">
      <Button className="download-btn" onClick={onClick}>
        Download Image
      </Button>
    </Panel>
  );
}

export default DownloadButton;
