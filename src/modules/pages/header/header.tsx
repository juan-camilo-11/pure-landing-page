import "pure-ui-web-components";
import "./header.css";

function Header() {
    const items = [
        {"text": "Introducción", "url": "/introduccion"},
        {"text": "Componentes", "url": "/componentes", "subItems" : [
            {"text":"Alert","url":"/componentes/alert"},
            {"text":"Button","url":"/componentes/button"},
            {"text":"Checkbox","url":"/componentes/checkbox"}
        ]},
        {"text": "Versiones", "url": "/versiones"},
        {"text": "Nosotros", "url": "/nosotros"}
    ];

    return (
        <header className="header">
            <div className="header__nav">
                <pure-navbar navItems={JSON.stringify(items)}></pure-navbar>
            </div>
            <div className="header__title">
                <h2>Pure Documentacion</h2>
            </div>
            <div className="header__buttons">
                <button>No lo se</button>
            </div>
        </header>
    );
}

export default Header;
