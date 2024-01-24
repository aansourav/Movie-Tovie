import React from "react";

import commingSoon from "../../assets/icons/commingSoon.svg";
import favourites from "../../assets/icons/favourite.svg";
import newRelease from "../../assets/icons/newRelease.svg";
import trending from "../../assets/icons/trending.svg";
import watchLater from "../../assets/icons/watchLater.svg";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const bgPrimary = "bg-primary";
  return (
    <aside>
      <ul className="space-y-2">
        <SidebarItem icon={trending} bgPrimary={bgPrimary} name={"Trending"} />
        <SidebarItem icon={newRelease} name={"New Release"} />
        <SidebarItem icon={commingSoon} name={"Comming Soon"} />
        <SidebarItem icon={favourites} name={"Favourites"} />
        <SidebarItem icon={watchLater} name={"Watch Later"} />
      </ul>
    </aside>
  );
};

export default Sidebar;
