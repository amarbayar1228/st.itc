import Header from "@/components/header";
import "@/styles/globals.css";
import { Roboto } from "next/font/google";
const inter = Roboto({
  subsets: ["latin"],
  weight: "400",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
