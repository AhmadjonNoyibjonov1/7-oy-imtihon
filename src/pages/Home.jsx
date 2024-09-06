import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Filter from "../components/FilterRegion";
import axios from "axios";
import Header from "../components/Header";
const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => console.log(error));
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

  return (
    <div>
        <Header></Header>
      <Filter onSearch={handleSearch} onFilter={handleFilter} />
      <div className="grid grid-cols-4 gap-[74px] p-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
