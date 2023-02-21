import {Header} from "../components/Header";
import {Outlet} from "react-router";
import {Footer} from "../components/Footer";

function PageLayout() {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}
export default PageLayout;