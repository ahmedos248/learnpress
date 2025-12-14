import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const FAQItem = ({ FAQ, index, open, onToggle }) => (
  <div className="border border-[#E0E0E0] bg-gray-100 rounded-lg px-4 py-2">
    <button
      className="flex justify-between items-center w-full"
      onClick={() => onToggle(index)}
    >
      <span
        className={`font-semibold py-2 ${
          open === index ? "text-orange-500" : "text-[#141414]"
        }`}
      >
        {FAQ.q}
      </span>
      {open === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>

    {open === index && <p className="text-sm text-[#757575] pb-2">{FAQ.a}</p>}
  </div>
);
export default FAQItem
