import './style.scss';
import React from 'react';
import ThemingSelector from '../themimg-selector';
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemingContext } from "../themimg-selector/theming.context";
import { Link } from 'react-router-dom';


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
                    <a className={` references small mb-0 text-${theming.typography.color}`} href="https://github.com/Macaeco">Macarena F</a>{' '}
                    <a className={`references small mb-0 text-${theming.typography.color}`} href="https://github.com/jkoki91">Jorge L</a>
                  </li>
                  <li>
                  <a className={`references small mb-0 text-${theming.typography.color}`} href="https://github.com/Robinbucad">Robin B.</a>{' '}
                  <a className={`references small mb-0 text-${theming.typography.color}`} href="https://github.com/ccrolo">Cristina R.</a>
                  </li>
                  <li>
                  <a className={`references small mb-0 text-${theming.typography.color}`} href="https://github.com/Albahd">Alba H.</a>{' '}
                  <a className={`references small mb-0 text-${theming.typography.color}`} href="https://github.com/hectortrubia">Hector A.</a>
                  </li>
                  <li>
                    <a  className={`references text-${theming.typography.color}`} href="https://github.com/ann-jrti">Andrea M.</a>{' '}
                    <a  className={`references text-${theming.typography.color}`} href="https://github.com/Stejadas">Sergio T.</a>
                  </li>
                  <li>
                    <a  className={`references text-${theming.typography.color}`} href="https://github.com/ivsp">Ivan S.</a>{' '}
                    <a  className={`references text-${theming.typography.color}`}href="https://github.com/Korobajr">J.R Coroba</a>
                  </li>
                  <li>
                  <a  className={`references text-${theming.typography.color}`}href="">Senay</a>
                    </li>

                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className={`mb-3 text-${theming.typography.color}`}>{t("footer.alumnos")}</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                  <Link to="/terms">Terminos y Condiciones</Link>
                  </li>
                  <li>
                  <Link to="/cookies">Politica de Cookies</Link>
                  </li>
                  <li>
                    <Link to="/privacity">Politica de Privacidad</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className={`mb-3 text-${theming.typography.color}`}>{t("footer.cong")}</h5>
                <p className={`small text-${theming.typography.color}`}>
                {t("footer.congdos")}
                </p>

              </div>
            </div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
  
  export default Footer;