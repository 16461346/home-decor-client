import React, { useRef } from "react";
import Container from "../../components/Shared/Container";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const covarege = useLoaderData();
  const mapRef = useRef(null);

  const handleSarch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = covarege.find((centert) =>
      centert.name.toLowerCase().includes(location.toLowerCase())
    );

    if (district) {
      const sarchDistrict = [district.lat, district.lng];
      mapRef.current.flyTo(sarchDistrict, 14);
    }
  };

  return (
    <Container>
      <div className="my-6">
        <div className="text-center">
          <h1 className="text-center text-2xl font-semibold">
            Where we provide services !
          </h1>
          <p>
            Enter the name of your district in the box and see the decoration
            center nearest to you.
          </p>
        </div>

        <div className="mt-6">
          <form onSubmit={handleSarch}>
            <label className="input my-6">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                name="location"
                required
                placeholder="Search"
              />
            </label>
            <button className="btn bg-secondary ml-2">Sarch</button>
          </form>
          <MapContainer
            center={position}
            zoom={8}
            style={{ height: "500px", width: "100%" }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {covarege.map((center, i) => (
              <Marker key={i} position={[center.lat, center.lng]}>
                <Popup>
                  {" "}
                  <p>
                    <strong>{center.name}</strong>
                    <br />
                    {center.address}
                  </p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
  {covarege.map((center, i) => (
    <div
      key={i}
      className="flex items-start p-4 border rounded-xl shadow hover:shadow-lg transition bg-white"
    >
      {/* Icon */}
      <div className="text-secondary mt-1 mr-3">
        <FaMapMarkerAlt size={24} />
      </div>

      {/* Name & Address */}
      <div>
        <h3 className="font-semibold text-lg text-gray-800">{center.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{center.address}</p>
      </div>
    </div>
  ))}
</div>
      </div>
    </Container>
  );
};

export default Coverage;
