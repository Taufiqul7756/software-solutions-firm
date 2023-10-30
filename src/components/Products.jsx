import React from "react";
import erp from "../assets/services-logo/erp1.png";
import pos from "../assets/services-logo/pos.png";
import mail from "../assets/services-logo/mail.png";

const Products = () => {
  const services = [
    {
      id: 1,
      title: "WeStrike ERP",
      description:
        "Our ERP/CRM software streamlines your business operations, from managing resources and enhancing productivity to building stronger customer relationships. Experience a new level of efficiency with WeStrike.",
      image: erp,
    },
    {
      id: 2,
      title: " WeStrike POS",
      description:
        "Our point of sale (POS) system is designed to help retailers manage sales, inventory, and customer data efficiently. It's the ultimate solution for simplifying your retail business operations.",
      image: pos,
    },
    {
      id: 3,
      title: " WeStrike Mail",
      description:
        "weMail with an email sending API is a killer combination to send awesome emails, grow subscriber lists & promote products all within the WordPress dashboard",
      image: mail,
    },
  ];
  return (
    <div className="m-5">
      <div className="text-center my-8 ">
        <h2 className="text-4xl text-NeutralD_Grey font-semibold mb-2">
          {" "}
          Our Products
        </h2>
        <p className="text-xl text-NeutralGrey">
          We currently offer two subscription-based projects in the market,
          providing effective solutions to address various business challenges.
          Our solutions are widely adopted by hundreds of startup companies..{" "}
        </p>
      </div>

      {/* Services Card */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-10">
        {services.map((services) => (
          <div
            key={services.id}
            className=" px-4 py-8 text-center md:w-[300px] 
            mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:before-b-4
            hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full "
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                <img src={services.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-NeutralD_Grey mb-2 px-2">
                {services.title}
              </h4>
              <p className="text-sm text-NeutralGrey">{services.description}</p>

              <button className="px-5 mt-3 py-2 text-sm cursor-pointer  bg-BrandPrimary text-white  hover:bg-NeutralD_Grey rounded transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
