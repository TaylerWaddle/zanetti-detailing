import Link from "next/link";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-black shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-white">
          Zanetti Logo
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/pricing">Pricing</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/booking">Booking</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
