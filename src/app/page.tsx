"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";
import Footer from "../../component/Fotter";
import Head from "../../component/Head";
import ImageSlider from "../../component/ImageSlider";
import MarqueeText from "../../component/MarqueeText";
import MiddleContents from "../../component/MiddleContents";

export default function Home() {
  const images = ["../../images/kv_1.jpg", "../../images/kv_3.jpg"]; // スライドショー用の画像パス

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // クライアントサイドでのみレンダリング
  }, []);

  if (!isClient) {
    return null; // サーバーサイドでは何もレンダリングしない
  }

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Head />
      </main>
      <ImageSlider images={images} />
      <MarqueeText />
      <MiddleContents />
      <Footer />
    </div>
  );
}
