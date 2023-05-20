import React from "react";

const Chess = () => {
  return (
    <div className="w-full h-full bg-[#008B8B] text-[#fff] pt-60">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div className="text-center">
          <h1 className="text-4xl pt-60 sm:pt-0 font-bold inline border-b-4 border-[#ffcba4] text-[#fff]">
            Chess Sets
          </h1>
          <p className="sm:text-2xl pt-4">
            Availability subject to change, please check{" "}
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
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
          {/*Purple, Silver Pearl, Black Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/8ae6aa/4744219419/il_680x540.4744219419_1e7y.jpg"
                alt="Purple Black Chess Set"
              />
            </a>
            <p className="py-2">Purple, Silver Pearl, Black</p>
          </div>
          {/* Aztec Warrior Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/8ad039/4716031731/il_680x540.4716031731_qbyb.jpg"
                alt="Aztec Chess Set"
              />
            </a>
            <p className="py-2">Aztec Warrior</p>
          </div>
          {/* Sea Turtle Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/c/2250/1788/0/163/il/934042/4659095716/il_680x540.4659095716_2e5p.jpg"
                alt="Sea Turtle Chess Set"
              />
            </a>
            <p className="py-2">Sea Turtle</p>
          </div>
          {/* Red Black Gold Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/5446ec/4583179914/il_680x540.4583179914_rsgf.jpg"
                alt="Red Black Chess Set"
              />
            </a>
            <p className="py-2">Red, Black, Gold</p>
          </div>
          {/* Teal, White, Silver Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/c/2196/1745/516/46/il/aea5bb/4584670668/il_680x540.4584670668_asst.jpg"
                alt="Teal White Chess Set"
              />
            </a>
            <p className="py-2">Teal, White, Silver</p>
          </div>
          {/* Glow Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/db1744/4601103074/il_680x540.4601103074_i0yl.jpg"
                alt="Glow in the Dark Chess Set"
              />
            </a>
            <p className="py-2">Glow in the Dark</p>
          </div>
          {/* Horned Skull Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/a15916/4679501103/il_680x540.4679501103_jwpt.jpg"
                alt="Horned Skull Chess Set"
              />
            </a>
            <p className="py-2">Horned Skull</p>
          </div>
          {/*Chameleon Opal, Green, Black Icon */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/ceb357/4649246597/il_680x540.4649246597_tp9d.jpg"
                alt="Chameleon Opal Chess Set"
              />
            </a>
            <p className="py-2">Chameleon Opal, Green, Black</p>
          </div>
          {/*Japanese Darth Vader*/}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/44050a/4796298902/il_680x540.4796298902_3k5r.jpg"
                alt="Darth Vader Chess Set"
              />
            </a>
            <p className="py-2">Japanese Style Darth Vader</p>
          </div>
          {/*American Eagel */}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/9b42c7/4796020254/il_680x540.4796020254_h1rv.jpg"
                alt="American Eagle Chess Set"
              />
            </a>
            <p className="py-2">American Eagle</p>
          </div>
          {/*Green and Pearl*/}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/c/2250/1788/0/317/il/7fb694/4764396963/il_680x540.4764396963_blbb.jpg"
                alt="Green and Pearl Chess Set"
              />
            </a>
            <p className="py-2">Green & Pearl</p>
          </div>
          {/*Stormtrooper*/}
          <div>
            <a
              href="https://www.etsy.com/shop/KnicKnacksByJennie?section_id=41423895"
              target="_blank"
            >
              <img
                className="w-150 mx-auto"
                src="https://i.etsystatic.com/36216678/r/il/5466de/4803817752/il_680x540.4803817752_bioi.jpg"
                alt="Stormtrooper Chess Set"
              />
            </a>
            <p className="py-2">Stormtrooper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chess;
