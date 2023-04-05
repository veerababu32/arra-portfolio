import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { RiVipDiamondLine } from "react-icons/ri";
import { BsPlay, BsQuestionLg } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Logo from "../assets/images/logo.svg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="mb-4">
          <div className="sidebar-img">
            <img src={Logo} alt="Arra Logo" className="w-100 h-100" />
          </div>
          <p className="m-0 text-center">Real Estate Digital Assets</p>
        </div>
        <div className="sidebar-links">
          <Link>
            <Badge className="py-2 mb-3 sidebar-badge active">
              <RiVipDiamondLine className="sidebar-icons sidebar-assets-icon" />
              All Assets
            </Badge>
          </Link>
          <Link to={"#topStories"}>
            <Badge className="py-2 mb-3 sidebar-badge">
              <HiOutlineSpeakerphone className="sidebar-icons" />
              Top Stories
            </Badge>
          </Link>
          <Link to={"#guides&tutorials"}>
            <Badge className="py-2 mb-3 sidebar-badge">
              <BsPlay className="sidebar-icons" />
              Guides & Tutorials
            </Badge>
          </Link>
          <Link to={"#help"}>
            <Badge className="py-2 mb-3 sidebar-badge">
              <BsQuestionLg className="sidebar-icons" />
              Help
            </Badge>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
