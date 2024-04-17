import { Link, useLocation } from "react-router-dom";
import "./breadCrumb.css";

const BreadCrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((crumb) => crumb !== "");

  let accumulatedPath = "";
  const crumbs = pathSegments.map((crumb, index) => {
    accumulatedPath += `/${crumb}`;
    // Capitalize the first letter of the crumb
    const capitalizedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);
    if (index < pathSegments.length - 1) { // Check if it's not the last segment
      if (index <= 1) { // Only render up to the second link (0-based index)
        return (
          <li
            className="breadcrumb-item"
            aria-current={index === pathSegments.length - 1 ? "page" : undefined} // Specify undefined for non-page items
            key={crumb}
            style={{
              color: "#828282",
              fontFamily: "Roboto",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16px",
              letterSpacing: "0.1px",
              display: "inline", // Display inline
              // marginRight: "5px", // Add some space between breadcrumbs
            }}
          >
            <Link
              to={accumulatedPath}
              style={{
                color: "#828282",
                textDecoration: "none", // Remove underline for links
              }}
            >
              {capitalizedCrumb.replace("/", "")}
            </Link>
          </li>
        );
      }
    } else { // If it's the last segment
      return (
        <li
          className="breadcrumb-item"
          aria-current="page"
          key={crumb}
          style={{
            color: "rgba(0,0,0,0.3)",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.1px",
            display: "inline", // Display inline
            // marginRight: "5px", // Add some space between breadcrumbs
          }}
        >
          {capitalizedCrumb.replace("/", "")}
        </li>
      );
    }
    return null; // Return null for links beyond index 1
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="d-none d-md-flex breadcrumb mb-0">{crumbs}</ol>
    </nav>
  );
};

export default BreadCrumbs;
