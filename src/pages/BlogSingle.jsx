import Breadcrumb from '../components/Breadcrumb'
import CommentForm from '../components/CommentForm';
import CommentSec from '../components/blog/CommentSec';
import BlogDetails from '../components/blog/BlogDetails';

const BlogSingle = () => {
    
    return (
        <>
            <Breadcrumb />
            <div className='w-full'>
                <div className="max-w-screen-xl mx-auto py-12 px-6 lg:grid lg:grid-cols-4 exo-text">
                    <div className='lg:col-span-3'>
                        <BlogDetails />
                        <CommentSec />
                        <CommentForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSingle
