import React from 'react'
const categories = [
  "Commercial",
  "Office",
  "Shop",
  "Academy",
  "Educate",
  "Single family home",
  "Studio",
  "University",
];
const tags = [
  "Free couses",
  "Marketing",
  "Idea",
  "LMS",
  "LearnPress",
  "Instructor",
];
const SliderArticles = ({ className = '', articles }) => {
  const getCount = (cat) =>
    articles.filter((article) => article.category === cat).length;
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="mb-5">
        <h3 className="font-semibold mb-3"> Category</h3>
        {categories.map((cat) => (
          <div key={cat} className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span>{cat}</span>
            </div>

            <span className="text-sm text-gray-500 pr-6">{getCount(cat)}</span>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <h3 className="font-semibold mb-3"> Recent posts</h3>
        {sortedArticles.slice(0, 3).map((article) => (
          <div
            key={article.id}
            className="mb-4 flex flex-row items-center gap-4"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-[90px] h-[90px] object-cover mb-2 rounded-2xl"
            />
            <h4 className="text-md font-medium">{article.title}</h4>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <h3 className="font-semibold mb-3"> Tags</h3>

        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block border border-gray-300 hover:bg-gray-200  text-black px-4 py-2 rounded-lg  mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SliderArticles
