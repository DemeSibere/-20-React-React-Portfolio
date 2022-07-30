//import L_HTML5 from "../../src/assets/img/skills/html-5.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";

import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
//import L_GitHub from "../../assets/img/skills/netlify-icon.svg"
import L_MYSQL from "../../assets/img/skills/mysql-svgrepo-com.svg"
import L_NODEJS from "../../assets/img/skills/nodejs.svg"



export const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      
      
    ],
    frameworks:[
   
          {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
          },
          {
            link: "https://nodejs.org/en/",
            imgAltText: "nodejs",
            imgSrc: L_NODEJS,
            skillName: "Node js",
          },
          
    ],

    hostingPlatforms: [
   
      {
        link: "https://gitlab.com/pages",
        imgAltText: "GitLab Pages",
        //imgSrc: L_GitHub,
        skillName: "GitHub",
      },
      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
    
       {
         link: "https://www.heroku.com/",
        imgAltText: "Heroku",
         imgSrc: L_HEROKU,
         skillName: "Heroku",
      }
    ],
    databases: [
      {
        link: "https://mysql.com/",
        imgAltText: "MySql Database",
        imgSrc: L_MYSQL,
        skillName: "MySql Database",
      },
      
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: L_GIT,
        skillName: "GIT",
      },
    ],
  };