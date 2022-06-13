import Link from "next/link";

export function rectangleBlock({ projectName, language, description, sourceLink }) {
    return (
      <div className="md:w-full md:h-auto p-7 shadow-md hover:scale-110 transition">
        <h1 className="font-bold text-2xl mb-1">{projectName}</h1>
        <span className="text-xsmall">
          <em>{language}</em>
        </span>
        <p className="text-xsmall my-5">{description}</p>
        <Link href={sourceLink}>
          <a className="text-xsmall flex items-center group">
            <span className="mr-2 group-hover:text-xgrey">source code</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 509 511.54"
              width="12"
              height="12"
              className="group-hover:fill-xgrey"
            >
              <path d="M447.19 347.03c0-17.06 13.85-30.91 30.91-30.91 17.05 0 30.9 13.85 30.9 30.91v87.82c0 21.08-8.63 40.29-22.51 54.18-13.88 13.88-33.09 22.51-54.18 22.51H76.69c-21.09 0-40.3-8.63-54.18-22.51C8.63 475.14 0 455.93 0 434.85V76.69c0-21.09 8.63-40.3 22.51-54.18C36.39 8.63 55.6 0 76.69 0h86.98c17.06 0 30.9 13.85 30.9 30.9 0 17.06-13.84 30.91-30.9 30.91H76.69c-4.07 0-7.82 1.69-10.51 4.37-2.68 2.69-4.37 6.44-4.37 10.51v358.16c0 4.06 1.69 7.82 4.37 10.5 2.69 2.68 6.44 4.38 10.51 4.38h355.62c4.07 0 7.82-1.7 10.51-4.38 2.68-2.68 4.37-6.44 4.37-10.5v-87.82zm0-243.56L308.15 244.28c-11.91 12.12-31.45 12.28-43.56.37-12.11-11.91-12.28-31.45-.37-43.56L401.77 61.81H309.7c-17.06 0-30.9-13.85-30.9-30.91 0-17.05 13.84-30.9 30.9-30.9h168.4C495.15 0 509 13.85 509 30.9v165.04c0 17.06-13.85 30.9-30.9 30.9-17.06 0-30.91-13.84-30.91-30.9v-92.47z"></path>
            </svg>
          </a>
        </Link>
      </div>
    );
  }