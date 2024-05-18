import "pure-ui-web-components";
import "./header.css";
import {path} from "../../../constants/path";

function Header() {
    const items = [
        {"text": "Introducción", "url": `${path}/introduccion`},
        {"text": "Componentes", "url": "/componentes", "subItems" : [
            {"text":"Alert","url":`${path}/componentes/alert`},
            {"text":"Button","url":`${path}/componentes/button`},
            {"text":"Checkbox","url":`${path}/componentes/checkbox`},
            {"text":"Dropdown","url":`${path}/componentes/dropdown`},
            {"text":"Input","url":`${path}/componentes/input`},
            {"text":"Modal","url":`${path}/componentes/modal`},
            {"text":"Navbar","url":`${path}/componentes/navbar`},
            {"text":"Table","url":`${path}/componentes/table`},
            {"text":"Tag","url":`${path}/componentes/tag`},
            {"text":"Toggle","url":`${path}/componentes/toggle`}
        ]},
        {"text": "Versiones", "url": `${path}/versiones`},
        {"text": "Nosotros", "url": `${path}/nosotros`}
    ];

    return (
        <header className="header">
            <div className="header__nav">
                <pure-navbar logoText="</Pure>" navItems={JSON.stringify(items)}></pure-navbar>
            </div>
            <div className="header__title">
                <h2>Documentacion</h2>
            </div>
            <div className="header__name">
                <h4>&lt;/<span>Pure</span>&gt;</h4>
            </div>
        </header>
    );
}

export default Header;
