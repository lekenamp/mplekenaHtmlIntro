const firstName = "Matshediso";
const lastName = "Lekena";
const bio = "Hello! I'm a recent multimedia graduate with a passion for design and creativity. Throughout my studies, I developed skills in graphic design, video production, and web development. I am eager to apply my knowledge and gain hands-on experience in a dynamic and fast-paced environment through an internship opportunity. I have a strong attention to detail and a drive to create designs that not only look great, but also effectively communicate the intended message.I am also a team player and thrive in collaborative environments where I can contribute my skills and learn from others. I am excited about the opportunity to work in a professional setting and continue growing as a multimedia professional. If you have an internship opportunity available, I would love to hear more about it and see how I can contribute to your team.";



const projects = [
  {
    role: "Graphic Designer",
    company: "Minnie Ocassions, 2018",
    description: "Produced content for website and social media channels"
  },
  {
    role: "IT Intern",
    company: "Taletso TVET College Mahikeng Campus, 2022",
    description: "General IT Support"
  },
  {
    role: "Multimedia Designer Intern",
    company: "Softstart BTI, 2022",
    description: "Developing and designing systems"
  }
];
const education = [
  {
    degree: "National Diploma in Information Technology: Multimedia",
    institution: "Tshwane University of Technology",
    year: 2022
  },
  {
    degree: "3D Printing",
    institution: "Phumelela Consulting",
    year: 2022
  }
];
const email = "lekenamp@gmail.com";
const phone = "0662760077";

const nameElement = document.getElementById("name");
nameElement.innerText = `${firstName} ${lastName}`;

const bioElement = document.getElementById("bio");
bioElement.innerText = bio;

const educationListElement = document.getElementById("education-list");
education.forEach(edu => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${edu.degree}</strong> - ${edu.institution}, ${edu.year}`;
  educationListElement.appendChild(li);
});

const experienceListElement = document.getElementById("experience-list");
projects.forEach(project => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${project.role}</strong> - ${project.company} - ${project.description}`;
  experienceListElement.appendChild(li);
});
