import React from "react";

const levels = ["Beginner", "Intermediate", "Expert"];

const LevelFilter = ({ filters, setFilters, courses }) => {
 const toggleLevels = (level) => {
   setFilters((prev) => ({
     ...prev,
     levels: prev?.levels?.includes(level)
       ? prev.levels.filter((c) => c !== level)
       : [...(prev.levels || []), level],
   }));
 };

 const getCount = (l) => courses.filter((course) => course.level === l).length;

  return (
    <div>
      <h3 className="font-semibold mb-3">Level</h3>

      {levels.map((level) => (
        <label key={level} className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="level"
              className="accent-black "
              checked={filters.levels?.includes(level) || false}
              onChange={() => toggleLevels(level)}
            />
            <span>{level}</span>
          </div>
          <span className="text-sm text-gray-500 pr-6">{getCount(level)}</span>
        </label>
      ))}
    </div>
  );
};

export default LevelFilter;
