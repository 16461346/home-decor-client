import React from "react";
import Container from "../../components/Shared/Container";
import Card from "../../components/Home/Card";

const Service = () => {
  return (
    <Container>
      <div className="mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-2xl font-semibold">Total Services (80)</h2>

        <div className="flex gap-4 items-center">
          {/* Search input */}
          <label className="input flex items-center border border-gray-300 rounded-md px-2 py-1">
            <svg
              className="h-[1em] opacity-50 mr-2"
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
            <input type="search" required placeholder="Search" className="outline-none  w-80" />
          </label>

          {/* Sort By dropdown */}
          <select className="border border-gray-300 rounded-md px-3 py-1">
            <option value="default">Sort By</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Cards grid */}
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
};

export default Service;
