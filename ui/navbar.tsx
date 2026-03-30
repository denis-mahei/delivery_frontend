'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsCart4 } from "react-icons/bs";


const Navbar = () => {
	const path = usePathname();
	return (
		<header>
			<nav className='border-b-2 p-4'>
				<ul className="flex items-center gap-3 px-2 py-2 font-bold">
					<Link href='/' className={`${path === '/' ? 'border rounded-full px-2 py-1 bg-zinc-700 text-white' : ''}`}>Shop</Link>
					<Link href='/cart' className={`flex items-center gap-1 ${path === '/cart' ? 'border rounded-full px-2 py-1 bg-zinc-700 text-white' : ''}`}>Cart <BsCart4/></Link>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;