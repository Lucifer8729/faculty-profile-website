import React from "react";

import * as utils from "../../components/UI/utils";

const CoursePage = () => {
  React.useEffect(() => {
    utils.addActiveClassInLinks("Course");
    return () => utils.removeActiveClassInLinks("Course");
  }, []);

  return <div>CoursePage</div>;
};

export default CoursePage;
