import React from "react";
import clsx from "clsx";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

import styles from "./YandexMap.module.scss";

interface IYandexMap extends React.ComponentPropsWithoutRef<"section"> {
  centerCoord: [number, number],
  zoom: number,
  geometry: [number, number]
}

export const YandexMap = ({ className, centerCoord, zoom, geometry }: any) => {
  return (
    <section className={clsx(styles.map, className)}>
      <YMaps>
        <Map 
          instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
          width={"100%"}
          height={"100%"}
          defaultState={{
            center: centerCoord,
            zoom: zoom,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark defaultGeometry={geometry} />
        </Map>
      </YMaps>
    </section>
  )
}

const defaultProps: IYandexMap = {
  centerCoord:[55.75, 37.57],
  zoom: 9,
  geometry: [25.167107, 55.230750]
};

YandexMap.defaultProps = defaultProps;

export default defaultProps;