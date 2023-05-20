import React from "react";

const Lazy = () => {
  return (
    <div className="w-full h-screen bg-[#008B8B] text-[#fff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="text-center">
          <h1 className="text-4xl pt-60 sm:pt-0 font-bold inline border-b-4 border-[#ffcba4] text-[#fff]">
            Lazy Susans
          </h1>
          <p className="sm:text-2xl pt-4">
            Availability subject to change, please check{" "}
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=38578913"
              target="_blank"
              className="text-[#ffcba4]"
            >
              Etsy
            </a>{" "}
            for current inventory. Visit{" "}
            <a href="/Contact" className="text-[#ffcba4]">
              here
            </a>{" "}
            for custom order requests.
          </p>
        </div>
        {/* Icon Container */}
        <div
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-2xl
         py-8"
        >
          {/*Butterfly Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=38578913"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/b28a52/4083449145/il_680x540.4083449145_eic3.jpg"
                alt="Butterfly Lazy Susan"
              />
            </a>
            <p className="py-2">Butterfly</p>
          </div>
          {/* Moose Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=38578913"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/c/3000/2250/0/0/il/68d547/4035775164/il_680x540.4035775164_2hmk.jpg"
                alt="Rustic Moose Lazy Susan"
              />
            </a>
            <p className="py-2">Rustic Moose</p>
          </div>
          {/* Wolf Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=38578913"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/05c3b1/4796347568/il_680x540.4796347568_3vmm.jpg"
                alt="Rustic Wolf Lazy Susan"
              />
            </a>
            <p className="py-2">Rustic Wolf</p>
          </div>
          {/* React Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=38578913"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/c/3000/2250/0/0/il/a55261/4027025314/il_680x540.4027025314_c0sh.jpg"
                alt="Rustic Bear Lazy Susan"
              />
            </a>
            <p className="py-2">Rustic Bear</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lazy;
