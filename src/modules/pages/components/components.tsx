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
                    <p>{dataComponent.description}</p>
                    {components[dataComponent.name]}
                    <div className="component__usage">
                        <p className="component__usage--script">{dataComponent.usage.script}</p>
                        <p>{dataComponent.usage.example}</p>
                    </div>
                    <ul>
                        {dataComponent.properties.map((item: { name: string, type: string }) =>
                            <li>{item.name} - {item.type}</li>
                        )}
                    </ul>
                    <ul>
                        {dataComponent.customStyles.map((item: { code: string, desc: string }) =>
                            <li>{item.code} - {item.desc}</li>
                        )}
                    </ul>

                </article>
                :
                <h2>No existe</h2>
            }
        </section>
    );
}

export default Components;
