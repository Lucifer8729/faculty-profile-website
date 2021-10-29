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

export const editCourse = (input, index, array) => {
  if (input.courseName) array[index].title = input.courseName;
  if (input.image) array[index].img = input.image;

  return {
    newList: array,
  };
};
