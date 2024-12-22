import { useState } from "react";
import DropDowmMenu from "./DropDowmMenu";

function Header() {
  const [isOpenDropDown, setIsOpenDropDown] = useState(null);

  function handleOpenDropDown(index) {
    setIsOpenDropDown(isOpenDropDown === index ? null : index);
  }

  // function handleCloseDropDown() {
  //   setIsOpenDropDown(null); // Закрити меню
  // }
  return (
    <header
      className="flex justify-between items-center py-3 px-24 bg-zinc-100 "
      //onMouseLeave={handleCloseDropDown} // Коли мишка покидає область, закриваємо меню
    >
      <div>
        <img
          src="https://web.archive.org/web/20221117021711im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
          alt="Bonsai Logo"
          className="h-8 w-auto"
        />
      </div>
      <div className="flex  py-4 font-light ">
        <DropDowmMenu
          onMouseOver={() => handleOpenDropDown(0)}
          isOpenDropDown={isOpenDropDown === 0}
          // onMouseLeave={() => handleOpenDropDown(0)}
          name="Product"
        />
        <DropDowmMenu
          onMouseOver={() => handleOpenDropDown(1)}
          isOpenDropDown={isOpenDropDown === 1}
          // onMouseLeave={() => handleOpenDropDown(1)}
          name="Product"
        />

        <div className=" pr-12">Pricing</div>
        <div className="pr-12">Reviews</div>
      </div>
      <div className="flex gap-4  font-medium text-sm">
        <button className="text-customGreen border-2 rounded-md border-customGreen px-6 py-2">
          LOG IN
        </button>
        <button className="bg-customGreen border-2 rounded-md border-customGreen px-6 py-2 text-customWhite">
          START FREE
        </button>
      </div>
    </header>
  );
}

export default Header;
