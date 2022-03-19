import React from "react";
import './style.css';
import { useTranslation } from "react-i18next";
import Carru from "../carrusel";
import MainTitles from "../mainTitles";



function MainApp() {
    const [t,i18n] = useTranslation("global");

    return (
        <React.Fragment>
            <div className="test2">
                <MainTitles></MainTitles>

                <Carru></Carru>
            </div>
      </React.Fragment>
  
    )
  }
  
  export default MainApp;