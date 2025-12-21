import React from "react";
import {
    Accordion,
    AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function FaqAccordion() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);

    };

    return (
        <div className="mt-6 space-y-4 exo-text text-xs sm:text-sm md:text-base">
            <Accordion open={open === 1}>
                <div
                    onClick={() => handleOpen(1)}
                    className={`cursor-pointer !bg-white w-full flex justify-between items-center !p-4 !pt-6 rounded-xl ${open === 1 ? "rounded-b-none" : "delay-100 transition-all duration-100"}`}
                >
                    <span className={`text-gray-600 font-semibold transition-colors duration-200 ${open === 1 ? "text-orange-500" : ""}`}>What Does Royalty Free Mean?</span>
                    {open === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <AccordionBody className="!bg-white rounded-b-xl p-4 text-xs sm:text-sm md:text-base font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 2}>
                <div
                    onClick={() => handleOpen(2)}
                    className={`cursor-pointer !bg-white w-full flex justify-between items-center !p-4 !pt-6 rounded-xl ${open === 2 ? "rounded-b-none" : "delay-100 transition-all duration-100"}`}
                >
                    <span className={`text-gray-600 font-semibold transition-colors duration-200 ${open === 2 ? "text-orange-500" : ""}`}>What Does Royalty Free Mean?</span>
                    {open === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <AccordionBody className="!bg-white rounded-b-xl p-4 text-xs sm:text-sm md:text-base font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 3}>
                <div
                    onClick={() => handleOpen(3)}
                    className={`cursor-pointer !bg-white w-full flex justify-between items-center !p-4 !pt-6 rounded-xl ${open === 3 ? "rounded-b-none" : "delay-100 transition-all duration-100"}`}
                >
                    <span className={`text-gray-600 font-semibold transition-colors duration-200 ${open === 3 ? "text-orange-500" : ""}`}>What Does Royalty Free Mean?</span>
                    {open === 3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <AccordionBody className="!bg-white rounded-b-xl p-4 text-xs sm:text-sm md:text-base font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.
                </AccordionBody>
            </Accordion>
        </div>
    );
}
