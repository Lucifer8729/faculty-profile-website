export const addActiveClassInLinks = (from) => {
  const html = `<div class="arrow-down-links"></div>`;
  document.querySelector(`.${from}-link`).innerHTML = html;
};

export const removeActiveClassInLinks = (from) => {
  document.querySelector(`.${from}-link`).innerHTML = "";
  //   console.log(div);
};
