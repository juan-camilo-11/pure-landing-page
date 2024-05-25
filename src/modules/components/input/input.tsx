import "pure-ui-web-components";
import Detail from "../detail/detail";


function Input() {
    const styleVariables = ["--pure-input-focus","--color-input-message-text","--color-input-bg","--color-input-text"];

    return (
        <Detail styleVariables={styleVariables}>
            <pure-input></pure-input>
        </Detail>
    );
}

export default Input;
