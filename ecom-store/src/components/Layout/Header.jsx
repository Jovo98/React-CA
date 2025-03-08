import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="flex justify-between p-2 max-w-6xl w-full mx-auto text-lg cursor-pointer">
        <Link to={"/"}>eCom store</Link>
        <nav className="flex gap-2">
          <Link
            to={"/products"}
            className="text-lg cursor-pointer text-blue-600"
          >
            Cart
          </Link>
        </nav>
      </header>
    </>
  );
}
