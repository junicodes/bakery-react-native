import {
  SIDEBAR_TOGGLE, THEME_MODE, FONT_FAMILY, FONT_SIZE
} from './types';


//Reducer to change state
export const reducer = (state, action) => {
    switch (action.type) {
      case SIDEBAR_TOGGLE:
        return (state = { ...state, sideBarToggle: action.payload });
      case THEME_MODE:
        return (state = { ...state, themeMode: action.payload });
      case FONT_FAMILY:
        return (state = { ...state, fontFamily: action.payload });
      case FONT_SIZE:
        return (state = { ...state, fontSize: action.payload });
      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
};