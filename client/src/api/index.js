import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

//API calls for PROFILEPAGE
export const fetchProfile = () => API.get("/profile");
export const updateProfileAbout = (form) =>
  API.patch("/profile/edit/about", form);
export const addEducation = (form) => API.post("/profile/add/education", form);
export const deleteEducation = async (form) =>
  API.patch(`/profile/delete/education`, form);
export const addNewSkill = (form) => API.post("/profile/add/skill", form);
export const deleteSkill = (form) => API.patch("/profile/delete/skill", form);

//API calls for PUBLICATIONPAGE
export const fetchPublication = () => API.get("/publication");
export const addNewPublication = (form) => API.post("/publication/add", form);
export const deletePublication = (form) =>
  API.post("/publication/delete", form);

//API calls for PATENTPAGE
export const fetchPatent = () => API.get("/patent");
export const addNewPatent = (form) => API.post("/patent/add", form);
export const deletePatent = (form) => API.post("/patent/delete", form);
export const filterPatent = (form) => API.post("/patent/filter", form);
