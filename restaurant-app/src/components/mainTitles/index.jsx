import React from "react";
import { Card,CardGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ThemingContext } from "../themimg-selector/theming.context";
import { useContext } from "react";
import mesa from '../../assets/img/mesa.jpg'
import pagos from '../../assets/img/pagos.jpg'
import pedido from '../../assets/img/pedido.jpg'
import { Container } from "react-bootstrap";
import './style.scss';




function MainTitles() {
  const [t, i18n] = useTranslation("global");
  const [theming] = useContext(ThemingContext);

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
              <div className="type-a_card" id="booking-front_card">
                <div id="booking" className={`text-inside-img_card text-${theming.typography.color}`}>
                  {t("main.reservas")}
                </div>
              </div>

              {/* <!-- BACK--> */}
              <div className="type-b_card">
                <div className={`back_title_inside_card  text-${theming.typography.color}`}>
                  {t("main.reservas")}
                </div>
                <div className={`back_text_inside_card text-${theming.typography.color}`}>
                  {t("main.reservar")}
                </div>
              </div>
            </div>

            {/* <!-- SEGUNDA CARTA--> */}

            <div className="flip_card_inner_a">
              {/* <!-- FRONT--> */}
              <div className={`type-a_card text-${theming.typography.color}`} id="command-front_card">
                <div id="command" className={`text-inside-img_card  text-${theming.typography.color}`}>
                  {t("main.menu")}
                </div>
              </div>

              {/* <!-- BACK --> */}
              <div className="type-c_card">
                <div className={`back_title_inside_card text-${theming.typography.color}`}>{t("main.menu")}</div>
                <div className={`back_text_inside_card text-${theming.typography.color}`}>{t("main.command")}</div>
              </div>
            </div>

            {/* <!-- TERCERA CARTA --> */}
            <div className="flip_card_inner_b">
              {/* <!-- FRONT--> */}
              <div className="type-a_card" id="pay-front_card">
                <div id="pay" className={`text-inside-img_card text-${theming.typography.color}`}>
                  {t("main.payments")}
                </div>
              </div>

              {/* <!-- BACK --> */}
              <div className="type-b_card">
                <div className={`back_title_inside_card text-${theming.typography.color} `}>
                  {t("main.payments")}
                </div>
                <div className={`back_text_inside_card text-${theming.typography.color} `}>{t("main.pay")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
  
  export default MainTitles;