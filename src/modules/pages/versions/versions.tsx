import "pure-ui-web-components";
import "./versions.css";

import VersionsData from "./versions.json";

function Versions() {
    return (
        <section className="versions">
            <h2>Versiones</h2>
            <div>
                {VersionsData.map((item) =>
                    <article>
                        <h4>{item.version}</h4>
                        <p><b>Novedades generales:</b> {item.news === "" ? "N/A" : item.news}</p>
                        {item.components.map((component) =>
                            <ul>
                                <li><b>Nombre:</b> {component.name}</li>
                                <li><b>Etiqueta:</b> {component.Element}</li>
                                <li><b>Bugs:</b> {component.bugs === "" ? "N/A" : component.bugs}</li>
                                <li><b>Novedades:</b> {component.news === "" ? "N/A" : component.news}</li>
                            </ul>
                        )}
                    </article>
                )}
            </div>
        </section>
    );
}

export default Versions;
