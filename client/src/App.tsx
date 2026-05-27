import { Switch, Route, Router } from "wouter";
import Home from "@/pages/Home";

function RouterComponent() {
  return (
    <Router base="/strategy-dashboard">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:rest*" component={Home} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return <RouterComponent />;
}
