import React, { createContext, useState, useEffect, ReactNode } from "react";

interface search {
  search?: string;
  supplier: string;
}

export interface DepartmentContextType {
  department: Array<{ [key: string]: string | number }>;
  setSearch: React.Dispatch<React.SetStateAction<search>>;
  setselctSupplier: React.Dispatch<React.SetStateAction<string>>;
  setopenModal: React.Dispatch<React.SetStateAction<boolean>>;
  selctSupplier: string;
  isLoading: boolean;
  openModal: boolean;
  error: string;
}

export const departmentContext = createContext<
  DepartmentContextType | undefined
>(undefined);

interface DepartmentProviderProps {
  children: ReactNode;
}
export const DepartmentProvider: React.FC<DepartmentProviderProps> = ({
  children,
}) => {
  const [department, setDepartment] = useState<
    Array<{ [key: string]: string | number }>
  >([]);
  const [selctSupplier, setselctSupplier] = useState("FragranceX");
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setopenModal] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState<search>({
    search: "",
    supplier: "",
  });

  const normalUrl = `http://3.88.1.181:8000/products/public/catalog?supplier=${selctSupplier}&first=10&last=50`;
  const trimmedUrl = ` http://3.88.1.181:8000/products/public/catalog?supplier=${search.supplier}&first=10&last=0&search=${search.search}`;
  useEffect(() => {
    fetchDepartment();
  }, [search, selctSupplier]);
  useEffect(() => {
    if (search.supplier) {
      setselctSupplier(search.supplier)
    }
  }, [search.supplier]);

  const fetchDepartment = async () => {
    let param;
    if (search.supplier && search.search) {
      param = trimmedUrl;
    } else {
      param = normalUrl;
    }
    try {
      setIsLoading(true);
      const response = await fetch(param);
      const data = await response.json();
      setDepartment(data);
    } catch (error) {
      setError("Somethng went wrong, Try agan...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <departmentContext.Provider
      value={{
        department,
        setSearch,
        setselctSupplier,
        selctSupplier,
        isLoading,
        error,openModal, setopenModal
      }}
    >
      {children}
    </departmentContext.Provider>
  );
};
