import { FaQuoteLeft } from "react-icons/fa";
const feedbacks = [
  {
    text: "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
    name: "Roe Smith",
    job: "Designer",
  },
  {
    text: "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
    name: "Roe Smith",
    job: "Designer",
  },
  {
    text: "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
    name: "Roe Smith",
    job: "Designer",
  },
  {
    text: "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
    name: "Roe Smith",
    job: "Designer",
  },
];
const Feedbacks = () => {
  return (
    <section className="px-4 md:px-20 py-5 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Student feedbacks</h1>
        <p className="text-gray-500 mt-2">
          What Students Say About Academy LMS
        </p>
      </div>
      <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mx-auto">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <FaQuoteLeft className="text-4xl text-gray-300 mb-4" />

            <p className="text-gray-700 text-sm leading-6 mb-6">{item.text}</p>

            <h3 className="font-bold text-black">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.job}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
