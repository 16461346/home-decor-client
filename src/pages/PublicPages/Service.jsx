import React, { useState, useEffect } from "react";
import Container from "../../components/Shared/Container";
import Card from "../../components/Home/Card";

const Service = () => {
  // Fake services data (এগুলো API থেকেও আসতে পারে)
  const servicesData = [
    { id: 1, name: "Home Cleaning", price: 50 },
    { id: 2, name: "AC Repairing", price: 30 },
    { id: 3, name: "Interior Decoration", price: 120 },
    { id: 4, name: "Plumbing Service", price: 40 },
    { id: 5, name: "Electrician", price: 25 },
    { id: 6, name: "Web Setup", price: 80 },
    { id: 7, name: "Garden Setup", price: 60 },
    { id: 8, name: "Sofa Cleaning", price: 35 },
  ];

  // States
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");
  const [services, setServices] = useState([]);

  // Load default data
  useEffect(() => {
    setServices(servicesData);
  }, []);

  // Search filter
  useEffect(() => {
    let filtered = servicesData.filter((service) =>
      service.name.toLowerCase().includes(searchText.toLowerCase())
    );

    // sort applied after search
    if (sortType === "price-low-high") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-high-low") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setServices(filtered);
  }, [searchText, sortType]);

  return (
    <Container>
      {/* Header Section */}
      <div
        className="mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left tracking-wide">
          Total Services ({services.length})
        </h2>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">

          {/* Search Box */}
          <label
            className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-64 md:w-80"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <svg
              className="h-5 w-5 opacity-50 mr-2"
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
              placeholder="Search services..."
              className="outline-none w-full text-gray-700"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>

          {/* Sort Dropdown */}
          <select
            className="border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-sm hover:shadow-md cursor-pointer transition-all duration-300"
            data-aos="zoom-in"
            data-aos-duration="1000"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="price-low-high">Price: Low → High</option>
            <option value="price-high-low">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* Cards Section */}
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 sm:gap-8">
        {services.map((service, i) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={i * 80}
            className="transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            <Card data={service} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Service;
