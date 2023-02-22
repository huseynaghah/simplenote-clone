import {Header} from "../components/Main/Header";
import {Outlet} from "react-router";
import {Footer} from "../components/Main/Footer";

function PageLayout() {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}
export default PageLayout;