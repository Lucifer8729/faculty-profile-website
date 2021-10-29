import { uuid } from "uuidv4";

export const addNewCourse = (input) => {
  return {
    id: `${uuid()}`,
    title: input.courseName,
    units: 5,
    materials: 0,
    img: input.image,
  };
};

export const deleteCourse = (index, array) => {
  array.splice(index, 1);

  return {
    newList: array,
  };
};
