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
    </div>
  );
}

export default App;
