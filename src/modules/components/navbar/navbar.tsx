import "pure-ui-web-components";
import Detail from "../detail/detail";


function Navbar() {
    const styleVariables = ["--pure-navbar-icon-open-bg","--pure-navbar-icon-open-color", "--pure-navbar-icon-open-hover", "--pure-navbar-border-color"];

    return (
        <Detail styleVariables={styleVariables}>
            <pure-navbar logoText="Mi Sitio" navItems='[{"text": "Inicio", "url": "", "active": "true"}, {"text": "Acerca de", "url": ""}]'></pure-navbar>
        </Detail>
    );
}

export default Navbar;
