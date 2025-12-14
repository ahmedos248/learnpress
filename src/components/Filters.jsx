import React from 'react'
import CategoryFilter from "./Filters/CategoryFilter";
import PriceFilter from "./Filters/PriceFilter";
import RatingFilter from "./Filters/RatingFilter";
import LevelFilter from "./Filters/LevelFilter";
import InstructorsFilter from "./Filters/InstructorsFilter";
const Filters = ({ filters, setFilters, courses }) => {
  return (
    <>
      <CategoryFilter
        filters={filters}
        setFilters={setFilters}
        courses={courses}
      />
      <InstructorsFilter
        filters={filters}
        setFilters={setFilters}
        courses={courses}
      />
      <PriceFilter
        filters={filters}
        setFilters={setFilters}
        courses={courses}
      />
      <RatingFilter
        filters={filters}
        setFilters={setFilters}
        courses={courses}
      />
      <LevelFilter
        filters={filters}
        setFilters={setFilters}
        courses={courses}
      />
    </>
  );
};

export default Filters
