import { useState, useEffect } from "react";

export default function useData() {
    const [courses, setCourses] = useState([]);
    const [articles, setArticles] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);

    const [courseSearch, setCourseSearch] = useState("");
    const [articleSearch, setArticleSearch] = useState("");
    const [active, setActive] = useState("b");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url, setter) => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP error ${res.status}`);
            const data = await res.json();
            setter(Array.isArray(data) ? data : data?.[Object.keys(data)[0]] ?? []);
        } catch (err) {
            console.error("Fetch error:", err);
            setError(err.message || "Unknown error");
            setter([]);
        }
    };

    useEffect(() => {
        setLoading(true);
        setError(null);

        const controller = new AbortController();

        const loadAll = async () => {
            await Promise.all([
                fetchData("http://localhost:5000/courses", setCourses),
                fetchData("http://localhost:5000/articles", setArticles)
            ]);
            setLoading(false);
        };

        loadAll();

        return () => controller.abort();
    }, []);

    useEffect(() => {
        let result = courses ?? [];
        if (courseSearch.trim()) {
            const q = courseSearch.toLowerCase();
            result = result.filter(
                (course) =>
                    String(course.title ?? "").toLowerCase().includes(q) ||
                    String(course.category ?? "").toLowerCase().includes(q)
            );
        }
        setFilteredCourses(result);
    }, [courseSearch, courses]);

    useEffect(() => {
        let result = articles ?? [];
        if (articleSearch.trim()) {
            const q = articleSearch.toLowerCase();
            result = result.filter(
                (article) =>
                    String(article.title ?? "").toLowerCase().includes(q) ||
                    String(article.category ?? "").toLowerCase().includes(q)
            );
        }
        setFilteredArticles(result);
    }, [articleSearch, articles]);

    return {
        courses,
        articles,
        filteredCourses,
        filteredArticles,
        courseSearch,
        setCourseSearch,
        articleSearch,
        setArticleSearch,
        active,
        setActive,
        loading,
        error
    };
}
