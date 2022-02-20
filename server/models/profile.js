import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  AboutMe: {
    type: {
      header: String,
      quote: String,
      detail: String,
    },
    default: {
      header: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut sagittis mollis.`,
      quote: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus.`,
      detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra neque tellus, quis viverra nulla semper vitae. Phasellus feugiat arcu ut sagittis mollis Etiam viverra, eros in venenatis eleifend, tortor purus fringilla orci, in pulvinar lectus sem vel ligula. In elementum id ipsum vel scelerisque.`,
    },
  },
  Education: {
    type: [
      {
        degree: String,
        year: String,
        institute: String,
      },
    ],
    default: [
      {
        degree: "Master of Engineering (M.E) in Software Engineering",
        year: "2011 - 2013",
        institute:
          "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
      },
      {
        degree: "Master of Engineering (M.E) in Software Engineering",
        year: "2011 - 2013",
        institute:
          "Bannari Amman Institute of Technology (BIT) - Sathy. Anna University, Tamil Nade, India",
      },
    ],
  },
  SkillList: {
    type: [
      {
        name: String,
        score: String,
      },
    ],
    default: [
      {
        name: "HTML/CSS",
        score: "80",
      },
      {
        name: "C/C++",
        score: "90",
      },
      {
        name: "JavaScript",
        score: "95",
      },
      {
        name: "Python",
        score: "70",
      },
    ],
  },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
