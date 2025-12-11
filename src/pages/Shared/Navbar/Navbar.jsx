import { Link } from "react-router";
import Logo from "../../../components/Logo/Logo";
import LinkItems from "../common/LinkItems";
import Button from "../../../components/common/Button";
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="py-4 sm:py-8">
      <div className="navbar bg-white shadow-sm rounded-xl py-3 px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0! me-3 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <LinkItems></LinkItems>
            </ul>
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <LinkItems></LinkItems>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <Link to="/auth/signin">
            <Button className="btn-secondary btn-outline border-base-200 text-base-200 hover:text-white">
              Signin
            </Button>
          </Link>
          <Link to="/be-a-rider" className="flex items-center group">
            <Button>Be a rider</Button>
            <Button className="btn-secondary border-base-100 text-primary w-10 h-10 rounded-full! flex justify-center items-center">
              <span>
                <FaArrowUp
                  size={16}
                  className="rotate-45 group-hover:rotate-90 transition-all duration-300"
                />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
