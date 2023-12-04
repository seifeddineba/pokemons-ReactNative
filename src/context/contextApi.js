import { createContext, useState } from "react";

export const CollectionContext = createContext();
export function CollectionProvider(props) {
  const [collection, setCollection] = useState([]);

  return (
    <CollectionContext.Provider value={{ collection, setCollection }}>
      {props.children}
    </CollectionContext.Provider>
  );
}
