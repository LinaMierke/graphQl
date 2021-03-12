import Link from "next/link";
import Nav from "../components/Nav";

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/"> Stick Fits</Link>
      </div>
      <div className="sub-bar">
        <p> Search</p>
      </div>
      <Nav />
    </header>
  );
}
