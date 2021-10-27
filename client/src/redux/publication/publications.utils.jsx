export const addNewPublication = (input, date) => {
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

  return {
    title: input.title,
    date: timeInWords,
    location: input.location,
    detail: input.detail,
    authors: authors,
    viewLink: input.viewLink,
    downloadLink: input.downloadLink,
  };
};

export const deletePublication = () => {};
