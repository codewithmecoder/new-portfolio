import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.github.com/codewithmecoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/ros-sokcheanith-24081423b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a
          href="https://stackoverflow.com/users/17540150/coding-training"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsStackOverflow />
        </a>
      </div>

      <div>
        <a
          href="https://twitter.com/sokcheanith"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
      </div>

      <div>
        <a
          href="https://www.facebook.com/nith.nos.77/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>

      <div>
        <a
          href="https://www.instagram.com/nith__0102__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
