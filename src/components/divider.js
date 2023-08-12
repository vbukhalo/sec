import * as React from "react";
import Schedule from "./schedule";
import Map from "./map";

const Divider = () => {
  return (
    <div class="flex flex-col w-full lg:flex-row mt-4">
      <Schedule></Schedule>
      <div class="divider lg:divider-horizontal"></div>
      <Map></Map>
    </div>
  );
};

export default Divider;
