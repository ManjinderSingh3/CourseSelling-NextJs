import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "@/components/Appbar";
import { InitUser } from "@/components/InitUser";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Appbar />
      <InitUser />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
