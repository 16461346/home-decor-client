import React, { useState, useEffect } from "react";
import Container from "../../components/Shared/Container";
import Card from "../../components/Home/Card";
import { useLoaderData } from "react-router";

const Service = () => {
  const servicesData = useLoaderData();

  // States
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("default");
  const [category, setCategory] = useState("");
  const [services, setServices] = useState([]);

  // Load default data
  useEffect(() => {
    setServices(servicesData);
  }, [servicesData]);

  // Filtering + Sorting
  useEffect(() => {
    let filtered = servicesData;

    // Search Filter
    if (searchText.trim() !== "") {
      filtered = filtered.filter((s) =>
        s.name.toLowerCase().includes(searchText.trim().toLowerCase())
      );
    }

    // Category Filter
    if (category !== "") {
      filtered = filtered.filter((s) => s.category === category);
    }

    // Sorting
    // Sorting
    if (sortType === "price-low-high") {
      filtered = filtered.slice().sort((a, b) => a.cost - b.cost);
    } else if (sortType === "price-high-low") {
      filtered = filtered.slice().sort((a, b) => b.cost - a.cost);
    }

    setServices(filtered);
  }, [searchText, sortType, category]);

  return (
    <Container>
      {/* Header Section */}
      <div className="mt-6" data-aos="fade-down" data-aos-duration="800">
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left tracking-wide">
          Available Decorations ({services.length})
        </h2>
      </div>

      <div className="md:mt-10 mt-4   items-center  md:flex  flex justify-between sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="pl-4 mt-4 md:mt-0 w-1/3 sm:w-64 md:w-80 h-8 ">
          {/* Search Box */}
          <label className="flex items-center  border border-primary rounded-xl px-2 sm:px-3 sm:h-10 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 opacity-50 mr-2"
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
              className="outline-none w-full text-sm sm:text-base text-gray-700"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </label>
        </div>

        {/*sort funtonality */}
        <div className="items-center rounded-xl px-3  bg-white shadow-sm hover:shadow-md transition-all duration-300 w-1/3 sm:w-64 md:w-60">
          {/* Category Dropdown */}
          <div className="w-full sm:w-64 md:w-full">
            <select
              className="select h-4 md:h-9 w-full text-sm sm:text-base mt-1 outline-0 border border-gray-300 rounded-md focus:border-primary focus:ring-0 focus:ring-primary"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="home">Home Decoration</option>
              <option value="wedding">Wedding Decoration</option>
              <option value="office">Office / Corporate</option>
              <option value="ceremony">Ceremony</option>
              <option value="event">Event / Birthday</option>
            </select>
          </div>

          {/* Sort */}
          <div className="w-full sm:w-64 md:w-full">
            <select
              className="select h-4 md:h-9  w-full text-sm sm:text-base mt-1 outline-0 border border-gray-300 rounded-md focus:border-primary focus:ring-0 focus:ring-primary"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low → High</option>
              <option value="price-high-low">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
  <div className="md:pt-12 grid grid-cols-1 md:grid-cols-3  gap-6 sm:gap-8">
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
