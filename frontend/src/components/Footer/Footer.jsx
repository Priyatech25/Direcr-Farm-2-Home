import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          🌾 Direct Farm 2 Home
        </h2>

        <p className="mt-4">
          Connecting Farmers and Consumers through AI.
        </p>

        <div className="flex justify-center gap-6 text-3xl mt-6">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaGithub />
        </div>

        <hr className="my-6"/>

        <p>
          © 2026 Direct Farm 2 Home | All Rights Reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;