import { Accordion, AccordionBody } from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const FAQItem = ({ FAQ, index, open, onToggle }) => (
  <Accordion
    open={open === index}
    className="border border-[#E0E0E0] bg-gray-100 rounded-lg px-4 py-2">
    <button
      className="flex justify-between items-center w-full"
      onClick={() => onToggle(index)}
    >
      <span
        className={`font-semibold py-2 ${open === index ? "text-orange-500" : "text-[#141414]"
          }`}
      >
        {FAQ.q}
      </span>
      {open === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
    <AccordionBody>
      {FAQ.a}
    </AccordionBody>
  </Accordion>
);
export default FAQItem
