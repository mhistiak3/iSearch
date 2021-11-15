import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../Context/ResultContext";
import Loading from "./Loading";

const Result = () => {
  const {
    results: { results, image_results, entries: news },
    isLoading,
    getResults,
    searchTerm,
  } = useResultContext();
  const locaion = useLocation();

  // Call Result Function
  useEffect(() => {
    if (searchTerm) {
     getResults(`${locaion.pathname}/q=${searchTerm}&num=20`);
    }
  
  }, [searchTerm, locaion.pathname]);

  if (isLoading) {
    return <Loading />;
  }
  switch (locaion.pathname) {
    case "/search":
      return (
        <div className="mt-10 flex flex-wrap justify-between space-y-6 md:px-56 px-10">
          {results && results.length > 0 ? (
            results.map(({ link, title, description }, index) => (
              <div
                key={index}
                className={`lg:w-2/5 w-full ${
                  link === "https://ia-coder.com/"
                    ? "p-5 bg-indigo-400 text-white rounded"
                    : ""
                }`}
              >
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 cursor-pointer">
                    {title}
                  </p>
                </a>
                <p>
                  {description.length > 80
                    ? description.substring(0, 80) + "..."
                    : description}
                </p>
              </div>
            ))
          ) : (
            <h1 className="text-center text-xl">No Result Found</h1>
          )}
        </div>
      );
    case "/images":
      return (
        <div className="flex justify-center items-center flex-wrap">
          {image_results?.map(({ image, link: { href, title } }, index) => (
            <a
              href={href}
              className="p-3"
              key={index}
              target="_blank"
              rel="noreferrer"
            >
              <img src={image?.src} alt={title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{title}</p>
            </a>
          ))}
        </div>
      );

    case "/news":
      return (
        <div className="mt-10 flex flex-wrap justify-between space-y-6 md:px-56 px-10 items-center">
          {news.length > 0 ? (
            news.map(({ links, id, source, title }) => (
              <div key={id} className="lg:w-2/5 w-full bg-gray-200 p-5 rounded">
                <p className="text-gray-600">
                  <img
                    src={`https://s2.googleusercontent.com/s2/favicons?domain=${source?.title}`}
                    alt=""
                    className="inline"
                  />{" "}
                  {source?.title}
                </p>
                <a
                  href={links?.[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <p className="text-lg dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferrer">
                    {source?.href}
                  </a>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center py-5 text-2xl">NO News Found</h1>
          )}
        </div>
      );
    default:
      return (
        <div className="w-full flex justify-center items-center">
          <img
            src="https://i1.wp.com/saedx.com/blog/wp-content/uploads/2019/01/saedx-blog-featured-70.jpg?fit=1200%2C500&ssl=1"
            alt=""
          />
        </div>
      );
  }
};

export default Result;
