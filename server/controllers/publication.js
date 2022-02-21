import Publication from "../models/publication.js";

export const getPublications = async (req, res) => {
  try {
    const publicationData = await Publication.findOne({});
    console.log(publicationData);
    res.status(200).json(publicationData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addNewPublication = async (req, res) => {
  const newData = req.body;
  try {
    const publicationData = await Publication.findOne({});
    publicationData.PublicationList.unshift(newData);
    await publicationData.save();
    res.status(200).json(publicationData.PublicationList[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePublication = async (req, res) => {
  const newData = req.body;

  try {
    const publicationData = await Publication.findOne({});
    publicationData.PublicationList = newData;
    await publicationData.save();
    res.status(200).json(profileData.PublicationList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
