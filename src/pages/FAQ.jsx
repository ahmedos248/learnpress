import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import FAQItem from "../components/FAQItem";
const FAQs = [
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    q: "What Does Royalty Free Mean?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
  },
];



const FAQ = () => {
  const [open, setOpen] = useState(null);
  const onToggle = (i) => setOpen(open === i ? null : i);
  const half = Math.ceil(FAQs.length / 2);
  const rightColumn = FAQs.slice(0, half);
  const leftColumn = FAQs.slice(half);

  return (
    <div>
      <Breadcrumb />

      <section className="max-w-screen-xl mx-auto px-8 py-12 bg-white">
        <h1 className="text-4xl font-bold py-8">FAQs</h1>


        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 flex flex-col gap-6 w-full">
            {leftColumn.map((FAQ, index) => (
              <FAQItem
                key={index + half}
                FAQ={FAQ}
                index={index + half}
                open={open}
                onToggle={onToggle}
              />
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-6 w-full">
            {rightColumn.map((FAQ, index) => (
              <FAQItem
                key={index}
                FAQ={FAQ}
                index={index}
                open={open}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/Vector (1).png"
            alt="FAQ illustration"
            className="mt-4 w-full rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default FAQ;
