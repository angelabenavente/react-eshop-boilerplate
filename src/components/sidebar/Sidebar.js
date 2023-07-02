//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components

//import icons from react icons

//import sidebar css from react-pro-sidebar module and our custom css
// import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";

export function Sidebar(props) {
  const { className, links } = props;

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  return (
    <div>
      <div className={`${"sideBar"} ${className && className}`}>
        <ul>
          {links?.map(({ url, name }, index) => (
            <li key={index}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
