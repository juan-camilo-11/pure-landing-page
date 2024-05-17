import "pure-ui-web-components";
import "./components.css";

import componentesData from './components.json';
import { useEffect, useState } from "react";
import Alert from "../../components/alert/alert";

function Components() {
    const [dataComponent, setDataComponent] = useState<any>(null);

    useEffect(() => {
        setDataComponent(getDataComponent());
    }, []);

    const getDataComponent = () => {
        const url = window.location.pathname;
        const urlParts = url.split('/');
        const componentName = urlParts.pop();
        const component = componentesData.find(componente => componente.name === componentName?.toLowerCase());
        return component;
    }
    const components: any = {
        alert: <Alert />,
        button: <Alert />,
    };

    return (
        <section>
            {dataComponent ?
                <article className="component">
                    <h2>{dataComponent.name}</h2>
                    <p className="component__description">{dataComponent.description}</p>

                    <div className="component__usage">
                        <p className="component__usage--script">{dataComponent.usage.script}</p>
                        <p>{dataComponent.usage.example}</p>
                    </div>


                    {components[dataComponent.name]}


                    <article className="component__properties">
                        <pure-table content={JSON.stringify(dataComponent?.properties)}></pure-table>
                    </article>

                </article>
                :
                <h2>No existe</h2>
            }
        </section>
    );
}

export default Components;
