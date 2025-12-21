import { AiOutlineFilter, AiOutlineClose } from "react-icons/ai";
import Filters from "./Filters";

const MobileFilter = ({ className = '', filters, setFilters, courses }) => {
  return (
    <div className={`space-y-6 text-sm font-medium p-4 max-w-xs ${className}`}>
      <Filters
        filters={filters}
        setFilters={setFilters}
        courses={courses}
      />
    </div>
  );
};

export default MobileFilter;
