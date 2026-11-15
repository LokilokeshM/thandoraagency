import "./globals.css";

export const metadata = {
  title: "Thandora Agency — Make your brand impossible to ignore",
  description: "Independent creative and growth agency building brands, digital experiences and campaigns that move businesses forward.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
