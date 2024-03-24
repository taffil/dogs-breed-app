import reactlogo from "../assets/icons/react.png";

const Footer = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-850 flex flex-col items-center justify-center mt-[215px] pb-4">
      <span className="flex flex-col items-center p-4">
        Find an issue with this page?{" "}
        <a
          href="https://github.com/taffil/dogs-breed-app"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Fix it on GitHub
        </a>
      </span>
      <span className="flex flex-col items-center">
        <p>Created by</p>
        <div className="flex flex-row items-center">
          <a
            href="https://github.com/taffil"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            taffil
          </a>
          <p className="px-1">with</p>
          <img src={reactlogo} alt="" className="w-[35px]" />
        </div>
      </span>
    </div>
  );
};

export default Footer;
