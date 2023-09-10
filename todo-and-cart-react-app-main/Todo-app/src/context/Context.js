import { useState, createContext, useContext } from "react";

// creating context
const AppContext = createContext(null);

// providing context to app
const AppContextProvider = ({ children }) => {
  // app saved data or initialState of app
  const [appData, setAppData] = useState(
    JSON.parse(localStorage.getItem("AppData")) || {
      // todo related data
      todo: {
        totalTodos: 0,
        completedTodos: 0,
        todos: [],
      },
      // shopping cart related data
      cart: {
        totalProducts: 0,
        products: [],
      },
    }
  );
  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
};

// just function of useContext
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
