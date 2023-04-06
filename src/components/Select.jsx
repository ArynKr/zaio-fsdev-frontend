const Select = ({ label, options, initial, data, setData, ...props }) => {
  return (
    <>
      <label
        htmlFor="courses"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <span className="text-gray-700 dark:text-gray-400">{label}</span>
      </label>
      <select
        id="courses"
        {...props}
        className="w-[100%] h-12 border-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setData(e.target.value)}
        value={data}
      >
        <option value="" disabled>
          {initial}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
