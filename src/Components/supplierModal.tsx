import React, { useContext, useState } from "react";
import { DepartmentContextType, departmentContext } from "../ContextApi";

const SupplierModal: React.FC = () => {
  const context = useContext(departmentContext) as DepartmentContextType;

  if (!context) {
    return null;
  }

  const { setselctSupplier, selctSupplier, setopenModal, openModal } = context;
  const [pickedItem, setpickedItem] = useState<string>(selctSupplier);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setpickedItem(event.target.value);
  };
  const handleSubmit = () => {
    setselctSupplier(pickedItem);
    setopenModal(false);
  };
  return (
    <>
      {openModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white rounded-lg shadow-lg p-6 w-80'>
            <h2 className='text-lg font-medium text-center mb-4'>
              Select Supplier
            </h2>
            <div className='flex flex-col space-y-2'>
              <label className='flex items-center'>
                <input
                  type='radio'
                  value='FragranceX'
                  checked={pickedItem === "FragranceX"}
                  onChange={handleChange}
                  className='form-radio text-blue-600'
                />
                <span className='ml-2'>FragranceX</span>
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  value='FragranceNet'
                  checked={pickedItem === "FragranceNet"}
                  onChange={handleChange}
                  className='form-radio text-blue-600'
                />
                <span className='ml-2'>FragranceNet</span>
              </label>
              <label className='flex items-center'>
                <input
                  type='radio'
                  value='Morris%20Costumes'
                  checked={pickedItem === "Morris%20Costumes"}
                  onChange={handleChange}
                  className='form-radio text-blue-600'
                />
                <span className='ml-2'>Morris Costumes</span>
              </label>
            </div>
            <div className='mt-4 flex justify-end space-x-2'>
              <button
                onClick={() => setopenModal(false)}
                className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SupplierModal;
