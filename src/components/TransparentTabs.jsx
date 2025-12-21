import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { Curriculum } from "./tabs/Curriculum";
import Instructor from "./tabs/Instructor";
import { FaqAccordion } from "./tabs/FaqAccordion";
import Reviews from "./tabs/Reviews";

export function TransparentTabs() {
    const data = [
        {
            label: "Overview",
            value: "overview",
            desc: <div className="space-y-8 py-10 text-xs sm:text-sm md:text-base">
                <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.</p>
                <p>LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                    No comments yet! You be the first to comment.</p>
            </div>,
        },
        {
            label: "Curriculum",
            value: "curriculum",
            desc: <div>
                <p className="text-xs sm:text-sm md:text-base">
                    LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one
                    of the best WordPress LMS Plugins which can be used to easily create & sell
                    courses online.
                </p>
                <Curriculum />
            </div>,
        },
        {
            label: "Instructor",
            value: "instructor",
            desc: <Instructor />,
        },
        {
            label: "FAQs",
            value: "faqs",
            desc: <FaqAccordion />,
        },
        {
            label: "Reviews",
            value: "reviews",
            desc: <Reviews />,
        },
    ];

    return (
        <Tabs value="curriculum" className="max-w-[53rem] mt-12 border rounded-3xl overflow-hidden m-4 !text-sm">
            <TabsHeader
                className="bg-white p-0 h-14 border rounded-b-none"
                indicatorProps={{
                    className: "bg-gray-900/5 shadow-none !text-gray-900 rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value} activeClassName="text-orange-500 transition-colors duration-500" className="text-xs sm:text-sm md:text-base">
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody className="bg-gray-900/5 text-gray-900">
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}