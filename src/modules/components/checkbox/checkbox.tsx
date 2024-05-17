import "pure-ui-web-components";
import Detail from "../detail/detail";


function Checkbox() {
    const styleVariables = ["--pure-checkbox-bg", "--pure-checkbox-color"];

    return (
        <Detail styleVariables={styleVariables}>
            <pure-checkbox></pure-checkbox>
        </Detail>
    );
}

export default Checkbox;
