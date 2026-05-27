import { Switch, Route, Router } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

function RouterComponent() {
  return (
    <Router base="/strategy-dashboard">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return <RouterComponent />;
}
