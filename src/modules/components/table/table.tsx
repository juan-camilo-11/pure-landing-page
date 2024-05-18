import "pure-ui-web-components";
import Detail from "../detail/detail";


function Table() {
    const styleVariables = ["--pure-table-header-bg"];

    return (
        <Detail styleVariables={styleVariables}>
            <pure-table content='{"columns": [{"header": "Nombre"},{"header": "Edad"},{"header": "Correo electrónico"}], "rows": [ { "name": "Juan", "age": 30, "email": "juan@example.com" }, { "name": "María", "age":25,"email":"maria@example.com"},{"name":"Carlos","age":35,"email":"carlos@example.com"}]}'></pure-table>
        </Detail>
    );
}

export default Table;
