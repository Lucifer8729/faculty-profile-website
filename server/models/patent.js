import mongoose from "mongoose";

const patentSchema = mongoose.Schema({
  PatentList: {
    type: [
      {
        title: String,
        date: String,
        month: Number,
        year: Number,
        location: String,
        viewLink: String,
        downloadLink: String,
      },
    ],
    default: [
      {
        title:
          "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
        date: "October 2021",
        month: 9,
        year: 2021,
        location: "Springer, Singapore (Scopus Indexed)",
        viewLink: "#",
        downloadLink: "#",
      },
      {
        title:
          "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
        date: "October 2021",
        month: 9,
        year: 2021,
        location: "Springer, Singapore (Scopus Indexed)",
        viewLink: "#",
        downloadLink: "#",
      },
      {
        title:
          "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
        date: "October 2021",
        month: 9,
        year: 2021,
        location: "Springer, Singapore (Scopus Indexed)",
        viewLink: "#",
        downloadLink: "#",
      },
      {
        title:
          "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
        date: "October 2021",
        month: 9,
        year: 2021,
        location: "Springer, Singapore (Scopus Indexed)",
        viewLink: "#",
        downloadLink: "#",
      },
    ],
  },
});

const Patent = mongoose.model("Patent", patentSchema);

export default Patent;
