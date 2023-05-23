import { socials } from "../data/data";

type Props = {
  bgColor: string;
};

const Footer = ({ bgColor }: Props) => {
  return (
    <footer
      className={`footer mt-auto pl-3 pb-8 dark:text-gray-300 text-[#0a192f] w-full ${bgColor}`}
    >
      <small className="copy">
        &copy; {new Date().getFullYear()} by{" "}
        <span className="font-bold">elias</span>
      </small>
    </footer>
  );
};
export default Footer;
