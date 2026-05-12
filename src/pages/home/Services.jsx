import {
  FaHamburger,
  FaShippingFast,
  FaHeadset,
  FaGift,
  FaClock,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHamburger />,
    title: "Fresh Quality Food",
    desc: "Every meal is prepared with fresh ingredients and rich flavors crafted to satisfy your hunger perfectly.",
  },
  {
    icon: <FaShippingFast />,
    title: "Lightning Fast Delivery",
    desc: "Hot and delicious food delivered to your doorstep quickly with real-time delivery tracking.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Customer Support",
    desc: "Our support team is always ready to help you with orders, delivery issues, and instant assistance.",
  },
  {
    icon: <FaGift />,
    title: "Special Offers & Deals",
    desc: "Enjoy exciting discounts, reward points, and exclusive offers on your favorite meals.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Service",
    desc: "We respect your time by ensuring every order arrives fresh and exactly when expected.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Easy Online Ordering",
    desc: "Simple, smooth, and secure ordering experience from mobile, tablet, or desktop devices.",
  },
];

const Services = () => {
  return (
    <section className="bg-secondary py-20 my-12 overflow-hidden rounded-md">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-primary font-semibold mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            More Than Food Delivery
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            We combine speed, quality, and technology to create a food delivery
            experience that feels smooth, modern, and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-primary  text-3xl flex items-center justify-center shadow-2xl group-hover:rotate-6 group-hover:scale-110 transition duration-500">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-300 mt-4 leading-relaxed">
                  {service.desc}
                </p>

                <button className="mt-7 text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                  Learn More
                  <span>→</span>
                </button>
              </div>

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
