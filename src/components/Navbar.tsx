import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideBarBSMobile from "../bootstrap-ui-kit/components/UI/Sidebar/SideBarBSMobile";
import SearchIcon from "../assets/svg/Navbar Icons/Blue search.svg";
import HelpIcon from "../assets/svg/Navbar Icons/Help center.svg";
import NotificationIcon from "../assets/svg/Navbar Icons/Notification.svg";
import AvatarIcon from "../assets/svg/Navbar Icons/Profile picture.svg";
import PlusIcon from "../assets/svg/Navbar Icons/White plus.svg";
//import CreateBusiness from "../screens/user-profile/CreateBusiness";
import BreadCrumbs from "./BreadCrumbs";
import DropDownMenuMobile from "./DropDownMenuMobile";
import DropDownMenu from "./DropDownMenu";
interface Business {
  _id: string;
  generalInformation: {
    businessName: string;
  };
}

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [businesses, setBusinesses] = useState<Business[]>([]); // Provide type information for useState

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://backend-b.cinqd.com/setup/get-my-businesses/${userState.user?._id}`,
  //         {
  //           headers: {
  //             "auth-token": userState.token,
  //           },
  //         }
  //       );
  //       setBusinesses(response.data.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setIsLoading(false);
  //     }
  //   };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSignout = () => {
    //	dispatch(actions.resetState());
    navigate("/auth/signin-with-email", { relative: "route" });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-md bg-white py-2 ps-4 ps-md-0 pe-5 z-1"
        style={{ height: "72px" }}
      >
        <Link className="navbar-brand" to={"/business/business-profile"}>
          <img
            src={
              "https://media.licdn.com/dms/image/C4E0BAQEZn2nwHP2xMQ/company-logo_200_200/0/1678898035938?e=2147483647&v=beta&t=L8D37J-xaL1_5obEVghhUdwQuiMfJbEEYruLhr0WdDE"
            }
            alt="Profile"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          />
        </Link>
        <BreadCrumbs />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-body p-0">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div
                className="d-flex align-items-center gap-4 justify-content-between p-3"
                role="search"
              >
                <div
                  className="input-group overflow-hidden border d-none d-md-flex"
                  style={{
                    borderRadius: "8px",
                    background: " #F5F5F5",
                    padding: "2px 0px",
                    color: "#4F4F4F",
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letterSpacing: "0.1px",
                    maxWidth: "300px",
                  }}
                >
                  <span
                    className="input-group-text border-0 pe-1"
                    id="basic-addon1"
                  >
                    <img src={SearchIcon} alt="search" />
                  </span>
                  <input
                    type="search"
                    className="form-control hide-focus border-0 bg-transparent p-0 ms-1 d-none d-md-block"
                    style={{ fontSize: "18px" }}
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <button
                  style={{
                    borderRadius: "8px",
                    background: "transparent",
                    border: "0px",
                  }}
                >
                  <img
                    src={PlusIcon}
                    alt="add"
                    style={{
                      width: "fit-content",
                      maxWidth: "36px",
                      height: "fit-content",
                      maxHeight: "36px",
                      padding: "6px",
                      borderRadius: "8px",
                      gap: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#228DFF",
                    }}
                  />
                </button>
                <img src={HelpIcon} alt="help" />
                <img src={NotificationIcon} alt="notification" />

                <DropDownMenu
                  businesses={businesses}
                  handleSignout={handleSignout}
                  mainAvatar={AvatarIcon}
                  openModal={openModal}
                  secondaryAvatar={AvatarIcon}
                  userState={undefined}
                />
                <DropDownMenuMobile
                  businesses={businesses}
                  handleSignout={handleSignout}
                  mainAvatar={AvatarIcon}
                  openModal={openModal}
                  secondaryAvatar={AvatarIcon}
                  userState={undefined}
                />
              </div>
              <hr
                className="dropdown-divider d-block d-md-none mt-3"
                style={{ background: "#E0E0E0", height: "1px" }}
              />
              <SideBarBSMobile />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
