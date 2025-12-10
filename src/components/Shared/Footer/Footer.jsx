import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = ({ logo }) => {
  return (
    <footer className="bg-primary text-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand Logo & Social */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-4">
              <img src={logo} alt="logo" className="h-12 w-auto" />
            </div>
            <p>
              HomeDecor is your one-stop solution for modern home and ceremony
              decoration services.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 mt-6 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110  transition-all hover:text-secondary duration-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-all hover:text-secondary duration-400"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110  transition-all hover:text-secondary duration-400"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110  transition-all hover:text-secondary duration-400"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Middle Links */}
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:col-span-2 lg:text-left">
            <div>
              <p className="text-lg font-semibold mb-4">Product</p>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer">Overview</li>
                <li className="hover:underline cursor-pointer">Features</li>
                <li className="hover:underline cursor-pointer">Pricing</li>
                <li className="hover:underline cursor-pointer">Releases</li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold mb-4">Company</p>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Team</li>
                <li className="hover:underline cursor-pointer">Contact</li>
                <li className="hover:underline cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <p className="text-lg font-semibold mb-4">Legal</p>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer">Cookies</li>
                <li className="hover:underline cursor-pointer">Privacy</li>
                <li className="hover:underline cursor-pointer">Terms</li>
                <li className="hover:underline cursor-pointer">Licenses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-300 pt-6 text-center text-black text-sm">
          © {new Date().getFullYear()} HomeDecor — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
