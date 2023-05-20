import React from "react";

const Resin = () => {
  return (
    <div className="w-full h-screen bg-[#008B8B] text-[#fff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="text-center pt-6">
          <h1 className="text-4xl pt-60 sm:pt-0 font-bold inline border-b-4 border-[#ffcba4] text-[#fff]">
            Resin Decor
          </h1>
          <p className="sm:text-2xl pt-4">
            Availability subject to change, please check{" "}
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41510883"
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
          {/*Blue, Turquoise & Purple Tray Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=38578913"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/ab7308/4699148828/il_680x540.4699148828_q7c7.jpg"
                alt="Blue, Turquoise & Purple Tray"
              />
            </a>
            <p className="py-2">Blue, Turquoise & Purple Tray</p>
          </div>
          {/* Abalone Tray & Vase Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=38578913"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/c/2529/2010/313/0/il/439e24/4601406736/il_680x540.4601406736_l0yr.jpg"
                alt="Abalone Tray & Vase"
              />
            </a>
            <p className="py-2">Abalone Tray & Vase</p>
          </div>
          {/* Burgandy, Bronze & Black Tray Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=38578913"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/c/2250/1788/0/846/il/9ab34e/4649461815/il_680x540.4649461815_ckso.jpg"
                alt="Burgandy, Bronze & Black Tray"
              />
            </a>
            <p className="py-2">Burgandy, Bronze & Black Tray</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resin;
