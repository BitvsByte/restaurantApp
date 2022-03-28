import { createContext } from "react";
export const lightTheme = {
    primary: {
        color: 'primary',
    },
    secondary: {
        color: 'primary'
    },
    typography: {
        color: 'info'
    },
    reservas:{
        color:'danger'
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
        color: 'warning'
    },
    reservas:{
        color:'warning'
    }
}


export const ThemingContext = createContext();
