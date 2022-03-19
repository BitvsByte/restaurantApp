import { useContext } from "react";
import {ThemingContext} from './theming.context';
import { Form } from "react-bootstrap";





function ThemingSelector(){
    const [theming,updateTheming] = useContext(ThemingContext);

    const changeTheme = e => {
        updateTheming(e.target.value);
    }

    return 
}


export default ThemingSelector;