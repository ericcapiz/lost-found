import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import PostPage from "./pages/postpage/PostPage";
import HomePage from "./pages/homepage/HomePage";

function App() {
  const currentUser = false;

    return (
      <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/posts">
          <HomePage />
        </Route>
        <Route path="/register">
          {currentUser ? <HomePage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <HomePage /> : <Login />}</Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/add">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
