import React from 'react'
import { Link } from 'react-router-dom';
import useData from "../hooks/useData";
import Article1 from '../cards/Article1';
const ArticalsSection = () => {
      const { filteredArticles, loading, error } = useData();

        if (loading) return <p className="text-center mt-20">Loading articles...</p>;
        if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
    
  return (
    <section className="max-w-screen-xl mx-auto px-8 py-5 bg-white mb-10">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-semibold">Latest articles</h2>
          <p className="text-zinc-400">Explore our Free Acticles</p>
        </div>
        <Link to="/blog">
          <button className="border px-5 py-2 rounded-full hover:bg-gray-100">
            All Articles
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4">
        {filteredArticles.length > 0 ? (
          filteredArticles
            .slice(0, 6)
            .map((article) => <Article1 key={article.id} article={article} />)
        ) : (
          <p>No Articles found</p>
        )}
      </div>
    </section>
  );
}

export default ArticalsSection
