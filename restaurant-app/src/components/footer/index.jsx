import './style.scss';
import React from 'react';
import ThemingSelector from '../themimg-selector';
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemingContext } from "../themimg-selector/theming.context";


function Footer() {
  const [t, i18n] = useTranslation("global");
  // {t("footer.footer-subtitules")}

  const [theming, changecolor] = useContext(ThemingContext);
  return (
    <React.Fragment>
      <div className="footer__container">
        <footer className="w-70 py-4 flex-shrink-0 bg-primary">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <h5 className={`h1 text-${theming.typography.color}`}>{t("footer.footer-title")}</h5>
                <p className={`small text-${theming.typography.color}`}>
                {t("footer.footer-subtitules")}
                </p>
                <p className="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.{" "}
  
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className={`mb-3 text-${theming.typography.color}`}>{t("footer.alumnos")}</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a className={`references text-${theming.typography.color}`} href="https://github.com/Macaeco">Macarena Fernanadez</a>
                  </li>
                  <li>
                    <a className={`references text-${theming.typography.color}`} href="https://github.com/jkoki91">Jorge Lleonard</a>
                  </li>
                  <li>
                  <a className={`references text-${theming.typography.color}`} href="https://github.com/Robinbucad">Robin Bucad</a>
                  </li>
                  <li>
                  <a className={`references text-${theming.typography.color}`} href="https://github.com/ccrolo">Cristina Romero</a>
                  </li>
                  <li>
                  <a className={`references text-${theming.typography.color}`} href="https://github.com/Albahd">Alba Huertas</a>
                  </li>
                  <li>
                  <a className={`references text-${theming.typography.color}`} href="https://github.com/hectortrubia">Hector Alvarez</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className={`mb-3 text-${theming.typography.color}`}>{t("footer.alumnos")}</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a  className={`references text-${theming.typography.color}`} href="https://github.com/ann-jrti">Andrea Masó</a>
                  </li>
                  <li>
                    <a  className={`references text-${theming.typography.color}`} href="https://github.com/Stejadas">Sergio Tejada</a>
                  </li>
                  <li>
                    <a  className={`references text-${theming.typography.color}`} href="https://github.com/ivsp">Ivan Sanchez</a>
                  </li>
                  <li>
                    <a  className={`references text-${theming.typography.color}`}href="https://github.com/Korobajr">Juan Ramon Coroba</a>
                  </li>
                  <li>
                    <a  className={`references text-${theming.typography.color}`} href="https://github.com/dedeere400 ">Senay</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className={`mb-3 text-${theming.typography.color}`}>{t("footer.cong")}</h5>
                <p className={`small text-${theming.typography.color}`}>
                {t("footer.congdos")}
                </p>
                <form action="#">
                  <div className="input-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    ></input>
                    <button
                      className="btn btn-secondary"
                      id="button-addon2"
                      type="button"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
  
  export default Footer;