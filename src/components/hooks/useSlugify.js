import { useCallback } from "react";

export default function useSlugify() {
    const slugify = useCallback((text) => {
        if (!text) return "";
        return text
            .toString()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");
    }, []);

    return slugify;
}
