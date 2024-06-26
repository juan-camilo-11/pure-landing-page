import "pure-ui-web-components";
import { useEffect, useState } from "react";
import Detail from "../detail/detail";


function Alert() {
    const [active, setActive] = useState(false);

    const styleVariables = ["--pure-alert-bg", "--pure-alert-color", "--pure-alert-close-fill"];
    
    const handlePureClick = () => {
        setActive(prevActive => !prevActive);
    };

    useEffect(() => {
        const pureButton = document.querySelector("pure-button");
        pureButton?.addEventListener("onPureClick", handlePureClick);

        return () => {
            pureButton?.removeEventListener("onPureClick", handlePureClick);
        };
    }, []);

    return (
        <Detail styleVariables={styleVariables}>
            <pure-button text={active ? "Reintentar" : "Probar"}></pure-button>
            <pure-alert status={active}></pure-alert>
        </Detail>
    );
}

export default Alert;
