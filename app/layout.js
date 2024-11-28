// import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "My Productify",
//   description: "My Productify Sales Page",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

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
      <head>
        {/* Add Referrer Policy */}
        <meta name="referrer" content="no-referrer-when-downgrade" />

        {/* Add Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' https://warriorplus.com; img-src 'self' https://warriorplus.com;"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
