import "../styles/styles.scss";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-body">
      <footer>
        {/* Can make year dynamic */}
        <p>&copy; {new Date().getFullYear()} Brooke, Tommy, Zybiah</p>
        <div className="socialIcons">
          <a href="https://www.facebook.com/">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
