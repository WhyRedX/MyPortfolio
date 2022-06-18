export default function squareBlock({ skillLogo, skillName }) {
    return (
      <div className="group">
        <div className="md:w-full md:h-auto p-4 md:p-5 flex flex-col justify-between shadow-md hover:scale-110 transition group group-hover:bg-xdark">
          <div>{skillLogo}</div>
          <span className="text-center text-sm lg:text-lg group-hover:text-xwhite">
            {skillName}
          </span>
        </div>
      </div>
    );
  }