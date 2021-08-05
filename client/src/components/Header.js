import NavBar from "./Navbar"
function Header ({currentUser,onLogin,onLogout}) {
    return (
        <div>
            <h2> <NavBar onLogin={onLogin} onLogout={onLogout} currentUser={currentUser} /> </h2>
        </div>
    )
  }
  
  export default Header;