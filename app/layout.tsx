import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/navbar";

const manropeSans = Manrope({
	variable: "--font-sans",
	subsets: ["latin"],
});


export const metadata: Metadata = {
	title: "Delivery App",
	description: "Developed by Denys Mahei",
};

export default function RootLayout ( {
										 children,
									 }: Readonly<{
	children: React.ReactNode;
}> ) {
	return (
		<html
			lang="en"
			className={`${manropeSans.className} h-full antialiased`}
		>
		<body className="min-h-full flex flex-col">
		<Navbar/>
		{children}
		</body>
		</html>
	);
}
