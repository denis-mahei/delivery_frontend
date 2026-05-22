'use client';

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

type CartModalProps = {
	children: ReactNode;
};

const CartModal = ( { children }: CartModalProps ) => {
	const router = useRouter();

	useEffect(() => {
		document.body.style.overflow = "hidden";

		const onKeyDown = ( event: KeyboardEvent ) => {
			if (event.key === "Escape") {
				router.back();
			}
		};

		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [router] );

	const closeModal = () => router.back();

	return (
		<div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
			<button
				type="button"
				aria-label="Close cart"
				className="absolute inset-0 bg-black/65 backdrop-blur-sm"
				onClick={closeModal}
			/>

			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="cart-modal-title"
				className="relative z-10 flex w-full max-h-[88vh] max-w-lg flex-col overflow-hidden rounded-t-3xl border border-zinc-800 bg-zinc-950 shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
				onClick={( event ) => event.stopPropagation()}
			>
				<div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
					<h2 id="cart-modal-title" className="text-lg font-semibold text-zinc-100">
						Your cart
					</h2>
					<button
						type="button"
						onClick={closeModal}
						className="rounded-full px-3 py-1 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100"
					>
						Close
					</button>
				</div>

				<div className="overflow-y-auto px-4 py-4">
					{children}
				</div>
			</div>
		</div>
	);
};

export default CartModal;
