import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchProfile = () => API.get("/profile");
export const updateProfileAbout = (form) =>
  API.patch("/profile/edit/about", form);
export const addEducation = (form) => API.post("/profile/add/education", form);
export const deleteEducation = async (form) =>
  API.patch(`/profile/delete/education`, form);
export const addNewSkill = (form) => API.post("/profile/add/skill", form);
export const deleteSkill = (form) => API.patch("/profile/delete/skill", form);
