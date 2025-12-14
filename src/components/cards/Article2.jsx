import { Link } from "react-router-dom";
import useSlugify from "../hooks/useSlugify";

export default function Article2({ article }) {
    const slugify = useSlugify();

    return (
        <Link
            to={`/blog/${article.id}-${slugify(article.title)}`}
            state={{ article }}
            className="border relative group h-[250px] border-gray-200 rounded-2xl shadow hover:shadow-xl hover:-translate-y-4 transition overflow-hidden flex p-0 col-span-2"
        >
            <div className="md:relative absolute md:h-[250px] md:w-[410px] w-full h-full ">
                <img src={article.image} alt={article.title} className="object-cover w-full h-full md:opacity-100 opacity-25" />
            </div>
            <div className="relative p-4 pb-0 w-[580px] flex flex-col justify-center z-10 space-y-6 md:hover:bg-gray-100 transition-all duration-300">
                <h3 className="relative max-h-14 md:text-lg text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-all duration-300">
                    {article.title}
                </h3>
                <span className="flex items-center space-x-1 text-gray-500 md:text-lg text-sm">
                    <i className="fa-regular fa-calendar text-orange-500"></i>
                    <span>jan 24, 2023</span>
                </span>
                <p className="text-gray-600 md:text-lg text-sm">{article.description}</p>
            </div>
        </Link>
    );
}

