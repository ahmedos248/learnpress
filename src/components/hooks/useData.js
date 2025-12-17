import { useState, useEffect } from "react";

export default function useData() {
    const [courses, setCourses] = useState([]);
    const [articles, setArticles] = useState([]);
    const [comments, setComments] = useState([]);

    const [filteredCourses, setFilteredCourses] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);

    const [globalSearch, setGlobalSearch] = useState("");
    const [courseSearch, setCourseSearch] = useState("");
    const [articleSearch, setArticleSearch] = useState("");

    const [active, setActive] = useState("b");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // ✅ Update this to your Railway URL in production
    const baseURL = import.meta.env.DEV
        ? "http://localhost:5000" // local JSON Server
        : "https://<your-railway-project>.up.railway.app"; // Railway deployed JSON Server

    const fetchData = async (resource, setter) => {
        try {
            const res = await fetch(`${baseURL}/${resource}`);
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

        const loadAll = async () => {
            await Promise.all([
                fetchData("courses", setCourses),
                fetchData("articles", setArticles),
                fetchData("comments", setComments),
            ]);
            setLoading(false);
        };

        loadAll();
    }, []);

    useEffect(() => {
        const q = globalSearch.toLowerCase();

        setFilteredCourses(
            courses.filter(
                (c) =>
                    (c.title ?? "").toLowerCase().includes(q) ||
                    (c.category ?? "").toLowerCase().includes(q)
            )
        );

        setFilteredArticles(
            articles.filter(
                (a) =>
                    (a.title ?? "").toLowerCase().includes(q) ||
                    (a.description ?? "").toLowerCase().includes(q)
            )
        );

        setFilteredComments(comments);
    }, [globalSearch, courses, articles, comments]);

    const filteredCoursesLocal = courses.filter(
        (c) =>
            (c.title ?? "").toLowerCase().includes(courseSearch.toLowerCase()) ||
            (c.category ?? "").toLowerCase().includes(courseSearch.toLowerCase())
    );

    const filteredArticlesLocal = articles.filter(
        (a) =>
            (a.title ?? "").toLowerCase().includes(articleSearch.toLowerCase()) ||
            (a.description ?? "").toLowerCase().includes(articleSearch.toLowerCase())
    );

    return {
        courses,
        articles,
        comments,
        filteredCourses,
        filteredArticles,
        filteredComments,
        filteredCoursesLocal,
        filteredArticlesLocal,
        globalSearch,
        setGlobalSearch,
        courseSearch,
        setCourseSearch,
        articleSearch,
        setArticleSearch,
        active,
        setActive,
        loading,
        error,
    };
}
