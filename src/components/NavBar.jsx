import {
  AlignRight,
  ChevronRight,
  CircleUserRound,
  Phone,
  Search,
  ShoppingBasket,
  X,
} from "lucide-react";
import React, { useState } from "react";

const NavBar = () => {
  // State to manage the hover menu ID\
  const [openDropdownList, setOpenDropdownList] = useState([]);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [hoverMenuId, setHoverMenuId] = useState(null);
  const handleMouseEnter = (id) => {
    setHoverMenuId(id);
  };

  const navItems = [
    {
      id: 1,
      label: "Home",
      sideNav: [
        { id: 1, label: "Food Delivery" },
        { id: 2, label: "Grocery Delivery" },
        { id: 3, label: "Pharmacy Delivery" },
        { id: 4, label: "Pizza Time" },
      ],
    },
    {
      id: 2,
      label: "About us",
      sideNav: [
        { id: 1, label: "Testimonials" },
        { id: 2, label: "FAQ" },
        { id: 3, label: "Gallery" },
      ],
    },
    {
      id: 3,
      label: "Catalog",
      sideNav: [
        { id: 1, label: "Shop" },
        { id: 2, label: "Cart" },
        { id: 3, label: "Checkout" },
        { id: 4, label: "My Account" },
      ],
    },
    {
      id: 4,
      label: "Blog",
      sideNav: [
        { id: 1, label: "Blog 1" },
        { id: 2, label: "Blog 2" },
      ],
    },
    { id: 5, label: "Contact" },
  ];
  return (
    <>
      <nav className="flex justify-between items-center  text-white px-4 py-8 w-full md:w-[80%] mx-auto border-b-1 border-gray-500 border-dashed">
        <div
          className={`text-2xl font-bold transition-all duration-200 ${
            isOpenMenu ? "opacity-0" : "opacity-100"
          }`}
        >
          <img src="/public/images/logo_1x.png" alt="" />
        </div>
        <ul className="hidden md:flex text-sm space-x-4 font-[600] ">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative group "
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => setHoverMenuId(null)}
            >
              <div className="absolute w-full h-[1px] bg-[var(--color-primary)] -bottom-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></div>
              {item?.sideNav && (
                <div
                  className={`absolute p-2 bg-white w-[200px] border-2 rounded-md top-10 left-1/2 transform translate-y-1/2 -translate-x-1/2 transition-all opacity-0 -z-50 duration-500 ease-in-out group-hover:opacity-100 group-hover:z-50 group-hover:translate-y-[-15px]`}
                >
                  {item?.sideNav.map((subItem) => (
                    <div
                      key={`${item?.id}-${subItem.id}`}
                      className="text-black  px-4 py-2 my-1 rounded-full text-left hover:bg-[var(--color-primary)] text-md font-[600] transition-all duration-150  "
                    >
                      <a href="#">{subItem.label}</a>
                    </div>
                  ))}
                </div>
              )}
              <a
                href="#"
                key={`${item.id}arrow`}
                className={`grout-hover:text-[var(--color-primary)] transition-all duration-150 flex justify-center items-center ${
                  hoverMenuId === item.id ? "text-[var(--color-primary)]" : ""
                }`}
              >
                {item.label}{" "}
                {item?.sideNav && (
                  <ChevronRight
                    size={16}
                    strokeWidth={2.5}
                    className={`text-[var(--color-primary)] transition-all duration-300 ease-in-out font-[400] ${
                      hoverMenuId === item.id ? "rotate-90" : ""
                    }`}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-6">
          <div className="hidden items-center space-x-4 lg:flex">
            <Phone />
            <span className="font-[1000] text-lg text-[var(--color-primary)]">
              091-234-567-89
            </span>
          </div>
          <div className="hidden lg:block relative ">
            <div className="text-[.8rem] px-2 text-black absolute rounded-full bg-[var(--color-primary)] -top-1/3 -right-1/2 ">
              2
            </div>
            <CircleUserRound />
          </div>
          <div className="relative">
            <div className="text-[.8rem] px-2 text-black absolute rounded-full bg-[var(--color-primary)] -top-1/3 -right-1/2 ">
              2
            </div>

            <ShoppingBasket />
          </div>
          <div className="hidden lg:block">
            <Search />
          </div>
          <div
            className="block md:hidden"
            onClick={() => {
              setIsOpenMenu(true);
              console.log(isOpenMenu);
            }}
          >
            <AlignRight />
          </div>
        </div>
      </nav>
      <div
        className={`fixed w-2/3 sm:w-3/5 h-full bg-[#dddddd] top-0 right-0 z-50 flex flex-col  justify-start transition-all duration-200 ease-in-out md:hidden ${
          isOpenMenu ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className="flex justify-between w-full p-4 items-center">
          <div className="text-2xl font-bold ">
            <img src="/public/images/logo_1x_dark.png" alt="" />
          </div>
          <div
            className="text-2xl font-bold  cursor-pointer"
            onClick={() => setIsOpenMenu(false)}
          >
            <X />
          </div>
        </div>

        {navItems.map((item) => {
          return (
            <div key={item?.id}>
              <div className="flex relative justify-between items-center w-full  p-2">
                <div className="font-[700] text-2xl text-[var(--color-primary-dark)]">
                  {item?.label}
                </div>
                {item?.sideNav && (
                  <div
                    className={`relative aspect-square transition-all duration-500  p-3 ${
                      openDropdownList.includes(item.id)
                        ? ""
                        : "rotate-[225deg]"
                    }`}
                    onClick={() => {
                      setOpenDropdownList((prev) => {
                        if (prev.includes(item.id)) {
                          return prev.filter((id) => id !== item.id);
                        } else {
                          return [...prev, item.id];
                        }
                      });
                    }}
                  >
                    <div
                      className={`absolute w-[90%] p-[1px] rounded-2xl transition-all duration-400 top-1/2 left-0 -translate-y-1/2  ${
                        openDropdownList.includes(item.id)
                          ? "bg-[#df3737]"
                          : "rotate-45 bg-[var(--color-primary-dark)]"
                      }`}
                    ></div>
                    <div
                      className={`absolute w-[90%] p-[1px] rounded-2xl transition-all duration-400 top-1/2 left-0 -translate-y-1/2  ${
                        openDropdownList.includes(item.id)
                          ? "bg-[#df3737]"
                          : "-rotate-45 bg-[var(--color-primary-dark)]"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
              <ul
                className={`w-[100%] px-2  transition-all duration-200 ${
                  openDropdownList.includes(item.id)
                    ? "py-2 h-auto "
                    : "opacity-0 py-0 h-0"
                }`}
              >
                {item?.sideNav &&
                  item?.sideNav.map((subItem) => {
                    return (
                      <li
                        className="ps-2 text-1xl font-[500] text-[var(--color-secondary)] "
                        key={`${item?.id}-${subItem?.id}`}
                      >
                        {" "}
                        - {subItem?.label}
                      </li>
                    );
                  })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavBar;
