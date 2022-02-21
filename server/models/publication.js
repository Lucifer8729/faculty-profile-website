import mongoose from "mongoose";

const publicationSchema = mongoose.Schema({
  PublicationList: {
    type: [
      {
        title: String,
        date: String,
        location: String,
        description: String,
        authors: Array,
        viewLink: String,
        downloadLink: String,
      },
    ],
    default: [
      {
        title:
          "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
        date: "February 2020",
        location: "Springer, Singapore (Scopus Indexed)",
        description:
          "Artificial Intelligence and Evolutionary Computations in Engineering Systems. Advances in Intelligent Systems and Computing,  vol. 1056, ISBN: 978-981-15-0199-9.",
        authors: ["S.Kaliraj", "D.Vivek", "M. Uma", "P. Balasubramanie"],
        viewLink: "#",
        downloadLink: "#",
      },
      {
        title:
          "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
        date: "February 2020",
        location: "Springer, Singapore (Scopus Indexed)",
        description:
          "Artificial Intelligence and Evolutionary Computations in Engineering Systems. Advances in Intelligent Systems and Computing,  vol. 1056, ISBN: 978-981-15-0199-9.",
        authors: ["S.Kaliraj", "D.Vivek", "M. Uma", "P. Balasubramanie"],
        viewLink: "#",
        downloadLink: "#",
      },
      {
        title:
          "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
        date: "February 2020",
        location: "Springer, Singapore (Scopus Indexed)",
        description:
          "Artificial Intelligence and Evolutionary Computations in Engineering Systems. Advances in Intelligent Systems and Computing,  vol. 1056, ISBN: 978-981-15-0199-9.",
        authors: ["S.Kaliraj", "D.Vivek", "M. Uma", "P. Balasubramanie"],
        viewLink: "#",
        downloadLink: "#",
      },
      {
        title:
          "An Intelligent System for Appraisal of Heart Infirmity to Rescue Future Generation",
        date: "February 2020",
        location: "Springer, Singapore (Scopus Indexed)",
        description:
          "Artificial Intelligence and Evolutionary Computations in Engineering Systems. Advances in Intelligent Systems and Computing,  vol. 1056, ISBN: 978-981-15-0199-9.",
        authors: ["S.Kaliraj", "D.Vivek", "M. Uma", "P. Balasubramanie"],
        viewLink: "#",
        downloadLink: "#",
      },
    ],
  },
});

const Publication = mongoose.model("Publication", publicationSchema);

export default Publication;
