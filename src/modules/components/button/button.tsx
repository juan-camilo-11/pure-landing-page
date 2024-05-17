import "pure-ui-web-components";
import Detail from "../detail/detail";


function Button() {
    const styleVariables = ["--pure-button-primary-bg", "--pure-button-primary-bg-hover", "--pure-button-primary-color"];

    return (
        <Detail styleVariables={styleVariables}>
            <pure-button></pure-button>
        </Detail>
    );
}

export default Button;
