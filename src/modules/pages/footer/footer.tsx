import "pure-ui-web-components";
import "./footer.css";

const date = new Date();
const year = date.getFullYear();

const content = {
    name: "Pure Libreria",
    copyright: `© ${year} Juan Romero. Todos los derechos reservados.`,
};
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__networks">
                <h2>{content.name}</h2>
            </div>
            <div className="footer__copyright">
                <p>{content.copyright}</p>
            </div>
            

        </footer>
    );
}

export default Footer;
