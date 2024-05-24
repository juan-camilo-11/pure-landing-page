import "pure-ui-web-components";
import "./introduction.css";
import imagenPNG from '../../../img/logo.png';
import { path } from "../../../constants/path";
import { useEffect, useState } from "react";

function Introduction() {
    const [active, setActive] = useState(false);
    
    const handlePureClick = () => {
        setActive(prevActive => !prevActive);
    };

    useEffect(() => {
        const pureButton = document.querySelector("pure-copy");
        pureButton?.addEventListener("onPureCopy", handlePureClick);

        return () => {
            pureButton?.removeEventListener("onPureCopy", handlePureClick);
        };
    }, []);

    return (
        <section className="introduction">
            <article className="introduction__title">
                <h2>¿Que es Pure?</h2>
                <img src={imagenPNG} alt="Logo de Pure WC" />
                <p>
                    Pure es una colección de Web Components diseñada para simplificar el desarrollo de aplicaciones web modernas.
                </p>
                <p>
                    Ofrece una variedad de componentes personalizables y fáciles de usar que abarcan desde botones y barras de navegación hasta formularios complejos y paneles de datos.
                </p>
            </article>
            <article className="introduction__install">
                <h2>Instalar de forma local con NPM</h2>
                <span>Pure está disponible como paquete a través de npm.</span>
                <div className="introduction__install--code">
                    <pure-copy text="npm i pure-ui-web-components" size="large"></pure-copy>
                    <pure-alert text="Texto Copiado!!" status={active}></pure-alert>
                </div>
                <span>Luego importe:</span>
                <p className="introduction__install--import"><span>import</span> "pure-ui-web-components"</p>
            </article>
            <article className="introduction__features">
                <h2>¿Porque deberia escoger Pure?</h2>
                <ul>
                    <li>
                        <span>Facilidad.</span> Los componentes de Pure se integran sin problemas en proyectos web existentes y son fáciles de personalizar según las necesidades del usuario.
                    </li>
                    <li>
                        <span>Personalización.</span> Cada componente se puede personalizar mediante atributos, estilos y eventos, lo que permite adaptarlo a la estética y funcionalidad de la aplicación.
                    </li>
                    <li>
                        <span>Compatibilidad.</span> Todos los componentes de Pure están construidos siguiendo las especificaciones de Web Components, lo que garantiza su compatibilidad con otras bibliotecas y frameworks web.
                    </li>
                </ul>
            </article>
            <article className="introduction__steps">
                <h2>Proximos pasos:</h2>
                <ul>
                    <li>
                        <a href={`${path}/componentes/alert`}>Componentes: </a>
                        <span>Obten informacion de los componentes.</span>
                    </li>
                    <li>
                        <a href={`${path}/versiones`}>Versiones: </a>
                        <span>Obten mas informacion de las recientes versiones.</span>
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default Introduction;
