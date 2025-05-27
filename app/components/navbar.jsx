// @flow strict
import Link from "next/link";


const sections = [
  { type: "about", label: "ABOUT", href: "/#about" },
  { type: "experience", label: "EXPERIENCE", href: "/#experience" },
  { type: "skills", label: "SKILLS", href: "/#skills" },
  { type: "education", label: "EDUCATION", href: "/#education" },
  { type: "blog", label: "BLOGS", href: "/blog" },
  { type: "projects", label: "PROJECTS", href: "/#projects" },
];

function Navbar({portfolioData}) {
  const allowedTypes = (portfolioData.sections || []).map(s => s.type);
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            {portfolioData.username}
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          {sections
            .filter(section => allowedTypes.includes(section.type))
            .map(section => (
              <li key={section.type}>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={section.href}>
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{section.label}</div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;