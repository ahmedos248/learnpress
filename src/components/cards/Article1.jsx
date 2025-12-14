import { Link } from "react-router-dom";
import useSlugify from "../hooks/useSlugify";

export default function Article1({ article }) {
    const slugify = useSlugify();

    return (
        <Link
            to={`/blog/${article.id}-${slugify(article.title)}`}

            state={{ article }}
            className="border group border-gray-200 rounded-2xl shadow hover:shadow-xl hover:-translate-y-4 transition overflow-hidden flex flex-col md:col-span-1 col-span-2"
        >
            <div className="relative max-h-[292px] w-full">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
            </div>
            <div className="p-4 space-y-4 flex-1">
                <h3 className="relative max-h-14 md:text-lg text-sm font-semibold text-gray-800 mb-3 group-hover:text-orange-500 transition-all duration-300">
                    {article.title}
                </h3>

                <span className="flex items-center space-x-2 text-gray-500 md:text-lg text-sm">
                    <i className="fa-regular fa-calendar text-orange-500"></i>
                    <span>jan 24, 2023</span>
                </span>
                <p className="text-gray-600 md:text-lg text-sm">{article.description}</p>
            </div>
        </Link>
    );
}

