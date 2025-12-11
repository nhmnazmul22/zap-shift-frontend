import LogoImg from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={LogoImg} alt="logo" />
      <p className="text-3xl font-semibold -ms-4 leading-7">ZapShift</p>
    </div>
  );
};

export default Logo;
