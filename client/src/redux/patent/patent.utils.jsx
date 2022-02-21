import * as api from "../../api/index";

export const fetchPatents = async () => {
  const { data } = await api.fetchPatent();
  console.log(data);
  return data;
};

export const addNewPatent = async (input, date) => {
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

  const form = {
    title: input.title,
    date: timeInWords,
    month: time.getMonth(),
    year: time.getFullYear(),
    location: input.location,
    viewLink: input.viewLink,
    downloadLink: input.downloadLink,
  };

  const { data } = await api.addNewPatent(form);

  return {
    title: data.title,
    date: data.date,
    month: data.month,
    year: data.year,
    location: data.location,
    viewLink: data.viewLink,
    downloadLink: data.downloadLink,
  };
};

export const deletePatent = async (index, array) => {
  array.splice(index, 1);

  const { data } = await api.deletePatent(array);

  return {
    newList: data,
  };
};
