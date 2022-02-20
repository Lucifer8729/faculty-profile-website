import Profile from "../models/profile.js";

export const getProfile = async (req, res) => {
  try {
    const profileData = await Profile.find({});
    console.log(profileData);
    res.status(200).json(profileData);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfileAbout = async (req, res) => {
  const aboutData = req.body;
  try {
    const profileData = await Profile.findOne({});
    profileData.AboutMe = aboutData;
    await profileData.save();
    res.status(200).json(profileData.AboutMe);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};

export const addEducation = async (req, res) => {
  const educationData = req.body;
  try {
    const profileData = await Profile.findOne({});
    profileData.Education.unshift(educationData);
    await profileData.save();
    res.status(200).json(profileData.Education);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteEducation = async (req, res) => {
  const educationData = req.body;

  try {
    const profileData = await Profile.findOne({});
    profileData.Education = educationData;
    await profileData.save();
    res.status(200).json(profileData.Education);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};

export const addNewSkill = async (req, res) => {
  const skillData = req.body;
  try {
    const profileData = await Profile.findOne({});
    profileData.SkillList.push(skillData);
    await profileData.save();
    res.status(200).json(profileData.SkillList);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  const skillData = req.body;
  try {
    const profileData = await Profile.findOne({});
    profileData.SkillList = skillData;
    await profileData.save();
    res.status(200).json(profileData.SkillList);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};
