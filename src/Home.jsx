import shihab from "../src/assets/56b2f22d-ac37-4238-80c6-774e2f1a3370.jfif";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import img4 from "../src/assets/1720072486290.jpeg";
import { jsPDF } from "jspdf";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qiq0tq8", "template_uf9dpbp", form.current, {
        publicKey: "cThUitj584lQmdpal",
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
        className="flex justify-between pl-16 pr-56 py-6  bg-black items-center"
      >
        <ul>
          <h1 className="text-transparent oswald bg-clip-text  text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-500">
            SK SHIHAB
          </h1>
        </ul>
        <ul className="flex justify-around gap-16 oswald text-white">
          <li>
            <button onClick={() => perSection("div-1")}>Intro</button>
          </li>
          <li>
            <button onClick={() => perSection("div-2")}> Skill Set</button>
          </li>
          <li>
            <button onClick={() => perSection("div-3")}>Project</button>
          </li>
          <li><button onClick={() => perSection("div-4")}>Contact</button> </li>
        </ul>
      </nav>

      <div>
        <div className="h-screen my-28 flex flex-row-reverse justify-start justify-center items-center bg-[url('https://i.ibb.co/4gVqZ8z/image-2024-07-04-121630038.png')]">
          <div className="w-4/12">
            <img className="h-[60vh] w-72" src={shihab} alt="" />
          </div>
          <div className="w-5/12 ">
            <h1 className="text-white text-5xl font-bold mb-6 ">
              {" "}
              <span className="text-lime-500">IMAGINATION</span> IS MORE
              IMPORTANT THAN KNOWLEDGE{" "}
            </h1>
            <p className="text-white oswald text-xl border-l-4 border-lime-500 pl-3">
              together we single people achieve more than any single person
              could ever do alone
            </p>
          </div>
        </div>
        <div
          id="div-1"
          className="h-screen my-28 flex justify-start justify-center items-center bg-[url('https://i.ibb.co/4gVqZ8z/image-2024-07-04-121630038.png')]"
        >
          <div className="w-4/12">
            <img className="h-[60vh] w-72" src={shihab} alt="" />
          </div>
          <div className="w-5/12 ">
            <h1 className="text-white text-5xl font-bold mb-6 ">
              FAILURE IS THE CONDIMENT THAT GIVES{" "}
              <span className="text-lime-500">SUCCESS</span>
            </h1>
            <p className="text-white oswald text-xl">
              Spend more time focusing on the important aspects of your
              business. Turn to McCartney HR LLC in Brooklyn, NY for HR
              solutions. As an advanced virtual HR company, we are offering
              online HR systems that can be customized depending on your
              business needs.
            </p>
            <button
              onClick={download}
              className="bg-green-600  z-30 mt-3 hover:bg-white border-2 rounded-lg gap-2 text-xl font-semibold items-center px-10 flex hover:bg-opacity-25"
            >
              {" "}
              Download CV{" "}
              <IoIosArrowForward className=" m-4 text-2xl bg-slate-100 " />
            </button>
          </div>
        </div>
        <div
          id="div-2"
          className="h-screen mb-28 bg-[url('https://i.ibb.co/56P2z6d/backt-2.png')]"
        >
          <h1 className="text-center text-white text-5xl ">
            SKILL AND EXPERIENCE
          </h1>
          <ul className="text-center text-white">
            <li className=" list-outside ">
              html
              <p>html</p>
              <p>React.Js</p>
              <p>Node.js</p>
              <p></p>
            </li>
          </ul>
          {/* <button onClick={()=>perSection('nav')} className="bg-green-600  z-30 hover:bg-white border-2 rounded-2xl  px-6 py-6"><IoIosArrowUp className="text-5xl " />
            </button> */}
        </div>
        <div
          id="div-3"
          className="h-screen bg-[url('https://i.ibb.co/56P2z6d/backt-2.png')]"
        >
          <h1 className="text-center text-white text-5xl ">
            BEST PROJECT I HAVE DONE
          </h1>
          <ul className="text-center text-white text-3xl">
            <li className=" list-outside flex mt-28 justify-around  ">
             
              <a  target="_blank" href="https://polite-salamander-337cb4.netlify.app/" >Art and Crafty Site</a> 
              <a target="_blank" href="https://github.com/Skshihabbd">My Github Profile</a>
            </li>
          </ul>
          {/* <button onClick={()=>perSection('nav')} className="bg-green-600  z-30 hover:bg-white border-2 rounded-2xl  px-6 py-6"><IoIosArrowUp className="text-5xl " />
            </button> */}
        </div>
        <div
          id="div-4"
          className="h-screen  my-28 bg-[url('https://i.ibb.co/56P2z6d/backt-2.png')] "
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
          {/* <button onClick={()=>perSection('nav')} className="bg-green-600  hover:bg-white border-2 rounded-2xl  px-6 py-6"><IoIosArrowUp className="text-5xl " />
            </button>  */}
        </div>
      </div>
      <footer>
        <div className="flex text-white justify-evenly">
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Linkedin</p>
        </div> 
        <p className="text-white text-center py-6 bg-black mt-6">CopyRight Claim 2005*</p>
      </footer>
    </div>
  );
};

export default Home;
