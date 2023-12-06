import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-2 text-orange-500">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="nav-link">
<Link  href="/help">Help?</Link>
      </div>
    </nav>
  )
}
