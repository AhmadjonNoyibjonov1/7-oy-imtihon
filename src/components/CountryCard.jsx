const CountryCard = ({ country }) => {
    return (
      <div className="border bg-white dark:bg-gray-800 dark:text-white rounded-[8px]">
        <img src={country.flags.png} alt={country.name.common} className="w-full h-32  rounded-t-[8px]" />
        <h2 className="ml-4 text-xl font-bold mt-2 text-gray-900 dark:text-white">{country.name.common}</h2>
        <p className="ml-4 text-gray-700 dark:text-gray-300">Population: {country.population.toLocaleString()}</p>
        <p className="ml-4 text-gray-700 dark:text-gray-300">Region: {country.region}</p>
        <p className="ml-4 mb-4 text-gray-700 dark:text-gray-300">Capital: {country.capital?.[0]}</p>
      </div>
    );
  };
  
  export default CountryCard;