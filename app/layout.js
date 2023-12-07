import Navbar from "@/components/Navbar";
import "./globals.css";
import ReduxProviders from "@/provider/ReduxProviders";


export const metadata = {
  title: "react-portal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.avif" type="image/x-icon" />
      <body className="h-full">
        <ReduxProviders>
    
            <Navbar />
            {children}
       
        </ReduxProviders>
      </body>
    </html>
  );
}
