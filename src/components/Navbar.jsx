import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <nav aria-label="เมนูหลัก" className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 sm:gap-x-8 font-itim font-bold text-2xl py-5 px-4 bg-blue-600 text-white shadow-md">
      {[
        ['/', 'Home'],
        ['/about', 'About'],
        ['/contact', 'Contact'],
        ['/product', 'Product'],
      ].map(([path, label]) => (
        <NavLink key={path} to={path} end={path === '/'} className="hover:text-yellow-300 focus-visible:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4">
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
