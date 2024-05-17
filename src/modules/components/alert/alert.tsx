import "pure-ui-web-components";
import { useEffect, useState } from "react";
import Detail from "../detail/detail";


function Alert() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(false);
    };
    const styleVariables = ["--pure-alert-bg", "--pure-alert-color", "--pure-alert-close-fill"];

    useEffect(() => {
        const handlePureClick = () => {
            setActive(true);
            console.log("Pure button clicked");
        };

        const pureButton = document.querySelector("pure-button");
        pureButton?.addEventListener("onPureClick", handlePureClick);

        return () => {
            pureButton?.removeEventListener("onPureClick", handlePureClick);
        };
    }, []);

    return (
        <Detail styleVariables={styleVariables}>
            <button onClick={handleClick}>cerrar</button>
            <pure-button text="Prueba dando click!!"></pure-button>
            <pure-alert status={active}></pure-alert>
        </Detail>
    );
}

export default Alert;
