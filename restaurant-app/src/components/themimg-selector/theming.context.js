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
    },
    comanda:{
        color:'secondary'
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
    },
    comanda:{
        color:'warning'
    }
}


export const ThemingContext = createContext();
