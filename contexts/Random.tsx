import { ParentComponent, createContext, useContext } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";

const Context = createContext<string>();

export const RandomProvider: ParentComponent = (props) => {
  const pageContext = usePageContext();

  return <Context.Provider value={pageContext.random}>
    {props.children}
  </Context.Provider>
}

export const useRandom = () => useContext(Context)