"use client";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
<a href={href} className={`text-white text-xl ${className} hover:text-[#4F46E5] transition-colors duration-300`}>
  {children}
</a>



  );
};

export default NavLink;
