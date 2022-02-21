import Patent from "../models/patent.js";

export const getPatents = async (req, res) => {
  try {
    const patentData = await Patent.findOne({});
    console.log(patentData);
    res.status(200).json(patentData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addNewPatent = async (req, res) => {
  const newData = req.body;
  try {
    const patentData = await Patent.findOne({});
    patentData.PatentList.unshift(newData);
    await patentData.save();
    res.status(200).json(patentData.PatentList[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePatent = async (req, res) => {
  const newData = req.body;

  try {
    const patentData = await Patent.findOne({});
    patentData.PatentList = newData;
    await patentData.save();
    res.status(200).json(patentData.PatentList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
