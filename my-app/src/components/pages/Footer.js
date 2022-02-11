import "./styles.css";

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
          © 2022 Copyright: 
          <a className="text-white" href="https://github.com/Valllerian" style={{color: 'red'}}>
             Valerii Bihun
          </a>
        </div>
      </footer>
    </div>
  );
};


