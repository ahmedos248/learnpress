import React from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import Lessons from "./Lessons";

function Icon({ id, open }) {
    return (
        <svg
            className={`w-3 h-3 transition-transform ${id === open ? "" : "rotate-180"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 10 6"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5L5 1 1 5" />
        </svg>
    );
}

export function Curriculum() {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const sections = [
        { id: 1, title: "Lessons with video content", lessons: 5, duration: "45 Mins" },
        { id: 2, title: "Lessons with video content", lessons: 5, duration: "45 Mins" },
        { id: 3, title: "Lessons with video content", lessons: 5, duration: "45 Mins" },
    ];
    return (
        <div className="mt-6 space-y-4 exo-text text-xs sm:text-sm md:text-base">
            {sections.map(({ id, title, lessons, duration }) => (
                <Accordion key={id} open={open === id}>
                    <div
                        onClick={() => handleOpen(id)}
                        className={`cursor-pointer !bg-white w-full flex justify-between items-center !p-4 !pt-6 rounded-xl ${open === id ? "rounded-b-none" : "delay-100 transition-all duration-100"}`}
                    >
                        <div className="flex items-center gap-2">
                            <Icon id={id} open={open} />
                            <span className={`text-gray-600 font-semibold transition-colors duration-200 ${open === id ? "text-orange-500" : ""}`}>
                                {title}
                            </span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600 font-medium">
                            <span>{lessons} Lessons</span>
                            <span>{duration}</span>
                        </div>
                    </div>
                    <AccordionBody className="!bg-white rounded-b-xl p-3 text-xs sm:text-sm md:text-base">
                        <Lessons />
                    </AccordionBody>
                </Accordion>
            ))}
        </div>
    );
}
