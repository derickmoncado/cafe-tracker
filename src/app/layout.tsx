import type { Metadata } from "next";
import "./main.scss";
import Navigation from "./components/navigation/navigation";

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
			<body>
				<Navigation />
				<main>{children}</main>
			</body>
		</html>
	);
}
