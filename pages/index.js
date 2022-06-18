import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import squareBlock from "../components/squareBlock";
import rectangleBlock from "../components/rectangleBlock";

import skillsCard from "../data/skillsCard"
import projectsCard from "../data/projectsCard"

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhupendra Thapa</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bhupendra Thapa" />
        <meta property="og:site_name" content="Bhupendra Thapa" />
        <link rel="canonical" href="/" />
        <meta property="og:url" content="/" />
      </Head>

      <main className="flex relative font-poppins flex-col md:flex-row">


        {/* left part of home */}

        <div className="p-5 lg:py-14 lg:pb-5 md:fixed lg:px-20 flex flex-col justify-between w-full md:h-screen md:max-w-[50%]">
          <div>
            <Link href="/">
              <h1 className="text-[12vw] md:text-[6vw] font-bold break-words mb-7 leading-tight cursor-pointer">
                bhupendra thapa
              </h1>
            </Link>
            <p className="mb-12 break-words text-sm md:text-xsmall text-xgrey">
              I am a MERN stack developer with specialization in developing
              frontend web applications. I have experience in React JS. Along
              with that I am working on Next JS.
            </p>
            <ul className="text-xgrey mb-12 md:mb-0">
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
              <li className="my-5">
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
                <Link href="/#contact">
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
                <a className="flex" href="https://github.com/WhyRedX">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="23"
                    height="23"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                  <span className="text-sm md:text-xsmall ml-1">github</span>
                </a>
              </li>
              <li className="mr-7 mb-4">
                <a className="flex" href="https://www.linkedin.com/in/whyredx">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="23"
                    height="23"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
                  </svg>
                  <span className="text-sm md:text-xsmall ml-1">linkedin</span>
                </a>
              </li>
              <li className="mr-7 mb-4">
                <a className="flex" href="https://telegram.me/whyredx">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                  </svg>
                  <span className="text-sm md:text-xsmall ml-1">telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>



        {/* right part of home */}

        <div className="w-full md:max-w-[50%] p-5 lg:pt-0 lg:pb-14 lg:pr-20 md:absolute md:top-0 md:right-0 md:z-50">
          
          {/*square block*/}

          <div id="skills" className="skills lg:pt-14">
            <h1 className="md:hidden font-bold text-xl mb-4">skills</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-2">
              {skillsCard.map(squareBlock)}
            </div>
          </div>

          {/*rectangle block*/}

          <div id="projects" className="projects py-[5rem]">
            <h1 className="md:hidden font-bold text-xl mb-4">projects</h1>
            <div className="grid grid-cols-1 gap-2">
              {projectsCard.map(rectangleBlock)}
            </div>
          </div>

          {/*contact*/}

          <div id="contact" className="contact">
            <h1 className="md:hidden font-bold text-xl mb-4">get in touch</h1>
            <form>
              <div>
                <input
                  className="w-full focus:outline-none text-sm bg-gray-100 py-3 px-4"
                  type="text"
                  placeholder="name"
                  required
                />
              </div>
              <div className="my-6">
                <input
                  className="w-full focus:outline-none text-sm bg-gray-100 py-3 px-4"
                  type="email"
                  placeholder="email"
                  required
                />
              </div>
              <div className="mb-7">
                <textarea
                  className="w-full min-h-[10rem] focus:outline-none text-sm bg-gray-100 py-3 px-4"
                  placeholder="message"
                ></textarea>
              </div>
              <div>
                <input
                  className="bg-xdark text-sm text-xwhite py-3 px-4"
                  type="submit"
                  value="send message"
                />
              </div>
            </form>
          </div>


          {/*footer*/}
          <div className="mt-14 text-center md:text-start md:p-7">
            <p className="text-xsmall cursor-default">
              designed and developed by <span className="text-xgrey">bhupendra thapa</span> |
              next.js
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
