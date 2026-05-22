'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
	{ id: 1, path: "/", name: "Shops" },
	{ id: 2, path: "/cart", name: "Cart" },
] as const

const Navbar = () => {
	const pathname = usePathname();
	return (
		<header className="w-full max-w-7xl mx-auto sticky top-0 z-20 rounded-3xl border-2 border-zinc-800/90 bg-zinc-950/85 backdrop-blur py-3 px-4">
			<nav>
				<ul className="flex items-center justify-between gap-3 text-sm font-semibold sm:text-base">
					<li className="text-zinc-200">Delivery App</li>
					<li className="flex items-center gap-2 sm:gap-3">
						{paths.map(p => {
							const isActive = pathname === p.path;
							return (
								<Link
									key={p.id}
									href={p.path}
									scroll={p.path === "/cart" ? false : undefined}
									className={`rounded-full px-4 py-2 font-bold transition ${
										isActive
											? "bg-amber-300 text-zinc-900"
											: "text-zinc-200 hover:bg-zinc-800"
									}`}
								>
									{p.name}
								</Link>
							);
						})}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;