import React from 'react'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import useSlugify from '../hooks/useSlugify'

const Access = () => {
    const { articles } = useOutletContext()
    const { state } = useLocation()
    const navigate = useNavigate()
    const slugify = useSlugify()

    const article = state?.article
    if (!article) return <p>Error: Article not found</p>

    const currentIndex = articles.findIndex(a => a.id === article.id)
    const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
    const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

    const goToArticle = (target) => {
        if (!target) return
        const slug = slugify(target.title)
        navigate(`/blog/${slug}`, { state: { article: target } })
    }

    return (
        <div className="flex justify-between gap-8 mt-10">
            {prevArticle && (
                <div className="border relative rounded-2xl p-4 flex flex-row gap-4 items-center w-60 text-[14px] md:text-base sm:w-72 md:w-96 h-36 md:h-28 overflow-hidden">
                    <img src={prevArticle.image} alt={prevArticle.title} className="object-cover absolute w-full h-full -z-10 top-0 left-0 opacity-30" />
                    <button
                        className="px-4 py-3 rounded-xl bg-gray-100 border text-gray-500 hover:text-orange-500 transition-colors"
                        onClick={() => goToArticle(prevArticle)}
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <div className="md:space-y-2 font-semibold">
                        <p className="text-gray-500">Prev Article</p>
                        <h4>{prevArticle.title}</h4>
                    </div>
                </div>
            )}

            {nextArticle && (
                <div className="border relative rounded-2xl justify-end p-4 flex flex-row gap-4 items-center ml-auto w-60 text-[14px] md:text-base sm:w-72 md:w-96 h-36 md:h-28 overflow-hidden">
                    <img src={nextArticle.image} alt={nextArticle.title} className="object-cover absolute w-full h-full -z-10 top-0 left-0 opacity-30" />
                    <div className="md:space-y-2 text-right font-semibold">
                        <p className="text-gray-500">Next Article</p>
                        <h4>{nextArticle.title}</h4>
                    </div>
                    <button
                        className="px-4 py-3 rounded-xl bg-gray-100 border text-gray-500 hover:text-orange-500 transition-colors"
                        onClick={() => goToArticle(nextArticle)}
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            )}
        </div>
    )
}

export default Access
