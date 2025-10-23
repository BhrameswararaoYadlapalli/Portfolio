"use client";
import React, { useState } from "react";
import Nav from "../components/nav";
import MobileNav from "@/components/MobileNav";

const HomePage: React.FC = () => {
  const [nav, setNav]=useState(false);
  const openNav = () =>setNav(true);
  const closeNav = () =>setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div><MobileNav nav={nav} closeNav={closeNav}/></div>
      <div><Nav openNav = {openNav}/></div>
    </div>
  );
};

export default HomePage;