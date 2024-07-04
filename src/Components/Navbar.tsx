import Logo from "./UI/Logo";
import SearchBlock from "./search";
import profilePic from "../../public/doctor.jpg";
import HamburgerButton from "./UI/Hamburger";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav
      className={`flex bg-white justify-between transition-transform duration-300 ease-linear transform  ${
        isOpen && "flex-col items"
      } ${!isOpen && "items-center"} p-5`}
    >
      <div className='right flex w-fit items-center justify-between ml-2'>
        <Logo />
      </div>
      <div className='left  hidden md:flex relative w-fit md:w-[60%] lg:w-[70%] items-center justify-end md:justify-between gap-3 text-black'>
        <SearchBlock />
        <Details />
      </div>
      <div className='absolute top-10 right-5'>
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      {isOpen && (
        <div className=' expand_nav pt-3 mt-5 flex flex-col  md:hidden border-t border-gray-400  '>
          <div className='details flex justify-end items-center mb-5'>
            <Details />
          </div>
          <div className='search  self-center'>
            <SearchBlock />
          </div>
        </div>
      )}
    </nav>
  );
};

const Details = () => {
  return (
    <div className=' items-center flex '>
      <div className=' bg-slate-100 p-2 rounded-full '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={25}
          viewBox='0 0 24 24'
          fill='none'
          stroke='#000000'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3' />
          <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
          <circle cx='18' cy='8' r='3' fill='red' stroke='red' />
        </svg>
      </div>
      <img src={profilePic} alt='' className='rounded-full mx-2 ' />
      <p className=' hidden md:block'>Deko</p>
      <p className='hidden md:block'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='w-8'
        >
          <path d='m6 9 6 6 6-6' />
        </svg>
      </p>
    </div>
  );
};

export default Navbar;
