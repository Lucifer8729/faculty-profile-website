export const addNewPatent = (input, date) => {
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

  return {
    title: input.title,
    date: timeInWords,
    month: time.getMonth(),
    year: time.getFullYear(),
    location: input.location,
    viewLink: input.viewLink,
    downloadLink: input.downloadLink,
  };
};

export const deletePatent = (index, array) => {
  array.splice(index, 1);

  return {
    newList: array,
  };
};
