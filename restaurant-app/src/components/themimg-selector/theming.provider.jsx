import {ThemingContext, darkTheme,lightTheme} from './theming.context';

import { useState } from "react";
import React from 'react';

// se encarga de actualizar los valores de las Custom Properties
// en funcion de el objeto que entre


function ThemingProvider({ children }) {
    const [theming, updateTheming] = useState(lightTheme);
    const [logName,setLogName] = useState('')
    const [menu, upDateMenu] = useState([]);
    

    const changecolor = ()=>{
        updateTheming ((v)=> v === lightTheme? darkTheme : lightTheme )

    }

    return (
        <ThemingContext.Provider value={[theming,changecolor,logName,setLogName,menu, upDateMenu]}>
            {children}
        </ThemingContext.Provider>
    )
}


export default ThemingProvider;