import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 right-0 left-0 flex items-center justify-between px-35 py-8">
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt={"logo"}
          width={200}
          height={20}
          className="h-auto w-auto"
        />
      </Link>

      <nav className="flex gap-8 text-lg tracking-widest uppercase">
        <Link href="/">Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
