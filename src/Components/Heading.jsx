import { CgMenuGridO } from "react-icons/cg"

function Header() {
  return (
    <nav className="navbar">
      <ul className="right-navitems">
        <li>Gmail</li>
        <li>Images</li>
        <li style={{ fontSize: "1.6rem", marginTop: "8px" }}>
          <CgMenuGridO />
        </li>
        <li>
          <div className="circle_avatar">U</div>
        </li>
      </ul>
    </nav>
  )
}
export default Header
