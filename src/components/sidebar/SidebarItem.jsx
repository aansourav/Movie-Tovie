import React from "react";

const SidebarItem = ({ icon, bgPrimary, name }) => {
  return (
    <li>
      <a className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${bgPrimary && bgPrimary}`} href="/">
        <img src={icon} width="24" height="24" alt={name} />
        <span>{name}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
