import { socials } from "../data/data";

const Footer = () => {
  return (
    <footer className="footer mt-auto pl-3 pb-8 dark:text-gray-300  text-[#0a192f] z-10">
      <small className="copy">
        &copy; {new Date().getFullYear()} by{" "}
        <span className="font-bold">elias</span>
      </small>
      <div className="socials xl:hidden">
        <ul className="social-links pr-4">
          {socials.map((social) => {
            const { id, icon, url } = social;
            return (
              <li key={id}>
                <a href={url} className="hover:text-white">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
