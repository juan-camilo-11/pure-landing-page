import "pure-ui-web-components";
import Detail from "../detail/detail";
import  "./expand.css";


function Expand() {
    const styleVariables = 
    [   
        "--pure--expand-border-color", 
        "--pure--expand-text-color",
        "--pure--expand-text-color-hover",
        "--pure--expand-bg-color",
        "--pure--expand-bg-color-hover"
    ];

    return (
        <Detail styleVariables={styleVariables}>
            <div className="pure-expand">
            <pure-expand 
                optionsTitle="Titulo"
                optionsSubtitle="Subtitulo"
                options='[{"text":"Introduccion","to":"/pure-landing-page/introduccion"},{"text":"versiones", "to":"/pure-landing-page/versiones"}]'
                optionsFooter='{"text":"Footer", "to": false}'
                position="left"><span>Click!!!</span></pure-expand>
            </div>

        </Detail>
    );
}

export default Expand;
