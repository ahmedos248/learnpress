import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import CommentForm from "../components/CommentForm";
import FloatingCourse from "../components/coursesdetails/FloatingCourse";
import FixedCourse from "../components/coursesdetails/FixedCourse";
import { TransparentTabs } from "../components/TransparentTabs";

export default function CourseDetails() {
    const { state } = useLocation();
    const course = state?.course;

    if (!course) { return <p>Course not found</p>; }

    return (
        <>
            <Breadcrumb />
            <div className="w-full bg-black">
                <div className="max-w-screen-xl relative mx-auto px-6 py-12 bg-black md:h-[290px] h-[320px] flex justify-between exo-text overflow-hidden md:overflow-visible">
                    <img src={course.image} alt="" className="h-full w-full object-cover opacity-30 absolute top-0 left-0 md:hidden" />
                    <FixedCourse />
                    <FloatingCourse />
                </div>
            </div>
            <div className="w-full py-12">
                <div className="max-w-screen-xl mx-auto">
                    <TransparentTabs />
                    <CommentForm className="lg:p-4 p-6 max-w-[850px]" />
                </div>
            </div>
        </>
    );
}
