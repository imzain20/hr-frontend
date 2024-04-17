import { Link, useNavigate } from "react-router-dom";
// import { useUserStateActions } from "../redux/userSlice";
interface Business {
  _id: string;
  generalInformation: {
    businessName: string;
  };
}
interface Props {
  mainAvatar: string;
  secondaryAvatar: string;
  userState: any;
  businesses: Business[];
  handleSignout: () => void;
}

const DropDownMenuMobile = ({
  mainAvatar,
  secondaryAvatar,
  userState,
  businesses,
  handleSignout,
}: Props) => {
  const navigate = useNavigate();
  //   const userStateData = useUserStateActions();

  return (
    <div className="dropdown position-static d-md-none">
      <img
        src={mainAvatar}
        alt="profile pic"
        style={{ cursor: "pointer" }}
        data-bs-toggle="dropdown"
        className="dropdown-toggle"
        role="button"
        width={80}
        height={80}
      />

      <ul
        className="dropdown-menu h-75 mt-0 w-100"
        style={{
          boxShadow: "-5px -5px 10px -5px #0000000A",
          borderRadius: "8px",
          border: "none",
          padding: "28px 24px",
          top: "16.5%",
        }}
      >
        <li className="d-flex gap-2 mb-2">
          <img src={secondaryAvatar} alt="user" />
          <div className="d-flex flex-column">
            <span
              style={{
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "16px",
              }}
            >
              {userState?.user?.userName}
            </span>
            <span>{userState?.user?.Email}</span>
          </div>
        </li>
        <li>
          <hr
            className="dropdown-divider"
            style={{ background: "#E0E0E0", height: "1px" }}
          />
        </li>

        <li>
          {businesses.map((business) => (
            <div
              className="form-check"
              key={business._id}
              onClick={() => {
                // userStateData.setBusiness(business);
                navigate("/business/business-profile");
              }}
            >
              <input
                className="form-check-input me-2"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {business?.generalInformation?.businessName}
              </label>
            </div>
          ))}
        </li>
        <li className="mt-2">
          <hr
            className="dropdown-divider my-0"
            style={{ background: "#E0E0E0", height: "1px" }}
          />
        </li>
        <Link to={"/user"}>
          <li className="d-flex py-3 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#BDBDBD"
              className="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
            <span
              className="ms-3"
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#828282",
              }}
            >
              Profile Settings
            </span>
          </li>
        </Link>
        <li>
          <hr
            className="dropdown-divider my-0"
            style={{ background: "#E0E0E0", height: "1px" }}
          />
        </li>
        <li className="d-flex py-2 align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#828282"
            className="bi bi-box-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
            />
          </svg>
          <button
            className="ms-3"
            style={{
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#828282",
              backgroundColor: "transparent",
            }}
            onClick={handleSignout}
          >
            Sign Out{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default DropDownMenuMobile;
