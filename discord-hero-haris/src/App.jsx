import discordLogo from "./assets/discordLogo.png";
import menuLogo from "./assets/menu-icon.png";
import splashArt from "./assets/discord-background.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <img src={discordLogo} alt="DiscordLogo" />
        <img src={menuLogo}></img>
      </div>
      <div className="textContainer">
        <div className="mainText">
          <h1>IMAGINE A PLACE...</h1>
        </div>
        <div className="subText">
          <p>
            ...where you can belong to a school club, a gaming group or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
      </div>
      <div className="buttonContainer">
        <div className="buttonDiv">
          <button className="downloadBtn">Download for Mac</button>
          <button className="openDiscordBtn">
            Open Discord in your browser
          </button>
        </div>
        <div className="spaceHolder"></div>
        <img src={splashArt} alt="splashArt" />;
      </div>
    </div>
  );
}

export default App;
