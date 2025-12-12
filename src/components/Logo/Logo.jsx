import { Link } from "react-router";
import LogoImg from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-end">
      <img src={LogoImg} alt="logo" />
      <p className="text-3xl font-semibold -ms-4 leading-7">ZapShift</p>
    </Link>
  );
};

export default Logo;
