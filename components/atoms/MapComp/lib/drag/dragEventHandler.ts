import mapboxgl from "mapbox-gl";
import React from "react";
import { CameraStateType } from "../../../../../libs/states/map/map";
type DragEventHandlerType = (
    e: mapboxgl.MapboxEvent<MouseEvent | TouchEvent | undefined> & mapboxgl.EventData,
    ref: React.MutableRefObject<CameraStateType>
) => CameraStateType


export const dragEventHandler: DragEventHandlerType = (e, ref) => {
 
    const currentCameraState =
    {
        ...ref.current,
        center: e.target.getCenter(),
        bearing: e.target.getBearing(),
        pitch: e.target.getPitch(),
        zoom : e.target.getZoom(),
        
    }

    return currentCameraState;
}