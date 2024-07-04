import { useContext } from "react";
import { DepartmentContextType, departmentContext } from "../ContextApi";

const HeaderTitle = () => {
  const context = useContext(departmentContext) as DepartmentContextType;

  if (!context) {
    return null;
  }

  const { selctSupplier, setopenModal } = context;
  return (
    <h1 className='text-xl font-medium my-5'>
      Department List
      <span
        className='text-base ml-5 underline text-blue-600 cursor-pointer '
        onClick={() => setopenModal(true)}
      >
        {selctSupplier ==="Morris%20Costumes"?"Morris Costumes":selctSupplier} <span className='text-xs'>[change]</span>{" "}
      </span>
    </h1>
  );
};

export default HeaderTitle;
