import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-16 py-8">
      <Link prefetch={false} href="path">
        <h1 className="text-6xl font-bold first-letter:text-customorange">Portfolio.</h1>
      </Link>

      <ul className="none md:flex gap-5 text-2xl font-thin">
        <li>
          <Link className="hover:text-customorange" prefetch={false} href="path">
            Om mig
          </Link>
        </li>
        <li>
          <Link className="hover:text-customorange" prefetch={false} href="path">
            Skills
          </Link>
        </li>
        <li>
          <Link className="hover:text-customorange" prefetch={false} href="path">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="hover:text-customorange" prefetch={false} href="path">
            Github
          </Link>
        </li>
        <li>
          <Link className="hover:text-customorange" prefetch={false} href="path">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
