import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
// import L from "leaflet";

import "./App.css";

interface Point {
  lat: number | null;
  lng: number | null;
  missData: boolean;
}

const RouteMap = ({ points }) => {
  // Ensure points is not empty and has valid coordinates
  if (!points || points.length === 0) return <p>No route data available.</p>;

  return (
    <MapContainer
      style={{ height: "100vh", width: "100vw" }}
      center={{ lat: 51.505, lng: -0.09 }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
    </MapContainer>
  );
};

function App() {
  const points = [
    { lat: 35.6895, lng: 51.389, missData: false },
    { lat: null, lng: null, missData: true },
    { lat: 35.7024, lng: 51.4067, missData: false },
    { lat: 35.7124, lng: 51.4256, missData: false },
    { lat: null, lng: null, missData: true },
    { lat: 35.7235, lng: 51.5256, missData: false },
    { lat: 35.7355, lng: 51.6216, missData: false },
    { lat: null, lng: null, missData: true },
  ];

  const processRoutes = (points: Point[]) => {
    const solidRoutes: [number, number][][] = [];
    const dottedRoutes: [number, number][][] = [];

    let tempSolid: [number, number][] = [];
    let lastValidPoint: [number, number] | null = null;

    points.forEach((point, index) => {
      const { lat, lng, missData } = point;

      if (!missData && lat !== null && lng !== null) {
        tempSolid.push([lat, lng]);
        if (lastValidPoint && tempSolid.length === 1) {
          tempSolid.unshift(lastValidPoint);
        }
        lastValidPoint = [lat, lng];
      } else {
        if (tempSolid.length > 1) {
          solidRoutes.push([...tempSolid]);
        }
        tempSolid = [];
        const nextValidPoint = points
          .slice(index + 1)
          .find((p) => !p.missData && p.lat !== null && p.lng !== null);
        if (lastValidPoint && nextValidPoint) {
          dottedRoutes.push([
            lastValidPoint,
            [nextValidPoint.lat!, nextValidPoint.lng!],
          ]);
        }
      }
    });

    if (tempSolid.length > 1) {
      solidRoutes.push(tempSolid);
    }

    return { solidRoutes, dottedRoutes };
  };

  const { solidRoutes, dottedRoutes } = processRoutes(points);

  return (
    <div className="container">
      <MapContainer
        center={[35.7153, 51.425]}
        zoom={12}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {solidRoutes.map((route, index) => (
          <Polyline
            key={`solid-${index}`}
            positions={route}
            color="gray"
            weight={4}
          />
        ))}
        {dottedRoutes.map((route, index) => (
          <Polyline
            key={`dotted-${index}`}
            positions={route}
            color="red"
            weight={3}
            dashArray="5, 10"
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
