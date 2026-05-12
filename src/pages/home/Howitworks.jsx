import { FaSearch, FaUtensils, FaTruck, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Choose Your Food",
    desc: "Explore a rich menu filled with delicious meals, fresh ingredients, and flavors crafted to satisfy every craving.",
  },
  {
    icon: <FaUtensils />,
    title: "Place Your Order",
    desc: "Add your favorite dishes to cart and complete your order within seconds through a smooth and secure checkout.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Our delivery riders move swiftly through the city so your food arrives hot, fresh, and right on time.",
  },
  {
    icon: <FaSmile />,
    title: "Enjoy Your Meal",
    desc: "Sit back, relax, and enjoy restaurant-quality food delivered directly to your doorstep with care.",
  },
];

const Howitworks = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-secondary font-semibold tracking-[3px] uppercase mb-3">
            How It Works
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Fresh Food Delivered
            <span className="text-secondary"> In 4 Simple Steps</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            From craving to satisfaction — our process is crafted for speed,
            simplicity, and delicious experiences at your doorstep.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg border border-orange-100 hover:-translate-y-3 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              <div className="absolute top-5 right-5 text-6xl font-extrabold text-orange-50">
                0{index + 1}
              </div>

              <div className="relative z-10 w-20 h-20 rounded-2xl bg-secondary text-white text-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                {step.icon}
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-gray-900 mt-8">
                {step.title}
              </h3>
              <p className="relative z-10 text-gray-600 leading-relaxed mt-4">
                {step.desc}
              </p>

              {/* bottom line */}
              <div className="relative z-10 w-0 group-hover:w-full h-1 bg-secondary rounded-full mt-6 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
