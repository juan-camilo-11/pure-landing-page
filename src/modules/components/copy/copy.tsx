import "pure-ui-web-components";
import Detail from "../detail/detail";


function Copy() {
    const styleVariables = ["--pure-copy-bg","--pure-copy-color","--pure-input-bg", "--pure-copy-bg-hover"];
    return (
        <Detail styleVariables={styleVariables}>
            <pure-copy></pure-copy>
        </Detail>
    );
}

export default Copy;
