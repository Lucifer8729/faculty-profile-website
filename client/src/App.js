import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import ContactPage from "./Pages/ContactPage/ContactPage";
import CoursePage from "./Pages/CoursePage/CoursePage";
import ExperiencePage from "./Pages/ExperiencePage/ExperiencePage";
import HomePage from "./Pages/HomePage/HomePage";
import PatentPage from "./Pages/PatentPage/PatentPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PublicationPage from "./Pages/PublicationPage/PublicationPage";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/patentpage" exact component={PatentPage} />
        <Route path="/publicationpage" exact component={PublicationPage} />
        <Route path="/profilepage" exact component={ProfilePage} />
        <Route path="/experiencepage" exact component={ExperiencePage} />
        <Route path="/coursepage" exact component={CoursePage} />
        <Route path="/contactpage" exact component={ContactPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
