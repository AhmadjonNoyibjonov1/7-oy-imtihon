import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Filter from "../components/FilterRegion";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const handleFilter = (region) => {
    const filtered = countries.filter((country) => country.region === region);
    setFilteredCountries(filtered);
  };

  const handleCountryClick = (country) => {
    navigate("/detailes", { state: { country } });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <div className="p-4 md:p-8 lg:p-20 mt-10">
        <Filter onSearch={handleSearch} onFilter={handleFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredCountries.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              onClick={() => handleCountryClick(country)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
