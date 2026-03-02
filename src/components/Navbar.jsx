import { Link } from "react-router-dom";

const Navbar= ()=>{
    return(
        <nav className="bg-gray-900 text-white px-6 py-4 flex gap-10 items-center justify-center z-50 pt-5">
            <h3 className="font-bold text-xl">TRIDE</h3>

            <Link to="/" className="hover:text-indigo-400">Home</Link>
            <Link to="/plan" className="hover:text-indigo-400">Plan</Link>
            <Link to="/explore" className="hover:text-indigo-400">Explore</Link>
            <Link to="/login" className="hover:text-indigo-400">Login</Link>
        </nav>
    );
}

export default Navbar;