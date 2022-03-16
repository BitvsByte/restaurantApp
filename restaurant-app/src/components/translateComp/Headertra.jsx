import React from "react";
import { useTranslation } from "react-i18next";

// import { Dropdown } from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap/Button";
import { DropdownButton } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { FormControl } from "react-bootstrap";


export default function Headertra() {
    const [t,i18n] = useTranslation("global");

    return (
      <React.Fragment>
        <div>
          <h1>{t("header.hello-world")}</h1>
         </div>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title="Len"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item onClick={() => i18n.changeLanguage("es")} href="#">Es</Dropdown.Item>
            <Dropdown.Item onClick={() => i18n.changeLanguage("en")} href="#">En</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </React.Fragment>
    );


}