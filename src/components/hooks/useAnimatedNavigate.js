import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function useAnimatedNavigate(delay = 300) {
    const navigate = useNavigate();
    const timeoutRef = useRef(null);

    const animatedNavigate = (to, options) => {
        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            navigate(to, options);
        }, delay);
    };

    return animatedNavigate;
}
