import React from "react";

import * as utils from "../../components/UI/utils";

const ExperiencePage = () => {
  React.useEffect(() => {
    utils.addActiveClassInLinks("Experience");
    return () => utils.removeActiveClassInLinks("Experience");
  }, []);

  return <div>ExperiencePage</div>;
};

export default ExperiencePage;
