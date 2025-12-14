import React from "react";

const Instructors = [
  "Omar Assem",
  "Ahmed Osama",
  "Mohamed Sherif",
  "Saleh Mohamed",
];

const InstructorsFilter = ({ filters, setFilters, courses }) => {
  const toggleInstructors = (instructor) => {
    setFilters((prev) => ({
      ...prev,
      instructors: prev.instructors.includes(instructor)
        ? prev.instructors.filter((c) => c !== instructor)
        : [...prev.instructors, instructor],
    }));
  };
 const getCount = (i) =>
   courses.filter((course) => course.instructor === i).length;

  return (
    <div>
      <h3 className="font-semibold mb-3">Instructors</h3>

      {Instructors.map((instructor) => (
        <label
          key={instructor}
          className="flex justify-between items-center mb-2"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="instructor"
              className="accent-black "
              checked={filters.instructors.includes(instructor)}
              onChange={() => toggleInstructors(instructor)}
            />
            <span>{instructor}</span>
          </div>
          <span className="text-sm text-gray-500 pr-6">
            {getCount(instructor)}
          </span>
        </label>
      ))}
    </div>
  );
};

export default InstructorsFilter;
