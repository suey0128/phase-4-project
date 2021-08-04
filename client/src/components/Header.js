import NavBar from "./Navbar"
function Header ({currentUser}) {
    return (
        <div>
            <h2> <NavBar currentUser={currentUser} /> </h2>
        </div>
    )
  }
  
  export default Header;