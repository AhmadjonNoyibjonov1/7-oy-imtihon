const FilterRegion = ({ onSearch, onFilter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pb-8 md:pb-12">
      <input
        type="text"
        placeholder="Search for a country..."
        className="p-2 h-14 text-gray-900 dark:text-white dark:bg-gray-700 rounded w-full md:w-[480px]"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="p-2 mt-4 md:mt-0 text-gray-900 dark:text-white dark:bg-gray-700 rounded"
        onChange={(e) => onFilter(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
export default FilterRegion;
