import logo from "../../../public/Logo.jpg";
const Logo = () => {
  return (
    <div className='flex items-center'>
      <img src={logo} alt='Logo' className='sm:w-15 md:w-20 md:mx-2' />
      <h1 className=' text-[#0341A7] font-[600] ml-2 text-3xl sm:text-5xl md:text-6xl self-center'>
        Unlimi
        <span className=' text-red-500 font-[800] text-5xl '>.</span>
      </h1>
    </div>
  );
};
export default Logo;
