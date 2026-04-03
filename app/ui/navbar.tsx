'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
	{ id: 1, path: "/", name: "Shops" },
	{ id: 2, path: "/cart", name: "Cart" },
]

const Navbar = () => {
	const pathname = usePathname();
	return (
		<header className="w-full max-w-7xl mx-auto sticky top-0 z-20 rounded-3xl border-2 border-zinc-800/90 bg-zinc-950/85 backdrop-blur py-3 px-4">
			<nav>
				<ul className="flex items-center justify-between gap-3 text-sm font-semibold sm:text-base">
					<li className="text-zinc-200">Delivery App</li>
					<li className="flex items-center gap-2 sm:gap-3">
						{paths.map(p => (
							<Link className={`font-bold py-3`} key={p.id} href={p.path}>{p.name}</Link>
						))}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;