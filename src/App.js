import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/Services";
import ShopPage from "./pages/ShopPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/page-shop">
                    <ShopPage />
                </Route>
                <Route path="/page-about">
                    <AboutPage />
                </Route>
                <Route path="/page-Services">
                    <Services />
                </Route>
                <Route path="/page-contact">
                    <ContactPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
