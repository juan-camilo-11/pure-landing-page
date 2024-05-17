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
