import Image from "next/image";
import HelloWorld from "./hello.mdx";

export default function Home() {
  return (
    <main className="prose">
      <HelloWorld />
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" />

        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>
    </main>
  );
}
