import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../assets/logo.svg";

const MyFooter = () => {
  return (
    <Footer container className=" bg-neutral-300">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3 "
            >
              {" "}
              <img
                src={logo}
                alt=""
                className=" w-10 inline-block items-center"
              />{" "}
              <span className="text-[#263238] ">weStrike</span>
            </a>
            <div>
              <p className="mb-1">Copyright © 2023 weStrike</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Blogs</Footer.Link>
                <Footer.Link href="#">News Letter</Footer.Link>
                <Footer.Link href="#">Products</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.facebook.com/tawfiq.asm/">
                  Facebook
                </Footer.Link>
                <Footer.Link href="https://github.com/Taufiqul7756">
                  Github
                </Footer.Link>
                <Footer.Link href="home">Dribble</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="home">Privacy Policy</Footer.Link>
                <Footer.Link href="home">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                  href="https://www.facebook.com/tawfiq.asm/"
                  icon={BsFacebook}
                />
                <Footer.Icon href="home" icon={BsInstagram} />
                <Footer.Icon
                  href="https://twitter.com/taufiq7756"
                  icon={BsTwitter}
                />
                <Footer.Icon
                  href="https://github.com/Taufiqul7756"
                  icon={BsGithub}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
