// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
// var Main = require("../components/Main");
import Main from "../components/Main";
import About from "../components/children/About";
import Resume from "../components/children/Resume";
import Contact from "../components/children/Contact";
import Projects from "../components/children/Projects";
import Project1 from "../components/children/grandchildren/Project1";
import Project2 from "../components/children/grandchildren/Project2";
import Project3 from "../components/children/grandchildren/Project3";
import Project4 from "../components/children/grandchildren/Project4";
import Project5 from "../components/children/grandchildren/Project5";
import Project6 from "../components/children/grandchildren/Project6";

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>
      <Route path="About" component={About} />
      <Route path="Resume" component={Resume} />
      <Route path="Projects" component={Projects} >
      
        <Route path="Project1" component={Project1} />
        <Route path="Project2" component={Project2} />
        <Route path="Project3" component={Project3} />
        <Route path="Project4" component={Project4} />
        <Route path="Project5" component={Project5} />
        <Route path="Project6" component={Project6} />

        <IndexRoute component={Project1} />
      </Route>
      <Route path="Contact" component={Contact} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={About} />

    </Route>
  </Router>
);
