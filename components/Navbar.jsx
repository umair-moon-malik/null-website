import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 min-w-[80vw] md:min-w-[60vw]">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="text-2xl lg:text-3xl font-bold text-white whitespace-nowrap">
              n|u
            </div>
            <div className="hidden sm:flex flex-col text-white/90 text-xs whitespace-nowrap">
              <span className="font-medium">Student Chapter</span>
              <span>VIT Bhopal</span>
            </div>
            <div className="flex sm:hidden flex-col text-white/90 text-[10px] leading-tight whitespace-nowrap">
              <span className="font-medium">Student Chapter</span>
              <span>VIT Bhopal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Dropdown Menu */}
          <div className="dropdown dropdown-end md:hidden ml-8">
            <label tabIndex={0} className="cursor-pointer">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block h-0.5 w-5 bg-white " />
                <span className="block h-0.5 w-5 bg-white " />
                <span className="block h-0.5 w-5 bg-white " />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-neutral-700/90 backdrop-blur-3xl border border-white/20 rounded-xl z-[99] w-52 p-2 shadow-md mt-8"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 text-base font-medium py-2 px-3 rounded-lg hover:bg-white/10 "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
