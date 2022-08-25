import { createContext, useState } from "react";

export const SortContext = createContext();

export const SortContextProvider = (props) => {
  const [sort, setSort] = useState("popularity.desc");

  const sortHandler = (sortValue) => {
    setSort(sortValue);
  };

  return (
    <SortContext.Provider value={{ sort, sortHandler }}>
      {props.children}
    </SortContext.Provider>
  );
};
