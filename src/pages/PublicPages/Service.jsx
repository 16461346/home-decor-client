import React, { useState, useEffect } from "react";
import Container from "../../components/Shared/Container";
import Card from "../../components/Home/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ErrorPage from "../ErrorPage";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const Service = () => {
  const {
    data: servicesData = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["services3"],
    queryFn: async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/decorations`);
      return result.data;
    },
  });

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
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (sortType === "price-high-low") {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    }

    setServices(filtered);
  }, [searchText, sortType, category, servicesData]);

  if (isError) return <ErrorPage />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <Container>
      <div
        className="md:mt-6 sticky top-20 z-1
             bg-base-100/90 backdrop-blur
             flex flex-col md:flex-row md:items-center md:justify-between gap-4
             py-3"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        {/* LEFT */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-center sm:text-left">
            Available ({services.length})
          </h2>

          {/* Search */}
          <div className="w-full sm:w-64 md:w-72">
            <label className="flex items-center border rounded-xl px-3 h-10 bg-base-100 border-base-content/30 shadow-sm">
              <svg
                className="h-5 w-5 opacity-50 mr-2 text-base-content"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="search"
                placeholder="Search services..."
                className="outline-none w-full text-sm sm:text-base bg-transparent"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </label>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-row gap-3 w-full md:w-auto">
          <select
            className="select h-10 w-1/2 sm:w-56 bg-base-100 border border-base-content/30 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Category</option>
            <option value="home">Home</option>
            <option value="wedding">Wedding</option>
            <option value="office">Office</option>
            <option value="ceremony">Ceremony</option>
            <option value="event">Event</option>
          </select>

          <select
            className="select h-10 w-1/2 sm:w-44 bg-base-100 border border-base-content/30 rounded-md"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Price</option>
            <option value="price-low-high">Low → High</option>
            <option value="price-high-low">High → Low</option>
          </select>
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
