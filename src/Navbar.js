import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ["Home", "/"],
        ["Characters", "/characters"],
        ["Weapons", "/weapons"],
        ["Artifacts", "/artifacts"],
        ["Materials", "/materials"],
      ].map(([title, url]) => (
        <Link to={url}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
