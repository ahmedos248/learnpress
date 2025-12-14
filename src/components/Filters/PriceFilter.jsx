const PriceFilter = ({ filters, setFilters ,courses }) => {
  const options = ["All", "Free", "Paid"];
 const getCount = (option) => {
   if (option === "All") {
     return courses.length;
   }

   if (option === "Free") {
     return courses.filter((course) => course.disc === "Free").length;
   }

   if (option === "Paid") {
     return courses.filter((course) => course.disc && course.disc !== "Free")
       .length;
   }

   return 0;
 };

  return (

    <div>
      <h3 className="font-semibold mb-3">Price</h3>

      {options.map((option) => {
        const isChecked =
          option === "Paid"
            ? filters.disc && filters.disc !== "Free"
            : option === "All"
            ? !filters.disc
            : filters.disc === option;

        return (
          <label
            key={option}
            className="flex justify-between items-center mb-2"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="price"
                checked={isChecked}
                className="accent-black"
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    disc: option === "All" ? null : option,
                  }))
                }
              />
              <span>{option}</span>
            </div>
            <span className="text-sm text-gray-500 pr-6">
              {getCount(option)}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default PriceFilter;
