import "./globals.css";

export const metadata = {
  title: "Thandora Agency",
  description: "Independent creative and growth agency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}