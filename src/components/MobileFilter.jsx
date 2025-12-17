import  { useState } from "react";
import { AiOutlineFilter, AiOutlineClose } from "react-icons/ai"; 
import Filters from "./Filters"; 

const MobileFilter = ({ filters, setFilters, courses }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 p-2 bg-orange-500 text-white rounded-md"
      >
        <AiOutlineFilter size={25} />
        Filters
      </button>
      {open && (
        <div className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-30 p-6 flex flex-col overflow-y-auto pb-9 pt-20">
          <div className=" flex justify-end mb-4">
            <button onClick={() => setOpen(false)}>
              <AiOutlineClose size={25} />
            </button>
          </div>

        
          <Filters
            filters={filters}
            setFilters={setFilters}
            courses={courses}
          />
        </div>
      )}

      
    </div>
  );
};

export default MobileFilter;
