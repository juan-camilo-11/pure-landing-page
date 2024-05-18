import "pure-ui-web-components";
import Detail from "../detail/detail";


function Dropdown() {
    const styleVariables = ["--pure-dropdown-bg", "--pure-dropdown-color"];

    return (
        <Detail styleVariables={styleVariables}>
            <pure-dropdown></pure-dropdown>
        </Detail>
    );
}

export default Dropdown;
