import * as api from "../../api/index";

export const fetchPublications = async () => {
  const { data } = await api.fetchPublication();
  console.log(data);
  return data;
};

export const addNewPublication = async (input, date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const time = new Date(date);
  const timeInWords = `${monthNames[time.getMonth()]} ${time.getFullYear()}`;

  const authors = input.authors.split(", ");

  const form = {
    title: input.title,
    date: timeInWords,
    location: input.location,
    description: input.description,
    authors: authors,
    viewLink: input.viewLink,
    downloadLink: input.downloadLink,
  };

  const { data } = await api.addNewPublication(form);

  return {
    title: data.title,
    date: data.date,
    location: data.location,
    description: data.description,
    authors: data.authors,
    viewLink: data.viewLink,
    downloadLink: data.downloadLink,
  };
};

export const deletePublication = async (index, array) => {
  array.splice(index, 1);

  const { data } = await api.deletePublication(array);

  return {
    newList: data,
  };
};
