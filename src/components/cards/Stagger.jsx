import { motion as Motion, AnimatePresence } from "framer-motion";
import React from "react";
import Course1 from "./Course1";
import Course2 from "./Course2";
import Article1 from "./Article1";
import Article2 from "./Article2";

const componentMap = {
    course: { a: Course1, b: Course2 },
    article: { a: Article1, b: Article2 },
};

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -60, transition: { duration: 0.3, ease: "easeIn" } },
};

const Stagger = ({ data = [], type, active }) => {
    const [mounted, setMounted] = React.useState(false);
    const ComponentA = componentMap[type]?.a;
    const ComponentB = componentMap[type]?.b;

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <AnimatePresence mode="sync">
            {mounted && (
                <Motion.div
                    key={active}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="grid grid-cols-2 lg:gap-8 gap-4"
                >
                    {data.length > 0 ? (
                        data.map((item) => (
                            <React.Fragment key={item.id}>
                                {active === "a" && ComponentA && (
                                    <Motion.div
                                        variants={itemVariants}
                                        className="flex flex-col sm:col-span-1 col-span-2"
                                    >
                                        <ComponentA {...{ [type]: item }} />
                                    </Motion.div>
                                )}
                                {active === "b" && ComponentB && (
                                    <Motion.div
                                        variants={itemVariants}
                                        className="flex flex-col col-span-2"
                                    >
                                        <ComponentB {...{ [type]: item }} />
                                    </Motion.div>
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        <Motion.p variants={itemVariants} className="text-center col-span-2">
                            No items found
                        </Motion.p>
                    )}
                </Motion.div>
            )}
        </AnimatePresence>
    );
};

export default Stagger;
