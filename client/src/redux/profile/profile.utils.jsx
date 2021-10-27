export const editAboutMe = (input) => {
  return {
    header: input.header,
    quote: input.quote,
    detail: input.detail,
  };
};

export const addNewDegree = (input, from, to) => {
  const startDate = new Date(from);
  const endDate = new Date(to);
  const yearRange = `${startDate.getFullYear()} - ${endDate.getFullYear()}`;

  return {
    degree: input.degree,
    year: yearRange,
    institute: input.institute,
  };
};

export const deleteDegree = (index, array) => {
  array.splice(index, 1);

  return {
    newList: array,
  };
};

export const addNewSkill = ({ skill, rating }) => {
  let r = 0;
  if (rating > 100) r = 100;
  else if (rating > 0) r = rating;
  return {
    newSkill: [skill, r],
  };
};

export const deleteSkill = (index, array) => {
  array.splice(index, 1);

  return {
    newList: array,
  };
};
