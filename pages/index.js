import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
    sourceLink: "adasdasd",
  },
  {
    projectName: "calisthenxs",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "adasdasd",
  },
  {
    projectName: "calisthenxs",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "adasdasd",
  },
  {
    projectName: "calisthenxs",
    language: "html5, css3, javascript, reactjs, nodejs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste saepe rerum minus voluptate. Velit nulla nisi harum, rerum in ipsum?",
    sourceLink: "adasdasd",
  },
];

function squareBlock({ skillLogo, skillName }) {
  return (
    <div className="md:w-full md:h-auto p-4 md:p-7 flex flex-col justify-between shadow-md hover:scale-110 transition">
      <div>
        <img
          src={skillLogo}
          width="80%"
          height="80%"
          alt=""
          className="block mx-auto mb-3"
        />
      </div>
      <span className="text-center text-sm lg:text-lg">{skillName}</span>
    </div>
  );
}

function rectangleBlock({ projectName, language, description, sourceLink }) {
  return (
    <div className="md:w-full md:h-auto p-7 shadow-md hover:scale-110 transition">
      <h1 className="font-bold text-2xl mb-1">{projectName}</h1>
      <span className="text-xsmall">
        <em>{language}</em>
      </span>
      <p className="text-xsmall my-5">{description}</p>
      <Link href={sourceLink}>
        <a className="text-xsmall underline">source code</a>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhupendra Thapa</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Bhupendra Thapa" />
        <meta property="og:site_name" content="Bhupendra Thapa" />
        <link rel="canonical" href="/" />
        <meta property="og:url" content="/" />
      </Head>

      <main className="flex relative font-poppins flex-col md:flex-row">
        {/* left part of home */}
        <div className="p-5 lg:py-14 lg:pb-5 md:fixed lg:px-20 flex flex-col justify-between w-full md:h-screen md:max-w-[50%]">
          <div>
            <h1 className="text-[12vw] md:text-[6vw] font-bold break-words mb-7 leading-tight">
              bhupendra thapa
            </h1>
            <p className="mb-12 break-words text-sm md:text-xsmall text-xgrey">
              I build open-source front-end libraries at Algolia and host the
              Developer Experience podcast. I can't shut up about test-driven
              development and utility-first CSS. I also share what I learn on my
              blog and in conferences around the world.
            </p>
            <ul className="text-xgrey hidden md:block">
              <li>
                <Link href="/#skills">
                  <a className="inline-flex items-center group">
                    <div className="hoverExpand xtransition"></div>
                    <span className="text-sm md:text-xsmall group-hover:text-xdark">
                      skills & tools
                    </span>
                  </a>
                </Link>
              </li>
              <li className="my-6">
                <Link href="/#projects">
                  <a className="inline-flex items-center group">
                    <div className="hoverExpand xtransition"></div>
                    <span className="text-sm md:text-xsmall group-hover:text-xdark">
                      projects
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/example">
                  <a className="inline-flex items-center group">
                    <div className="hoverExpand xtransition"></div>
                    <span className="text-sm md:text-xsmall group-hover:text-xdark">
                      contact Me
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="mb-5 mr-7">
              <Image
                className="rounded-full"
                src="/images/author.jpg"
                width={50}
                height={50}
              />
            </div>
            <ul className="flex flex-wrap">
              <li className="mr-7 mb-4">
                <Link href="/example">
                  <a className="flex">
                    <img
                      src="https://img.icons8.com/ios-glyphs/90/undefined/github.png"
                      alt=""
                      width="21px"
                    />
                    <span className="text-sm md:text-xsmall ml-1">github</span>
                  </a>
                </Link>
              </li>
              <li className="mr-7 mb-4">
                <Link href="/example">
                  <a className="flex">
                    <img
                      src="https://img.icons8.com/ios-glyphs/90/undefined/linkedin-circled--v1.png"
                      alt=""
                      width="21px"
                    />
                    <span className="text-sm md:text-xsmall ml-1">
                      linkedin
                    </span>
                  </a>
                </Link>
              </li>
              <li className="mr-7 mb-4">
                <Link href="/example">
                  <a className="flex">
                    <img
                      src="https://img.icons8.com/ios-filled/90/undefined/telegram-app.png"
                      alt=""
                      width="18px"
                    />
                    <span className="text-sm md:text-xsmall ml-1">
                      telegram
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* right part of home */}
        <div className="w-full md:max-w-[50%] p-5 lg:py-14 lg:pr-20 md:absolute md:top-0 md:right-0">
          <div id="skills" className="skills">
            <h1 className="md:hidden font-bold text-xl mb-4">skills</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
              {skillsCard.map(squareBlock)}
            </div>
          </div>
          <div id="projects" className="projects mt-14">
            <h1 className="md:hidden font-bold text-xl mb-4">projects</h1>
            <div className="grid grid-cols-1 gap-2">
              {projectsCard.map(rectangleBlock)}
            </div>
          </div>
          <div className="p-7 mt-7">
            <p className="text-xsmall">
              design by <span className="text-xgrey">bhupendra thapa</span> |
              next.js
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
