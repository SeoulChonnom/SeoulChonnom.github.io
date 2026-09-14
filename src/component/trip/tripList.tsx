import type { trip } from '@/global/trip.ts'

function tripList(trip: trip) {
  return (
  <div className="mapDiv" /*@click="onClickMap()"*/>
    <div className="mapImgDiv">
      <img className="map" src={trip?.logo} />
    </div>
    <div className="mapDesc">
      {{ trip?.desc1 }}<br />
      {{ trip?.desc2 }}
    </div>
  </div>
  )
}

export default tripList;
