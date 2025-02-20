import Link from "next/link";
import Image from "next/image";
import ZanettiNavLogo from "../../../public/zanetti nav logo.svg";

const Navbar = () => {
  return (
    <header className="px-7 py-5 bg-grey1 shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/home" className="text-white">
          <Image src={ZanettiNavLogo} alt="zanetti logo" />
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/booking" className="text-white text-2xl mx-3">
            Booking
          </Link>
          <Link href="/services" className="text-white text-2xl mx-3">
            Services
          </Link>
          <Link href="/portfolio" className="text-white text-2xl mx-3">
            Portfolio
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
