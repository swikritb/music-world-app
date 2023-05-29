import Link from "next/link";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className="{styles.nav}">
      <Link href={"/"}>
        <Image
          src="/icon-a.png"
          width={216}
          height={30}
          alt="Music World logo"
        />
      </Link>

      <ul className="{styles.links}">
        <li>
          <Link href={"/home"}>Home</Link>
        </li>
        <li>
          <Link href={"/search"}>Search</Link>
        </li>
        <li>
          <Link href={"/albumDetails"}>Album Details</Link>
        </li>
      </ul>
    </nav>
  );
}
