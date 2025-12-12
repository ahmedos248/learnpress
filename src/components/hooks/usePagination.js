import { useState, useMemo } from "react";

export default function usePagination(data = [], itemsPerPage = 6) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => Math.ceil(data.length / itemsPerPage), [data, itemsPerPage]);

    const currentData = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);

    const goTo = (page) => {
        const validPage = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(validPage);
    };

    const next = () => goTo(currentPage + 1);
    const prev = () => goTo(currentPage - 1);

    return { currentData, currentPage, totalPages, goTo, next, prev };
}
