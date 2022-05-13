import { useReducer, createContext, useContext } from 'react';
import { reducer } from './reducer';


const AppContext = createContext();
const AppDispatchContext = createContext();

//Object Shared State Default Store
let sharedState = {
  sideBarToggle: false,
  themeMode: 'light',
  fontFamily: 'serif',
  fontSize: 14
};

//Set context info
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, sharedState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>{children}</AppContext.Provider>
    </AppDispatchContext.Provider>
  );
}

//Get the context info
export const useAppContext = () => useContext(AppContext);
export const useDispatchAppContext = () => useContext(AppDispatchContext);

//the above ia just a way of simplyfying things so that in the respectve componrnts you can just type useAppContext()
//instead of setting the usecontext again