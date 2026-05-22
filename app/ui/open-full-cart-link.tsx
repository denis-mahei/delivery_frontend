'use client';

import type { ReactNode } from "react";

type OpenFullCartLinkProps = {
	className?: string;
	children?: ReactNode;
};

/**
 * Intercepted modal keeps URL at /cart while children stay on /.
 * A Next.js <Link href="/cart"> is a no-op (same URL). Hard navigation loads the full cart page.
 */
const OpenFullCartLink = ( { className, children = "Open full cart" }: OpenFullCartLinkProps ) => {
	const openFullCart = () => {
		window.location.assign("/cart");
	};

	return (
		<button
			type="button"
			onClick={openFullCart}
			className={className}
		>
			{children}
		</button>
	);
};

export default OpenFullCartLink;
