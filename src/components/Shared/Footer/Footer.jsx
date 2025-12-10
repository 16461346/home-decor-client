import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = ({ logo }) => {
  return (
    <footer className="bg-primary text-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

          {/* Brand Logo & Social */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-center lg:text-left"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="900"
              className="flex justify-center lg:justify-start mb-4"
            >
              <img src={logo} alt="logo" className="h-12 w-auto" />
            </div>

            <p data-aos="fade-right" data-aos-duration="1000">
              HomeDecor is your one-stop solution for modern home and ceremony
              decoration services.
            </p>

            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="flex justify-center lg:justify-start gap-4 mt-6 text-2xl"
            >
              <a className="transform hover:scale-110 transition-all hover:text-secondary">
                <FaFacebookF />
              </a>
              <a className="transform hover:scale-110 transition-all hover:text-secondary">
                <FaYoutube />
              </a>
              <a className="transform hover:scale-110 transition-all hover:text-secondary">
                <FaSquareXTwitter />
              </a>
              <a className="transform hover:scale-110 transition-all hover:text-secondary">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Middle Links */}
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 lg:col-span-2 lg:text-left">

            {/* Product */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="transition-all"
            >
              <p className="text-lg font-semibold mb-4">Product</p>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer">Overview</li>
                <li className="hover:underline cursor-pointer">Features</li>
                <li className="hover:underline cursor-pointer">Pricing</li>
                <li className="hover:underline cursor-pointer">Releases</li>
              </ul>
            </div>

            {/* Company */}
            <div
              data-aos="fade-up"
              data-aos-duration="900"
            >
              <p className="text-lg font-semibold mb-4">Company</p>
              <ul className="space-y-2">
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Team</li>
                <li className="hover:underline cursor-pointer">Contact</li>
                <li className="hover:underline cursor-pointer">Careers</li>
              </ul>
            </div>

            {/* Legal */}
            <div
              data-aos="fade-left"
              data-aos-duration="800"
            >
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
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-12 border-t border-gray-300 pt-6 text-center text-black text-sm"
        >
          © {new Date().getFullYear()} HomeDecor — All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
