import * as api from "../../api/index";

export const fetchProfile = async () => {
  const { data } = await api.fetchProfile();
  console.log(data);
  return data[0];
};

export const editAboutMe = async (input) => {
  const { data } = await api.updateProfileAbout(input);
  return {
    header: data.header,
    quote: data.quote,
    detail: data.detail,
    _id: data._id,
  };
};

export const addNewDegree = async (input, from, to) => {
  const startDate = new Date(from);
  const endDate = new Date(to);
  const yearRange = `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
  const form = {
    degree: input.degree,
    year: yearRange,
    institute: input.institute,
  };

  const { data } = await api.addEducation(form);

  return {
    newList: data,
  };
};

export const deleteDegree = async (index, array) => {
  array.splice(index, 1);
  const { data } = await api.deleteEducation(array);

  return {
    newList: data,
  };
};

export const addNewSkill = async ({ skill, rating }) => {
  let r = 0;

  if (rating > 100) r = 100;
  else if (rating > 0) r = rating;

  const form = {
    name: skill,
    score: r,
  };

  const { data } = await api.addNewSkill(form);

  return {
    newList: data,
  };
};

export const deleteSkill = async (index, array) => {
  array.splice(index, 1);

  const { data } = await api.deleteSkill(array);

  return {
    newList: data,
  };
};
