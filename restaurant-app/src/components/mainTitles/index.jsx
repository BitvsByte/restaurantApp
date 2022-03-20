import React from "react";
import { Card,CardGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ThemingContext } from "../themimg-selector/theming.context";
import { useContext } from "react";
import mesa from '../../assets/img/mesa.jpg'
import pagos from '../../assets/img/pagos.jpg'
import pedido from '../../assets/img/pedido.jpg'
import { Container } from "react-bootstrap";
import './style.css';




function MainTitles() {
  const [t, i18n] = useTranslation("global");
  const [theming, changecolor] = useContext(ThemingContext);

  return (
    <React.Fragment>
      <div className="card">
        <div className="container_father_card">
          {/* <!-- TITLE --> */}

          {/* <!-- CARDS --> */}
          <div className="contenedor_card">
            {/* <!-- PRIMERA CARTA--> */}
            <div className="flip_card_inner_b">
              {/* <!-- FRONT  --> */}
              <div className="type-a_card" id="mountain-front_card">
                <div id="mountain" className="text-inside-img_card">
                  {t("main.reservas")}
                </div>
              </div>

              {/* <!-- BACK--> */}
              <div className="type-b_card">
                <div className="back_title_inside_card">
                  {t("main.reservas")}
                </div>
                <div className="back_text_inside_card">
                  {t("main.reservar")}
                </div>
              </div>
            </div>

            {/* <!-- SEGUNDA CARTA--> */}

            <div className="flip_card_inner_a">
              {/* <!-- FRONT--> */}
              <div className="type-a_card" id="lake-front_card">
                <div id="lake" className="text-inside-img_card">
                  {t("main.menu")}
                </div>
              </div>

              {/* <!-- BACK --> */}
              <div className="type-c_card">
                <div className="back_title_inside_card">{t("main.menu")}</div>
                <div className="back_text_inside_card">{t("main.command")}</div>
              </div>
            </div>

            {/* <!-- TERCERA CARTA --> */}
            <div className="flip_card_inner_b">
              {/* <!-- FRONT--> */}
              <div className="type-a_card" id="ocean-front_card">
                <div id="ocean" className="text-inside-img_card">
                  {t("main.payments")}
                </div>
              </div>

              {/* <!-- BACK --> */}
              <div className="type-b_card">
                <div className="back_title_inside_card">
                  {t("main.payments")}
                </div>
                <div className="back_text_inside_card">{t("main.pay")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
  
  export default MainTitles;