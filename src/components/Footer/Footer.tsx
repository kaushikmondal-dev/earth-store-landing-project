import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex place-content-center justify-between border-t border-gray-300 px-48 py-6">
      <nav className="flex gap-8 text-lg tracking-widest uppercase">
        <Link href="/">Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>

      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={20}
        className="h-auto w-auto"
      />

      <div className="">Copyright © 2025 Planet Earth Store</div>
    </footer>
  );
};

export default Footer;
