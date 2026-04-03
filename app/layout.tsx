import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";

const manropeSans = Manrope({
	variable: "--font-sans",
	subsets: ["latin"],
});


export const metadata: Metadata = {
	title: "Delivery App",
	description: "Developed by Denys Mahei",
};

export default function RootLayout ( {
										 children, modal
									 }: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}> ) {
	return (
		<html
			lang="en"
			className={`${manropeSans.className} h-full antialiased`}
		>
		<body className="min-h-full flex flex-col p-4">
		<Navbar/>
		<main className="app-shell flex-1 py-6">
			{children}
			{modal}
		</main>
		</body>
		</html>
	);
}
