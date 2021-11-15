import { NavLink } from "react-router-dom";

const Links = () => {
  const links = [
    { url: "/search", text: "🔎 All" },
    { url: "/images", text: "📷 Images" },
    { url: "/news", text: "📰 News" },
  ];
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4 w-full">
      {links.map(({ url, text },index) => (
        <NavLink
        key={index}
          to={url}
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
        >
          {text}
        </NavLink>
      ))}
      <a href="https://www.youtube.com/results?search_query=php" target='_blank'>🎥 Videos</a>
    </div>
  );
};

export default Links;
