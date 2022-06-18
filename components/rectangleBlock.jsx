export default function rectangleBlock({
  projectName,
  language,
  description,
  sourceLink,
  demoLink,
}) {
  return (
    <div className="group">
      <div className="md:w-full md:h-auto p-5 shadow-md hover:scale-110 group-hover:bg-xdark transition">
        <h1 className="font-bold text-2xl mb-1 group-hover:text-xwhite">
          {projectName}
        </h1>
        <span className="text-xsmall group-hover:text-xwhite">
          [ <em>{language}</em> ]
        </span>
        <p className="text-xsmall my-3.5 group-hover:text-xwhite">
          {description}
        </p>
        <div className="flex items-center">
          <a
            className="text-xsmall mr-2.5"
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className=" text-xdark group-hover:text-xwhite group-hover:underline">
              source code
            </span>
          </a>
          <a
            className="text-xsmall"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xdark group-hover:text-xwhite group-hover:underline">
              Live demo
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
