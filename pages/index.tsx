import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Blog from "../components/Blogs";
import Concept from "../components/Concept";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Menu />
      <Concept />
      <Blog />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
