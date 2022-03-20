import { createContext } from "react";
export const lightTheme = {
    primary: {
        color: 'primary',
    },
    secondary: {
        color: 'secondary'
    },
    typography: {
        color: 'info'
    }
}

export const darkTheme = {
    primary: {
        color: 'primary',
    },
    secondary: {
        color: 'success'
    },
    typography: {
        color: 'success'
    }
}


export const ThemingContext = createContext();
