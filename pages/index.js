import Head from "next/head";
import Image from "next/image";

const skillsCard = [
  {
    skillLogo: "https://img.icons8.com/ios-filled/500/undefined/html-5--v2.png",
    skillName: "html5",
  },
  {
    skillLogo: "https://img.icons8.com/ios-filled/500/undefined/css3.png",
    skillName: "css3",
  },
  {
    skillLogo: "https://img.icons8.com/ios-filled/500/undefined/javascript.png",
    skillName: "javascript",
  },
  {
    skillLogo:
      "https://img.icons8.com/ios-filled/500/undefined/react-native.png",
    skillName: "react js",
  },
  {
    skillLogo: "https://img.icons8.com/color/500/undefined/nextjs.png",
    skillName: "next js",
  },
  {
    skillLogo: "https://img.icons8.com/color/500/undefined/nextjs.png",
    skillName: "next js",
  },
  {
    skillLogo: "https://img.icons8.com/color/500/undefined/nextjs.png",
    skillName: "next js",
  },
  {
    skillLogo: "https://img.icons8.com/color/500/undefined/nextjs.png",
    skillName: "next js",
  },
  {
    skillLogo: "https://img.icons8.com/color/500/undefined/nextjs.png",
    skillName: "next js",
  },
  {
    skillLogo: "https://img.icons8.com/color/500/undefined/nextjs.png",
    skillName: "next js",
  },
];

const projectsCard = [
  {
    projectName: "calisthenxs",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "",
  },
  {
    projectName: "calisthenxs",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "",
  },
  {
    projectName: "calisthenxs",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "",
  },
  {
    projectName: "calisthenxs",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "",
  },
];

function squareBlock({ skillLogo, skillName }) {
  return (
    <div className="md:w-full md:h-auto p-7 flex flex-col justify-between shadow-md">
      <div>
        <img
          src={skillLogo}
          width="80%"
          height="80%"
          alt=""
          className="block mx-auto mb-3"
        />
      </div>
      <span className="text-center  md:text-lg">{skillName}</span>
    </div>
  );
}

function rectangleBlock({ projectName, language, description, sourceLink }) {
  return (
    <div className="md:w-full md:h-auto p-7 shadow-md">
      <h1 className="font-bold text-2xl mb-1">{projectName}</h1>
      <span className="text-xsmall">
        <em>{language}</em>
      </span>
      <p className="text-xsmall my-5">{description}</p>
      <a href={sourceLink} className="text-xsmall underline">
        source code
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="flex relative font-poppins max-w-[144rem]">
        {/* left part of home */}
        <div className="py-10 md:fixed px-20 flex flex-col justify-between w-full md:h-screen md:max-w-[50%]">
          <div>
            <h1 className="md:text-[6vw] font-bold break-words mb-5 leading-tight">
              bhupendra thapa
            </h1>
            <p className="mb-12 break-words text-sm md:text-xsmall text-xgrey">
              I build open-source front-end libraries at Algolia and host the
              Developer Experience podcast. I can't shut up about test-driven
              development and utility-first CSS. I also share what I learn on my
              blog and in conferences around the world.
            </p>
            <ul className="text-xgrey">
              <li>
                <a href="/#skills" className="inline-flex items-center group">
                  <div className="hoverExpand"></div>
                  <span className="text-sm md:text-xsmall group-hover:text-xdark">skills & tools</span>
                </a>
              </li>
              <li className="my-6">
                <a href="/#projects" className="inline-flex items-center group">
                  <div className="hoverExpand"></div>
                  <span className="text-sm md:text-xsmall group-hover:text-xdark">projects</span>
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center group">
                  <div className="hoverExpand"></div>
                  <span className="text-sm md:text-xsmall group-hover:text-xdark">contact Me</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between">
            <div>
              <img src="#" alt="" />
            </div>
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/ios-glyphs/90/undefined/github.png"
                alt=""
                width="21px"
              />
              <span className="text-sm md:text-xsmall ml-1">github</span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/ios-glyphs/90/undefined/linkedin-circled--v1.png"
                alt=""
                width="21px"
              />
              <span className="text-sm md:text-xsmall ml-1">linkedin</span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/ios-filled/90/undefined/telegram-app.png"
                alt=""
                width="18px"
              />
              <span className="text-sm md:text-xsmall ml-1">telegram</span>
            </div>
          </div>
        </div>

        {/* right part of home */}
        <div className="w-full md:max-w-[50%] py-10 pr-20 md:absolute md:top-0 md:right-0">
          <div id="skills" className="skills">
            <h1 className="md:hidden">skills</h1>
            <div className="grid grid-cols-3 gap-2">
              {skillsCard.map(squareBlock)}
            </div>
          </div>
          <div id="projects" className="projects mt-20">
            <h1 className="md:hidden">projects</h1>
            <div className="grid grid-cols-1 gap-2">
              {projectsCard.map(rectangleBlock)}
            </div>
          </div>
          <div className="p-7 mt-7">
            <p className="text-xsmall">design by <span className="text-xgrey">bhupendra thapa</span> | next.js</p>
          </div>
        </div>
      </main>
    </>
  );
}
