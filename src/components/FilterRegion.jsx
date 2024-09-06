const FilterRegion = ({ onSearch, onFilter }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <input
        type="text"
        placeholder="Search for a country..."
        className="border p-2 w-1/2 text-gray-900 dark:text-white dark:bg-gray-700 rounded w-[480px]"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="border p-2 text-gray-900 dark:text-white dark:bg-gray-700"
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
