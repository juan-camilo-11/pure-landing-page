import "pure-ui-web-components";
import Detail from "../detail/detail";


function Input() {
    const styleVariables = ["--pure-input-focus"];

    return (
        <Detail styleVariables={styleVariables}>
            <pure-input></pure-input>
        </Detail>
    );
}

export default Input;
