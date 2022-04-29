import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageIceland";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";
import Services from "./pages/Services";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/page-one">
                    <PageOne />
                </Route>
                <Route path="/page-two">
                    <PageTwo />
                </Route>
                <Route path="/page-thrxee">
                    <PageThree />
                </Route>
                <Route path="/page-Services">
                    <Services />
                </Route>
                <Route path="/page-cta">
                    <PageCTA />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
