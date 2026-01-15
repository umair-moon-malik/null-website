import { FaGlobe, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg py-12 border-t border-gray-700 w-full mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Vellore Institute of Technology</p>
            <p className="mb-2">Bhopal-Indore Highway</p>
            <p className="mb-2">Kothrikalan, Sehore</p>
            <p className="mb-2">Madhya Pradesh – 466114</p>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:nullchapter@vitbhopal.ac.in"
                className="text-blue-500 hover:underline"
              >
                nullchapter@vitbhopal.ac.in
              </a>
            </p>
          </div>

          {/* Socials */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-6 justify-center md:justify-start">
              <Link
                href="https://null.community/chapters/22-vit-bhopal-student-chapter"
                className="hover:text-blue-400"
              >
                <FaGlobe size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/null-vit-bhopal-student-chapter/"
                className="hover:text-blue-500"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/null.vitb/"
                className="hover:text-pink-700"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://github.com/Null-Student-Chapter-VIT-Bhopal"
                className="hover:text-gray-500"
              >
                <FaGithub size={24} />
              </Link>
            </div>
          </div>

          {/* Chapter Logo */}
          <div className="flex flex-col items-center text-center">
            <div className="text-[5rem] font-light tracking-tighter mb-2">
              n|u
            </div>
            <h2 className="text-2xl font-semibold mb-1 tracking-wide">
              Null Student Chapter
            </h2>
            <h2 className="text-xl font-semibold">VIT Bhopal</h2>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            made with ❤️ by{" "}
            <Link
              href="https://github.com/umair-moon-malik"
              className="text-blue-500 hover:underline"
            >
              Umair Malik
            </Link>{" "}
            | null - The Open Security Community
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
