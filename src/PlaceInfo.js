import Map from "mapmyindia-react/dist/Map";
import { useState } from "react";


const PlaceInfo = () => {
    const [lat, setLat] = useState(18.51957);
    const [lng, setLng] = useState(73.85535);
    return ( 
        <div>
        <Map
        markers={[
          {
            position: [lat, lng],
            draggable: true,
            title: "Marker title",
            onClick: e => {
              console.log("clicked ");
            },
            onDragend: e => {
              console.log("dragged");
            }
          }
        ]}
        />
        </div>
     );
}
 
export default PlaceInfo;