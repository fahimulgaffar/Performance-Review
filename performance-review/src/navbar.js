// Importing the Userp component from the "./user_profile" file
import Userp from "./user_profile";
import { Routes, Route , NavLink } from "react-router-dom";

// Functional component for the Navbar
const Navbar = () => {
    return (
    // Navigation container with a title and navigation links
        <nav className="navbar">
            <h1>Project Performance Review</h1>
            <div className="links">
                <NavLink to = "/">Home </NavLink>
                <NavLink to = "/userp">User Profile</NavLink>

            </div>
        </nav>
     );
}
// Exporting the Navbar component for use in other parts of the application
export default Navbar;