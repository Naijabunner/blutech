import { useContext, useState } from "react";
import { DepartmentContextType, departmentContext } from "../ContextApi";

const SearchBlock = () => {
  const context = useContext(departmentContext) as DepartmentContextType;
  const [searchItem, setSearchItem] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState("");

  const load = {
    search: searchItem,
    supplier: selectedSupplier,
  };
  if (!context) {
    return null;
  }

  const { setSearch } = context;

  return (
    <>
      <form
        className='max-w-lg '
        onSubmit={(event) => {
          event.preventDefault();
          if (selectedSupplier) {
            setSearch(load);
          } else {
            alert("Hello world!");
          }
        }}
      >
        <div className='flex'>
          <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
            Your Email
          </label>

          <select
            name=''
            id=''
            className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
            value={selectedSupplier}
            onChange={(e) => setSelectedSupplier(e.target.value)}
          >
            <option value=''>Select Supplier</option>
            <option value='FragranceX'>FragranceX</option>
            <option value='FragranceNet'>FragranceNet</option>
            <option value='Morris%20Costumes'>Morris Costumes</option>
          </select>
          <div className='relative w-full'>
            <input
              type='search'
              id='search-dropdown'
              className='block p-2.5 w-full lg:w-[20rem] z-20 text-sm text-gray-800 bg-gray-50 rounded-e-lg  focus:ring-blue-500 focus:border-blue-500 '
              placeholder='Search by keywords...'
              onChange={(e) => setSearchItem(e.target.value)}
              required
            />
            <button
              type='submit'
              className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white  rounded-e-lg bg-gray-50  hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 '
            >
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='blue'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <span className='sr-only'>Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBlock;
