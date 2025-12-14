import React from 'react'
const categories = [
  "Commercial",
  "Office",
  "Shop",
  "Academy",
  "Educate",
  "Single family home",
  "Studio",
  "University",
];

const CategoryFilter = ({ filters, setFilters, courses }) => {
  const toggleCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };
  const getCount = (cat) =>
    courses.filter((course) => course.category === cat).length;

  return (
    <div>
      <h3 className="font-semibold mb-3">Course Category</h3>

      {categories.map((cat) => (
        <label key={cat} className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.categories.includes(cat)}
              onChange={() => toggleCategory(cat)}
              className="accent-black"
            />
            <span>{cat}</span>
          </div>

          <span className="text-sm text-gray-500 pr-6">{getCount(cat)}</span>
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter
