import Link from "next/link";

export default function LinkNavigation({ children, path }) {
  return (
    <li>
      <Link className="hover:text-customorange" prefetch={false} href={path}>
        {children}
      </Link>
    </li>
  );
}
