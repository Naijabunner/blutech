import { lazy } from "react";

const Logo = lazy(() => import("./UI/Logo"));

const Splashscreen = () => {
  return (
    <div className='h-screen w-screen grid place-items-center place-content-center animate-pulse bg-white'>
      <Logo />
    </div>
  );
};

export default Splashscreen;
