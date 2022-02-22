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

export const filterPatent = async (req, res) => {
  const { from, to } = req.body;
  try {
    if (from === "" || to === "") {
      return res.status(400).json({
        status: "failure",
        message: "Please ensure you pick two dates",
      });
    }
    console.log(req.body);
    const filteredData = await Patent.find({
      "PatentList[date]": {
        $gte: new Date(
          new Date(from).setHours(
            parseInt("00", 8),
            parseInt("00", 8),
            parseInt("00", 8)
          )
        ),
        $lt: new Date(
          new Date(to).setHours(
            parseInt("00", 8),
            parseInt("00", 8),
            parseInt("00", 8)
          )
        ),
      },
    });

    if (!filteredData[0])
      return res.status(400).json({ message: "No Documents found." });
    //console.log(filteredData[0].PatentList);
    res.status(200).json(filteredData[0].PatentList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
