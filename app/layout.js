import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Productify",
  description: "My Productify Sales Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="wplus_spdisclaimer"></div>
      </body>
      <script
        type="text/javascript"
        src="https://warriorplus.com/o2/disclaimer/g886gd"
        defer
      ></script>
    </html> 
  );
}

// import "./globals.css";
// import { Inter } from "next/font/google";
// import Script from "next/script"; // Import the Script component

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "My Productify",
//   description: "My Productify Sales Page",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Add Referrer Policy */}
//         <meta name="referrer" content="no-referrer-when-downgrade" />

//         {/* Add Content Security Policy */}
//         <meta
//           httpEquiv="Content-Security-Policy"
//           content="script-src 'self' https://warriorplus.com; img-src 'self' https://warriorplus.com;"
//         />
//       </head>
//       <body className={inter.className}>
//         {children}

//         {/* External Script using next/script */}
//         <Script
//           src="https://warriorplus.com/o2/disclaimer/g886gd"
//           strategy="afterInteractive" // Load the script after interactive
//           defer
//           onLoad={() => {
//             console.log("Script loaded successfully");
//           }}
//           onError={(e) => {
//             console.error("Error loading the script: ", e);
//           }}
//         />

//         {/* Optionally, you can include the disclaimer div */}
//         <div className="wplus_spdisclaimer"></div>
//       </body>
//     </html>
//   );
// }
