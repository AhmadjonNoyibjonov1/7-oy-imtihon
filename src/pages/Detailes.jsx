import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Loader from "../components/Loader";

const Detailes = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (state?.country) {
      localStorage.setItem("selectedCountry", JSON.stringify(state.country));
      setCountry(state.country);
      setLoading(false);
    } else {
      const savedCountry = JSON.parse(localStorage.getItem("selectedCountry"));
      if (savedCountry) {
        setCountry(savedCountry);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, [state]);

  useEffect(() => {
    if (country?.borders?.length > 0) {
      axios
        .get(
          `https://restcountries.com/v3.1/alpha?codes=${country.borders.join(
            ","
          )}`
        )
        .then((response) => {
          setBorderCountries(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [country]);

  if (loading) {
    return <Loader />;
  }

  if (!country) {
    return <div>No country data found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white min-h-screen">
      <Header />
      <div className="p-4 md:p-8 lg:p-20">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 mb-10 bg-gray-200 dark:bg-gray-700 text-black dark:text-light rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          ← Back
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-[560px] h-[401px] rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {country.name.common}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p>
                  <strong>Native Name:</strong>{" "}
                  {country.name.nativeName?.common || "N/A"}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {country.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
                </p>
              </div>
              <div>
                <p>
                  <strong>Top Level Domain:</strong> {country.tld?.[0]}
                </p>
                <p>
                  <strong>Currencies:</strong>{" "}
                  {Object.values(country.currencies || {})
                    .map((currency) => currency.name)
                    .join(", ") || "N/A"}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {Object.values(country.languages || {}).join(", ") || "N/A"}
                </p>
              </div>
            </div>

            {borderCountries.length > 0 && (
              <div className="mt-10">
                <strong>Border Countries:</strong>
                <div className="flex flex-wrap gap-3 mt-3">
                  {borderCountries.map((borderCountry) => (
                    <span
                      key={borderCountry.cca3}
                      onClick={() => handleBorderClick(borderCountry)}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-light rounded-md shadow-sm cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                      {borderCountry.name.common}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailes;
