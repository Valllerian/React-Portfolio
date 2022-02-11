import "./styles.css";
import SocialLink from "./SocialLinks";

export default function Footer  () {

    const footerStyle = {
        backgroundColor: '#0d6efd', 
      };
      
  return (
    <div className="footer">
      <footer >
        <div
          className="text-center p-3 r"
          style={footerStyle}
        >
             
              <div className="social-icons">
              <SocialLink/>
          </div>
        </div>
      </footer>
    </div>
  );
};


