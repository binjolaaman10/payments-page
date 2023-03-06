import "./style.css";
import instagram from '../../Assets/InstagramLogo.svg'
import facebook from '../../Assets/FacebookLogo.svg'
import twitter from '../../Assets/TwitterLogo.svg'
import logo from '../../Assets/Logo_black.svg'

function Footer() {
  return (
    <div className="footer-wrapper md:px-28">
      <img src={logo} className="pl-6 sm:py-10 md:py-20" />
      <div className="horizontal-break sm:hidden md:flex"></div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center order-last md:order-first h-20 sm:justify-center md:justify-start sm:text-xs md:text-base">
          <span>© Tickete Inc.</span>
          <span className="dot"></span>
          <span>Privacy</span>
          <span className="dot"></span>
          <span>Terms</span>
          <span className="dot"></span>
          <span>Cancellation policy</span>
        </div>
        <div className="flex md:justify-end items-center h-20 sm:pl-6">
          <img src={instagram} alt="social" className="sm:h-10 md:h-5 sm:w-10 md:w-5" />
          <img src={facebook} alt="social" className="sm:h-10 md:h-5 sm:w-10 md:w-5 sm:ml-2" />
          <img src={twitter} alt="social" className="sm:h-10 md:h-5 sm:w-10 md:w-5 sm:ml-2" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
