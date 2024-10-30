import shihab from "../src/assets/56b2f22d-ac37-4238-80c6-774e2f1a3370.jfif";
import {
  IoIosArrowForward,
  IoIosArrowUp,
  IoLogoJavascript,
} from "react-icons/io";
import img4 from "../src/assets/1720072486290.jpeg";
import { jsPDF } from "jspdf";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { RiNodejsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { usePDF } from "react-to-pdf";

import Swal from "sweetalert2";
const Home = () => {
  const [save, setSave] = useState(false);
  const perSection = (id) => {
    console.log(id);
    const gothrough = document.getElementById(id);
    console.log(gothrough);
    gothrough.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const download = () => {
    setSave(true);
    let doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(
      "https://i.ibb.co/XzFCtMH/448218738-932567215549542-2218485051926890530-n.jpg",
      "jpg",
      0,
      0,
      420,
      600
    );
    doc.save("resume.pdf");
    setSave(false);
  };

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qiq0tq8", "template_uf9dpbp", form.current, {
        publicKey: "6YQEd1gmPWypB-x5_ ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email send successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-slate-900">
      <nav
        id="nav"
        className="flex mb-10  justify-between lg:pl-16 lg:pr-56   bg-black items-center"
      >
        <ul>
          <h1 className="text-transparent oswald bg-clip-text  lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-500">
            SK SHIHAB
          </h1>
        </ul>
        <ul className="flex flex-col py-8 md:flex-row  justify-around md:gap-16 oswald text-white">
          <li>
            <button
              className=" hover:border-b-2 border-orange-500"
              onClick={() => perSection("div-1")}
            >
              Intro
            </button>
          </li>
          <li>
            <button
              className=" hover:border-b-2 border-orange-500"
              onClick={() => perSection("div-2")}
            >
              {" "}
              Skill Set
            </button>
          </li>
          <li>
            <button
              className=" hover:border-b-2 border-orange-500"
              onClick={() => perSection("div-3")}
            >
              Project
            </button>
          </li>
          <li className=" hover:border-b-2 border-orange-500">
            <button onClick={() => perSection("div-4")}>Contact</button>
          </li>
        </ul>
      </nav>

      <div>
        <div className="h-screen my-28  flex flex-col md:flex-row-reverse justify-center items-center bg-[url('https://i.ibb.co/4gVqZ8z/image-2024-07-04-121630038.png')]">
          <div className=" md:w-4/12">
            <img
              className="h-[60vh]  md:h-[60vh]  lg:w-72"
              src={shihab}
              alt=""
            />
          </div>
          <div className=" md:w-5/12 ">
            <h1 className="text-white lg:text-5xl lg:font-bold mb-6 ">
              <span className="text-lime-500">IMAGINATION</span> IS MORE
              IMPORTANT THAN KNOWLEDGE
            </h1>
            <p className="text-white oswald lg:text-xl lg:border-l-4 border-lime-500 lg:pl-3">
              together we single people achieve more than any single person
              could ever do alone
            </p>
          </div>
        </div>
        <div
          id="div-1"
          className="md:h-screen md:gap-3 my-28 flex flex-col md:flex-row justify-start justify-center items-center bg-[url('https://i.ibb.co/4gVqZ8z/image-2024-07-04-121630038.png')]"
        >
          <div className="md:w-4/12">
            <img className="h-[60vh] md:h-[60vh] md:w-72" src={shihab} alt="" />
          </div>
          <div className="md:w-5/12 ">
            <h1 className="text-white lg:text-5xl lg:font-bold mb-6 ">
              FAILURE IS THE CONDIMENT THAT GIVES
              <span className="text-lime-500">SUCCESS</span>
            </h1>

            <p className="text-white oswald lg:text-xl">
              Spend more time focusing on the important aspects of your
              business. Turn to McCartney HR LLC in Brooklyn, NY for HR
              solutions. As an advanced virtual HR company, we are offering
              online HR systems that can be customized depending on your
              business needs.
            </p>
            {/* <button
              // onClick={download}
              
            > */}

            <a
              className="bg-green-600 w-60 z-30 md:mt-3 hover:bg-white border-2 rounded-lg gap-2 md:text-xl font-semibold items-center md:px-10 flex hover:bg-opacity-25"
              href="https://drive.google.com/uc?export=download&id=1Bp_fQ_q7qDtzD1d7Fpibr0_sObIgIELr
"
              download
            >
              <IoIosArrowForward className=" m-4 text-2xl bg-slate-100 " />
              Download CV
            </a>

            {/* </button> */}
          </div>
        </div>
        <div
          id="div-2"
          className="h-screen mb-28 bg-[url('https://i.ibb.co/56P2z6d/backt-2.png')]"
        >
          <h1 className="text-center text-white text-4xl md:text-5xl ">
            SKILL AND EXPERIENCE
          </h1>
          <ul className=" text-white">
            <li className=" list-outside grid grid-cols-2 text-2xl md:text-3xl space-y-3 my-4 lg:space-y-6 ">
              <p className="flex justify-center items-center">
                <ImHtmlFive className="text-orange-600" />
                HTML5
              </p>
              <p className="flex justify-center items-center">
                <FaCss3Alt className="text-[#254BDD]" />
                CSS3
              </p>
              <p className="flex justify-center items-center">
                <FaReact className="text-[#01D2F6] bg-black" />
                React.Js
              </p>
              <p className="flex justify-center items-center">
                <RiNodejsFill className="text-[#2D7930]" />
                Node.js
              </p>
              <p className="flex justify-center items-center">
                <SiMongodb className="text-[#108D4D]" />
                Mongodb
              </p>
              <p className="flex justify-center items-center">
                <SiExpress className="text-[#E9BE0F]" /> Express.js
              </p>
              <p className="flex justify-center items-center">
                <IoLogoJavascript className="text-[#ED7E31]" />
                Javascript
              </p>
            </li>
          </ul>

          <h1 className="text-white md:text-3xl text-center">
            ACADEMIC SKILL AND QUALIFICATION
          </h1>
          <div className="bg-slate-400 my-3 mx-3 md:w-6/12 lg:w-4/12 md:mx-auto flex flex-col py-10 ">
            <p className="text-black border-l-2 border-black pl-3 ml-3">
              <li>I completed my B.S.C degree in Mathematics in 2024</li>
            </p>
            <p className="text-black border-l-2 border-black pl-3 ml-3">
              <li>I completed MERN Stack Web App Bootcamp in 2024</li>
            </p>
          </div>
        </div>
        <div
          id="div-3"
          className=" bg-[url('https://i.ibb.co/56P2z6d/backt-2.png')] "
        >
          <h1 className="text-center text-white text-5xl mb-10 ">
            BEST PROJECT I HAVE DONE
          </h1>

          <div className="container mx-auto grid lg:grid-cols-2 gap-3 pb-10 ">
            <div className=" w-10/12 border-2 mx-auto ">
              <img
                className="md:h-[400px] p-4 "
                src="https://i.ibb.co/2SpkzLP/assignment-10.png"
                alt=""
              />
              <p className="text-white text-2xl font-bold p-4 ">
                Arts And Craft{" "}
              </p>
              <p className="text-white p-4 ">
                this is a ecommerc website .this website sell arts and craft
                related product
              </p>
              <div className="flex justify-between text-white px-4 my-3">
                <a
                  target="_blank"
                  href="https://github.com/programming-hero-web-course-4/B9A10-client-side-Skshihabbd"
                >
                  Github Client
                </a>
                <a
                  target="_blank"
                  href="https://github.com/programming-hero-web-course-4/b9a10-server-side-Skshihabbd"
                >
                  Github server
                </a>
                <a
                  target="_blank"
                  href="https://polite-salamander-337cb4.netlify.app/"
                >
                  Live site
                </a>
              </div>
            </div>

            <div className=" w-10/12 border-2 mx-auto ">
              <img
                className="md:h-[400px] p-4 "
                src="https://i.ibb.co/TvRf7ck/assignment-11.png"
                alt=""
              />
              <p className="text-white text-2xl font-bold p-4 ">
                Multi-Task Service Hub Website{" "}
              </p>
              <p className="text-white p-4 ">
                This is B2B service transfer website in market place
              </p>
              <div className="flex justify-between text-white px-4 my-3">
                <a
                  target="_blank"
                  href="https://github.com/Skshihabbd/Service-Hub-client"
                >
                  Github Client
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Skshihabbd/Service-Hub-server"
                >
                  Github server
                </a>
                <a target="_blank" href="https://service-hub-18eff.web.app/">
                  Live site
                </a>
              </div>
            </div>

            <div className=" w-10/12 border-2 mx-auto ">
              <img
                className="md:h-[400px] p-4 "
                src="https://i.ibb.co/92gySLW/assignment-12.png"
                alt=""
              />
              <p className="text-white text-2xl font-bold p-4 ">
                Micro Task Platform{" "}
              </p>
              <p className="text-white p-4 ">
                This is a Online Microtasking Earning platform Web App
              </p>
              <div className="flex justify-between text-white px-4 my-3">
                <a
                  target="_blank"
                  href="https://github.com/programming-hero-web-course1/b9a12-client-side-Skshihabbd"
                >
                  Github Client
                </a>
                <a
                  target="_blank"
                  href="https://github.com/programming-hero-web-course1/b9a12-client-side-Skshihabbd"
                >
                  Github server
                </a>
                <a
                  target="_blank"
                  href="https://zesty-choux-845819.netlify.app/"
                >
                  Live site
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="div-4"
          className="  my-28 bg-[url('https://i.ibb.co/56P2z6d/backt-2.png')] "
        >
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-gray-100">
            <div className="flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  Let's Contact Me!
                </h2>
                <div className="text-gray-400">
                  Give the details and contact me
                </div>
              </div>
              <img
                src="https://i.ibb.co/TK8PY9K/image-2024-07-04-175106976-transformed.png"
                alt=""
                className="p-6 h-52 md:h-64"
              />
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <input
                  name="user_name"
                  id="name"
                  type="text"
                  placeholder=""
                  className="w-full p-3 rounded bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  name="user_email"
                  id="email"
                  type="email"
                  className="w-full p-3 rounded bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  className="w-full p-3 rounded bg-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer>
        <div className="flex text-white justify-evenly">
          <a target="_blank" href="https://www.facebook.com/">
            Facebook
          </a>
          <a target="_blank" href="https://github.com/Skshihabbd">
            Github
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/skshihab-mernstack/"
          >
            Linkedin
          </a>
        </div>
        <p className="text-white text-center py-6 bg-black mt-6">
          Copyrights © 2024 Theme Junction. All Rights Reserved.
        </p>
      </footer>

      {/* <button onClick={()=>perSection('nav')} className="bg-green-600  z-30 hover:bg-white border-2 rounded-2xl  px-6 py-6"><IoIosArrowUp className="text-5xl " />
            </button> */}
    </div>
  );
};

export default Home;
