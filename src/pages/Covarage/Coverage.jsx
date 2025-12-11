import React, { useRef } from "react";
import Container from "../../components/Shared/Container";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { FaMapMarkerAlt } from "react-icons/fa";

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const covarege = useLoaderData(); // LoaderData থেকে JSON
  const mapRef = useRef(null);

  // Search function
  const handleSarch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.toLowerCase();

    // সব division-এর সব district-এ খুঁজবে
    let districtFound = null;
    for (let division of covarege) {
      districtFound = division.districts.find((district) =>
        district.name.toLowerCase().includes(location)
      );
      if (districtFound) break;
    }

    if (districtFound) {
      const sarchDistrict = [districtFound.lat, districtFound.lng];
      mapRef.current.flyTo(sarchDistrict, 14);
    }
  };

  return (
    <Container>
      <div className="my-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Where we provide services!</h1>
          <p>
            Enter the name of your district in the box and see the decoration
            center nearest to you.
          </p>
        </div>

        {/* Search Form */}
        <div className="mt-6">
          <form className="flex items-center" onSubmit={handleSarch}>
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

          {/* Map */}
          <MapContainer
            center={position}
            zoom={8}
            style={{ height: "500px", width: "100%" }}
            ref={mapRef}
            className="mt-6"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {covarege.map((division) =>
              division.districts.map((district, i) => (
                <Marker key={i} position={[district.lat, district.lng]}>
                  <Popup>
                    <strong>{district.name}</strong>
                  </Popup>
                </Marker>
              ))
            )}
          </MapContainer>
        </div>

        {/* District Grid */}
        <div className="mt-6 space-y-8">
          {covarege.map((division, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold mb-4">
                {division.division} Division
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {division.districts.map((district, j) => (
                  <div
                    key={j}
                    className="flex items-start p-4 border rounded-xl shadow hover:shadow-lg transition bg-white"
                  >
                    <div className="text-secondary mt-1 mr-3">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {district.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {district.address || "No address provided"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Coverage;
