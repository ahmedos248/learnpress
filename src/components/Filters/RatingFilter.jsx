import { FaStar } from "react-icons/fa";

const ratings = [5, 4, 3, 2, 1];

const RatingFilter = ({ filters, setFilters, courses }) => {
  const getCount = (rate) =>
    courses.filter((course) => course.rating >= rate).length;

  return (
    <div>
      <h3 className="font-semibold mb-3">Review</h3>

      {ratings.map((rate) => (
        <label
          key={rate}
          className="flex justify-between items-center mb-2 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.rating === rate}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  rating: prev.rating === rate ? null : rate,
                }))
              }
              className="accent-black"
            />

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < rate ? "text-[#F4BF08]" : "text-gray-300"}
                />
              ))}
            </div>
          </div>

          <span className="text-sm text-gray-500 pr-6">{getCount(rate)}</span>
        </label>
      ))}
    </div>
  );
};

export default RatingFilter;
