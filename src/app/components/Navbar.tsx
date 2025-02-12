import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-black shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-white">
          Zanetti Logo
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/">Pricing</Link>
          <Link href="/">Gallery</Link>
          <Link href="/">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
