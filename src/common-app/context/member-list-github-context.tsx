import React from "react";

interface FilterContext {
  filterValueContext: string;
  setFilterValueContext: (value: string) => void;
}

export const MyContext = React.createContext<FilterContext>({
  filterValueContext: "",
  setFilterValueContext: (value) => console.log("My Context missing provider"),
});

export const MyContextProvider: React.FC = (props) => {
  const { children } = props;
  const [filterValueContext, setFilterValueContext] = React.useState(
    "lemoncode"
  );

  return (
    <MyContext.Provider value={{ filterValueContext, setFilterValueContext }}>
      {children}
    </MyContext.Provider>
  );
};
