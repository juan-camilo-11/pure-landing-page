import "pure-ui-web-components";
import "./layout.css";
import Header from "../header/header"; 
import Footer from "../footer/footer"; 

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
