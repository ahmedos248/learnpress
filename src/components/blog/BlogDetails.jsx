import { useLocation } from 'react-router-dom';
import Access from './Access';

const BlogDetails = () => {
    const { state } = useLocation();

    const article = state?.article;
    if (!article) return <p>Error: Article not found</p>;


    return (
        <div>
            <div className='flex justify-between'>
                <h1 className="md:text-4xl text-2xl font-semibold mb-4">{article.title}</h1>
            </div>
            <div className='space-x-6 mb-10'>
                <span><i className="fas fa-user text-orange-500"></i> Determined-poitras</span>
                <span><i className="fa-regular fa-calendar text-orange-500"></i> Jan 24, 2023</span>
                <span><i className="fas fa-comment text-orange-500"></i> 20 comments</span>
            </div>
            <img src={article.image} alt={article.title} className='rounded-3xl w-full' />
            <p className="mt-6 text-gray-600">{article.details1}</p>
            <p className="mt-6 text-gray-600">{article.details2}</p>
            <div className='flex flex-row items-center space-x-4 text-gray-600 mt-10'>
                <span>Tags: </span>
                <div className="flex flex-wrap gap-2 items-center">
                    {[
                        "Free couses",
                        "Marketing",
                        "Idea",
                        "LMS",
                        "LearnPress",
                        "Instructor",
                    ].map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm cursor-pointer hover:bg-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex flex-row items-center space-x-4 text-gray-600 my-14'>
                <span>Share: </span>
                <div className="flex flex-wrap gap-4 items-center">
                    <i className='fab fa-facebook-f hover:text-orange-500 cursor-pointer'></i>
                    <i className='fab fa-pinterest-p hover:text-orange-500 cursor-pointer'></i>
                    <i className='fab fa-x-twitter hover:text-orange-500 cursor-pointer'></i>
                    <i className='fab fa-instagram hover:text-orange-500 cursor-pointer'></i>
                    <i className='fab fa-youtube hover:text-orange-500 cursor-pointer'></i>
                </div>
            </div>
            <Access />
        </div>
    )
}

export default BlogDetails
