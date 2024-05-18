import "pure-ui-web-components";
import Detail from "../detail/detail";


function Toggle() {
    const styleVariables = ["--pure-toggle-color-bg"];
    return (
        <Detail styleVariables={styleVariables}>
            <pure-toggle></pure-toggle>
        </Detail>
    );
}

export default Toggle;
