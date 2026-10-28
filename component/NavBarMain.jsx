import { Link } from "react-router";
 
export default function NavBarMain() {
  return (
    <>
      <div className="flex justify-center gap-5 font-bold
                      py-5 bg-blue-900">
        <Link to="/" className="text-white hover:text-amber-300">HOME</Link>
        <Link to="/about" className="text-white hover:text-amber-300">ABOUT</Link>
        <Link to="/contact" className="text-white hover:text-amber-300">CONTACT</Link>
        <Link to="/wowwowwow" className="text-white hover:text-amber-300">PRODUCT</Link>
      </div>
    </>
  );
}