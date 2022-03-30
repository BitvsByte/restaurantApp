import React from "react";
import Footer from "../../components/footer";
import Headerapp from "../../components/headerapp";
import BookingCalendar from "../../components/bookings";
import Headerappdos from "../../components/headerVal";



function Bookings() {


    /**
     * 
     * 
     * 1-buscar la posicion accur del restaurante y la mia
     * 2- Una vez realizado el booking la aplicaccion debera comprobar mi geoposicion y compararla con la del restaurante.



     */


    return (
        <React.Fragment>
            <Headerappdos />
            <BookingCalendar></BookingCalendar>
            
            

        </React.Fragment>
    )
}


export default Bookings;