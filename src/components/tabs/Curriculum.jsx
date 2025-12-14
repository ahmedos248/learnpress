import React from "react";
import {
    Accordion,
    AccordionBody,
} from "@material-tailwind/react";
import Lessons from "./Lessons";

function Icon({ id, open }) {
    return (
        <svg
            className={`w-3 h-3 transition-transform ${id === open ? "" : "rotate-180"
                }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 10 6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5L5 1 1 5"
            />
        </svg>
    );
}

export function Curriculum() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);

    };

    return (
        <div className="mt-6 space-y-4 exo-text">
            <Accordion open={open === 1}>
                <div
                    onClick={() => handleOpen(1)}
                    className={`cursor-pointer !bg-white w-full flex justify-between items-center !p-4 !pt-6 rounded-xl ${open === 1 ? "rounded-b-none" : "delay-100 transition-all duration-100"}`}
                >
                    <div className="flex items-center gap-2">
                        <Icon id={1} open={open} />
                        <span className={`text-gray-600 font-semibold transition-colors duration-200 ${open === 1 ? "text-orange-500" : ""}`}>Lessons with video content</span>
                    </div>

                    <div className="flex items-center gap-4 text-gray-600 font-medium">
                        <span>5 Lessons</span>
                        <span>45 Mins</span>
                    </div>
                </div>

                <AccordionBody className="!bg-white rounded-b-xl p-3">
                    <Lessons />
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 2}>
                <div
                    onClick={() => handleOpen(2)}
                    className={`cursor-pointer !bg-white w-full flex justify-between items-center !p-4 !pt-6 rounded-xl ${open === 2 ? "rounded-b-none" : "delay-100 transition-all duration-100"}`}
                >
                    <div className="flex items-center gap-2">
                        <Icon id={2} open={open} />
                        <span className={`text-gray-600 font-semibold transition-colors duration-200 ${open === 2 ? "text-orange-500" : ""}`}>Lessons with video content</span>
                    </div>

                    <div className="flex items-center gap-4 text-gray-600 font-medium">
                        <span>5 Lessons</span>
                        <span>45 Mins</span>
                    </div>
                </div>

                <AccordionBody className="!bg-white rounded-b-xl p-3">
                    <Lessons />
                </AccordionBody>
            </Accordion>

            <Accordion open={open === 3}>
                <div
                    onClick={() => handleOpen(3)}
                    className={`cursor-pointer !bg-white w-full flex justify-between items-center !p-4 !pt-6 rounded-xl ${open === 3 ? "rounded-b-none" : "delay-100 transition-all duration-100"}`}
                >
                    <div className="flex items-center gap-2">
                        <Icon id={3} open={open} />
                        <span className={`text-gray-600 font-semibold transition-colors duration-200 ${open === 3 ? "text-orange-500" : ""}`}>Lessons with video content</span>
                    </div>

                    <div className="flex items-center gap-4 text-gray-600 font-medium">
                        <span>5 Lessons</span>
                        <span>45 Mins</span>
                    </div>
                </div>

                <AccordionBody className="!bg-white rounded-b-xl p-3">
                    <Lessons />
                </AccordionBody>
            </Accordion>
        </div>
    );
}
