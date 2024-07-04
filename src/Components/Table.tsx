import React, { useContext } from "react";
import { departmentContext, DepartmentContextType } from "../ContextApi";
import LazyImage from "./UI/ImageLoader";
import Loader from "./UI/Loader";

interface TableProps {
  columns: string[];
}

const Table: React.FC<TableProps> = ({ columns }) => {
  const context = useContext(departmentContext) as DepartmentContextType;

  if (!context) {
    return null;
  }

  const { department, isLoading, error } = context;
  return (
    <>
    {isLoading &&<Loader/>}
    {error &&<Loader/>}
     <div className='overflow-x-auto  '>
      <table className='min-w-full rounded-lg transition-all duration-300 ease-in-out '>
        <TableHead entries={columns} />
        <div className='h-5 space_container'></div>
        <TableBody entries={columns} data={department} />
      </table>
    </div>
    </>
  );
};

interface TableHeadProps {
  entries: string[];
}

const TableHead: React.FC<TableHeadProps> = ({ entries }) => {
  return (
    <thead className=''>
      <tr className='bg-blue-50'>
        <th className='py-1 px-4 font-medium '>
          <div className='h-full flex gap-1 items-center'>
            <input type='checkbox' name='' id='' />
            <span>S/N</span>
          </div>
        </th>
        {entries.map((column) => (
          <th key={column} className='py-1 px-4 font-medium'>
            {column === "Image_1" ? "Image" : column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

interface TableBodyProps {
  entries: string[];
  data?: Array<{ [key: string]: string | number }>;
}

const TableBody: React.FC<TableBodyProps> = ({ entries, data }) => {
  return (
    <tbody className=' overflow-hidden rounded-full'>
      {data && data.length >0 ?
        data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className='bg-white transition duration-300 ease-in-out hover:scale-[1.02] hover:font-bold hover:bg-blue-100  '
          >
            <td className='py-2 px-4 border-b'>
              <div className='h-full flex gap-1 items-center'>
                <input type='checkbox' name='' id='' className='text-6xl' />
                <span className=' text-xl'>{rowIndex + 1}</span>
              </div>
            </td>
            {entries.map(
              (column) =>
                column !== "Description" ? (
                  <td
                    key={column}
                    className='py-2 px-4 text-center border-b  text-sm '
                  >
                    {column === "Image_1" ? (
                      <LazyImage
                      key={row[column] as string}
                        src={row[column] as string}
                        alt='Product Image'
                      />
                    ) : (
                      row[column]
                    )}
                  </td>
                ) : (
                  <td
                    key={column}
                    className='py-2 px-4 text-center border-b min-w-56 text-sm '
                  >
                    {row[column]}
                  </td>
                )
              // TO regulate description size
            )}
          </tr>
        )):(
          <section className="w-screen h-[80vh] grid place-content-center text-2xl font-bold animate-pulse">
          <div className="">
            Could not find anything!!!
          </div>
      </section>
        )}
    </tbody>
  );
};

export default Table;
