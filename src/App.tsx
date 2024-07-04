import "./index.css";
import {  DepartmentProvider } from "./ContextApi";
import { Suspense, lazy, useEffect, useState } from "react";
import Splashscreen from "./Components/Splash";
import HeaderTitle from "./Components/Title";
import SupplierModal from "./Components/supplierModal";
const Navbar = lazy(() => import("./Components/Navbar"));
const Table = lazy(() => import("./Components/Table"));

function App() {
  const [homeIsLoading, setHomeIsLoading] = useState(true);
  const columns = [
    "Image_1",
    "SKU",
    "Name",
    "Title",
    "Description",
    "Brand",
    "Cost Price",
    "Quantity",
    "size",
  ];

  useEffect(() => {
    let timeout: any;
    if (homeIsLoading) {
      timeout = setTimeout(() => {
        setHomeIsLoading(false);
      }, 1500);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [homeIsLoading]);

  return (
    <Suspense fallback={<Splashscreen />}>
      
      {homeIsLoading ? (
        <Splashscreen />
      ) : (
        <div className='app bg-[#F6F6F6] text-slate-900 font-medium'>
          <DepartmentProvider>
            <header className='App-header'>
              <Navbar />
            </header>
            <main className='mx-10 my-2'>
              <HeaderTitle/>
              <Table columns={columns} />
            </main>
            <SupplierModal />
          </DepartmentProvider>
        </div>
      )}
    </Suspense>
  );
}

export default App;
