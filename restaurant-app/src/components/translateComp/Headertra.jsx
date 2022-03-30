import React from "react";
import { useTranslation } from "react-i18next";
import './style.scss'
import {useContext} from 'react'
import {ThemingContext} from "./../themimg-selector/theming.context";

// import { Dropdown } from "react-bootstrap/Dropdown";

import { DropdownButton } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import espana from '../../assets/img/espana (1).png'
import uk from '../../assets/img/uk.png'
import {BsTranslate} from 'react-icons/bs'


export default function Headertra() {
    const [t,i18n] = useTranslation("global");
    const [theming, updateTheming, logName, setLogName] = useContext(ThemingContext);

    return (
      <React.Fragment>
        <InputGroup>
          <DropdownButton className="btn_translate" border={`${theming.secondary.color}`} title={<BsTranslate />} id="input-group-dropdown-1">
            <Dropdown.Item className="text-info fw-bold" onClick={() => i18n.changeLanguage("es")} href="#">Es<img className='mx-2' src={espana} style={{width:'20px'}}></img></Dropdown.Item>
            <Dropdown.Item className="text-info fw-bolder" onClick={() => i18n.changeLanguage("en")} href="#">En<img className='mx-2'src={uk} style={{width:'20px'}}></img></Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </React.Fragment>
    );


}