import { BrowserRouter, Switch, Route } from "react-router-dom"
import CharacterDetail from "./pages/CharacterDetail";
import Home from "./pages/Home";

const Layout = () => {
    return (
        <BrowserRouter>
            <Switch>(
                <Route path={"/character/:id/detail"} component={CharacterDetail} />
                <Route exact path={"/"} component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Layout;