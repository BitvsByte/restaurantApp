import { createContext } from "react";
export const lightTheme = {
    primary: {
        color: 'primary',
    },
    secondary: {
        color: '#273446'
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
        color: 'green   '
    },
    typography: {
        color: 'success'
    }
}


export const ThemingContext = createContext();
