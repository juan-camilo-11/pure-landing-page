import "pure-ui-web-components";
import Detail from "../detail/detail";
import { useEffect, useState } from "react";


function Modal() {
    const [active, setActive] = useState(false);

    const handlePureClick = () => {
        setActive(prevActive => !prevActive); // Invierte el valor de active
    };
    useEffect(() => {
        const pureButton = document.querySelector("pure-button");
        pureButton?.addEventListener("onPureClick", handlePureClick);

        return () => {
            pureButton?.removeEventListener("onPureClick", handlePureClick);
        };
    }, []);

    useEffect(() => {
        console.log("Estado actual de active:", active);
    }, [active]); 

    return (
        <Detail>
            <pure-button text={active ? "Reintentar" : "Probar"}></pure-button>
            {active && (
                <pure-modal status={active} showButton></pure-modal>
            )}
        </Detail>
    );
}

export default Modal;
