import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import CommentForm from '../components/CommentForm'

const Contact = () => {
    return (
        <div>
            <Breadcrumb />
            <div className='exo-text max-w-screen-xl mx-auto px-6 flex md:justify-between flex-col md:flex-row gap-4 mt-14 mb-10'>
                <div className='flex flex-col space-y-2'>
                    <h1 className='mb-8 text-4xl font-semibold'>Need a direct line?</h1>
                    <p className='text-gray-500'>Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.</p>
                    <div className='flex flex-row gap-4 items-center'>
                        <i className='fa-solid fa-phone p-4 py-3 text-2xl bg-gray-200 rounded-xl text-orange-500'></i>
                        <div className='space-y-2'>
                            <span className='text-gray-500'>Phone</span>
                            <p>(123) 456 7890</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        <i className='fa-solid fa-envelope p-4 py-3 text-2xl bg-gray-200 rounded-xl text-orange-500'></i>
                        <div className='space-y-2'>
                            <span className='text-gray-500'>Phone</span>
                            <p>(123) 456 7890</p>
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110516.63904148264!2d31.186066!3d30.044420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjkiTiAzMcKwMTEnMDguOCJF!5e0!3m2!1sen!2seg!4v1678458796951!5m2!1sen!2seg"
                    width="100%"
                    height="400"
                    style={{ border: "none", borderRadius: "1.5rem" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <div className='max-w-screen-xl mx-auto p-6 exo-text'>
                <CommentForm title='Contact Us' titleClassName="text-3xl" />
            </div>
        </div>
    )
}

export default Contact
