import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import ContactPage from "./Pages/ContactPage/ContactPage";
import CoursePage from "./Pages/CoursePage/CoursePage";
import ExperiencePage from "./Pages/ExperiencePage/ExperiencePage";
import HomePage from "./Pages/HomePage/HomePage";
import PatentPage from "./Pages/PatentPage/PatentPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PublicationPage from "./Pages/PublicationPage/PublicationPage";
import CourseContent from "./components/Course/CourseContent";
import LoginPage from "./Pages/LoginPage/LoginPage";

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
        <Route path="/coursepage/:id" exact component={CourseContent} />
        <Route path="/contactpage" exact component={ContactPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/" exact component={() => <Redirect to="/home" />} />
      </Switch>
    </>
  );
};

export default App;
