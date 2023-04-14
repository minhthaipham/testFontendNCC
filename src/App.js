import "./App.css";
import "./responsive.css";
import Word from "./Components/Word";
import logoNCC from "../src/assets/img/logoNCC 1.png";
import cssIcon from "../src/assets/img/css-icon 1.png";
import htmlIcon from "../src/assets/img/html-icon 1.png";
import urlIcon from "../src/assets/img/url-icon 1.png";
function App() {
  const data = [
    {
      id: 1,
      urlImage: cssIcon,
    },
    {
      id: 2,
      urlImage: htmlIcon,
    },
    {
      id: 3,
      urlImage: urlIcon,
    },
  ];

  const listItemWord = () => {
    return data.map((item, index) => {
      return <Word key={index} urlImage={item.urlImage} />;
    });
  };

  return (
    <div className="container">
      <div className="left menu-container">
        <ul className="left-ul menu">
          <li className="active">Home</li>
          <li>Services</li>
          <li>News</li>
          <li>Blogs</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="right">
        <div className="right-content">
          <div>
            <img src={logoNCC} className="imgLogo" alt="logo" />
          </div>
          <div className="box">
            <div className="box-content">
              <h3 className="box-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              </h3>
              <p className="box-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                voluptates, quibusdam, voluptate, quod voluptatem quia quidem
                voluptatum quae quos nemo quia quidem voluptatum quae quos nemo
                voluptatum quae quos nemo voluptatum quae quos nemo voluptatum
                quae quos nemo voluptatum quae quos nemo voluptatum quae quos
                nemo voluptatum quae quos nemo voluptatum quae quos nemo
                voluptatum quae
              </p>
            </div>
          </div>
          <div className="word">{listItemWord()}</div>
        </div>

        {/* footer */}
        <div className="footer">
          <div className="footer-content">
            <p>copyright @ 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
