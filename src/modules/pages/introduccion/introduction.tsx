import "pure-ui-web-components";
import "./introduction.css";
import imagenPNG from '../../../img/logo.png';

const content = {
    title: "Introducción a Pure Libreria de Web components",
    webComponents: {
        description: "Los Web Components son un conjunto de tecnologías web que permiten la creación de elementos HTML personalizados y reutilizables. Estas tecnologías están formadas por cuatro estándares principales: Custom Elements, Shadow DOM, HTML Templates."
    },
    library: {
        name: "Pure WC",
        description: "Pure es una colección de Web Components diseñada para simplificar el desarrollo de aplicaciones web modernas. Ofrece una variedad de componentes personalizables y fáciles de usar que abarcan desde botones y barras de navegación hasta formularios complejos y paneles de datos."
    },
    install: {
        code: "npm i pure-ui-web-components",
        version: "Actualmente v2.0.0"
    },
    mainFeatures: [
        "Facilidad de uso: Los componentes de Pure se integran sin problemas en proyectos web existentes y son fáciles de personalizar según las necesidades del usuario.",
        "Personalización: Cada componente se puede personalizar mediante atributos, estilos y eventos, lo que permite adaptarlo a la estética y funcionalidad de la aplicación.",
        "Optimización de rendimiento: Pure está optimizada para ofrecer un rendimiento excepcional en una amplia variedad de navegadores y dispositivos.",
        "Compatibilidad con estándares: Todos los componentes de Pure están construidos siguiendo las especificaciones de Web Components, lo que garantiza su compatibilidad con otras bibliotecas y frameworks web."
    ]
};


function Introduction() {
    return (
        <section className="introduction">
            <div className="introduction__icono">
                <img src={imagenPNG} alt="Logo de Pure WC" />
            </div>
            <div className="introduction__title">
                <h2>{content.title}</h2>
            </div>
            <div className="introduction__desc">
                <p>{content.library.description}</p>
            </div>
            <div className="introduction__install-code">
                <p>{content.install.code}</p>
                <span className="introduction__install-version">{content.install.version}</span>
            </div>
            <div className="introduction__features">
                <ul>
                    {content.mainFeatures.map((feature, index)=>
                        <li key={index}>{feature}</li>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default Introduction;
