import React, { useEffect } from "react";

import * as utils from "../../components/UI/utils";

const CourseContent = () => {
  useEffect(() => {
    utils.addActiveClassInLinks("Course");
    return () => utils.removeActiveClassInLinks("Course");
  }, []);
  return <div>content</div>;
};

export default CourseContent;
