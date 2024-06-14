import Reactimg from "../Media/Reacticon.png"
import "../../index.css";
function Header() {
  return (
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src={Reactimg} width={45} />
            <h3>ReactFacts</h3>
          </div>
          <ul className="project">
            <li>Project 1</li>
          </ul>
        </nav>
      </header>
  )
}

export default Header