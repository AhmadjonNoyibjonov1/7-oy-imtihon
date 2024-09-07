const CountryCard = ({ country, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg cursor-pointer w-full sm:w-[300px] md:w-[264px]"
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-[160px] rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {country.name.common}
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Population: {country.population.toLocaleString()}
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Region: {country.region}
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          Capital: {country.capital?.[0]}
        </p>
      </div>
    </div>
  );
};
export default CountryCard;