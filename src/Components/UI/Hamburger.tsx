interface HamburgerButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <button
      className=' flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none  flex md:hidden  '
      onClick={toggleMenu}
    >
      <span
        className={`block w-8 h-0.5 bg-black rounded transition-transform duration-300 ease-linear transform ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block w-8 h-0.5 bg-black rounded transition-opacity duration-300 ease-linear ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block w-8 h-0.5 bg-black rounded transition-transform duration-300 ease-linear transform ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
