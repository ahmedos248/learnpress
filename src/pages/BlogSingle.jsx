import Breadcrumb from '../components/Breadcrumb'
import CommentForm from '../components/CommentForm';
import CommentSec from '../components/blog/CommentSec';
import BlogDetails from '../components/blog/BlogDetails';
import SliderArticles from '../components/SliderArticles';
import useData from '../components/hooks/useData';
const BlogSingle = () => {
      const { filteredArticles} = useData();
    return (
      <>
        <Breadcrumb />
        <div className="w-full">
          <div className="max-w-screen-xl mx-auto py-12 px-6 lg:grid lg:grid-cols-4 exo-text gap-10">
            <div className="lg:col-span-3">
              <BlogDetails />
              <CommentSec />
              <CommentForm />
            </div>
            <div className=" lg:col-span-1 lg:flex lg:flex-col space-y-6 mb-10 hidden ">
              <SliderArticles articles={filteredArticles} />
            </div>
          </div>
        </div>
      </>
    );
}

export default BlogSingle
