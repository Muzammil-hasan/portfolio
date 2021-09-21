export const projects = [
  {
    id: 1,
    name: "Blu South",
    imageLeft: "../../../dist/images/blusouth/blusouth-left.jpg",
    imageMain: "../../../dist/images/blusouth/blusouth-main.jpg",
    imageRight: "../../../dist/images/blusouth/blusouth-right.jpg",
    imageFull: "../../../dist/images/blusouth/blusouth.jpg",
    year: 2021,
    role: "Front-end & Back-end",
    siteLink: "https://muzam.ml/",
  },
  {
    id: 2,
    name: "Spring Field",
    imageLeft: "../../../dist/images/springfield/springfield-left.jpg",
    imageMain: "../../../dist/images/springfield/springfield-main.jpg",
    imageRight: "../../../dist/images/springfield/springfield-right.jpg",
    imageFull: "../../../dist/images/springfield/springfield.jpg",
    year: 2020,
    role: "Front-end & Back-end",
    siteLink: "https://muzam.ml/",
  },
  {
    id: 3,
    name: "Loop studio",
    imageLeft: "../../../dist/images/springfield/springfield-left.jpg",
    imageMain: "../../../dist/images/springfield/springfield-main.jpg",
    imageRight: "../../../dist/images/springfield/springfield-right.jpg",
    imageFull: "../../../dist/images/springfield/springfield.jpg",
    year: 2020,
    role: "Front-end & Back-end",
    siteLink: "https://muzam.ml/",
  },
];

export function getProject(id) {
  for (const index in projects) {
    if (Object.hasOwnProperty.call(projects, index)) {
      const project = projects[index];

      if (project.id === parseInt(id)) {
        return project;
      }
    }
  }
}
