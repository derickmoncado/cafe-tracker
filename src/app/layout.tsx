import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Cafe Tracker",
	description: "Track and rate your favorite spots"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
