import { motion as Motion } from "framer-motion";
import { useRef } from "react";
import useSlugify from "../hooks/useSlugify";
import useAnimatedNavigate from "../hooks/useAnimatedNavigate";

const MotionButton = ({ course }) => {
    const slugify = useSlugify();
    const animatedNavigate = useAnimatedNavigate(400);
    const isNavigating = useRef(false);

    return (
        <Motion.button
            onClick={() => {
                if (isNavigating.current) return;
                isNavigating.current = true;
                animatedNavigate(`/courses/${course.id}-${slugify(course.title)}`, {
                    state: { course },
                });
            }}
            className="relative px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{
                scale: 0.9,
                y: 4,
                rotate: -2,
                backgroundColor: "#FF7F50",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
            View More
            <Motion.span
                className="absolute inset-0 bg-white opacity-20 rounded-lg pointer-events-none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0 }}
                transition={{ duration: 0.3 }}
            />
        </Motion.button>
    );
};

export default MotionButton;
