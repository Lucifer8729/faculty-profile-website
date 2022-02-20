import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchProfile = () => API.get("/profile");
export const updateProfileAbout = (form) =>
  API.patch("/profile/edit/about", form);
