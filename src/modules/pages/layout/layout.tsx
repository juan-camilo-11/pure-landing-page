import "pure-ui-web-components";
import "./layout.css";
import Header from "../../components/header/header"; 
import Footer from "../../components/footer/footer"; 

function Layout({ children }:any) {
    return (
        <div className="layout">
            <Header/>
            <main className="main">
                { children }
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;
