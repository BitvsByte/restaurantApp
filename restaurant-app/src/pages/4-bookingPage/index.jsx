import React from "react";
import Footer from "../../components/footer";
import Headerapp from "../../components/headerapp";
import BookingCalendar from "../../components/bookings";
import Headerappdos from "../../components/headerVal";



function Bookings() {


    return (
        <React.Fragment>
            <Headerappdos />
            <BookingCalendar></BookingCalendar>
            
            

        </React.Fragment>
    )
}


export default Bookings;