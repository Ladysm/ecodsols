import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Team from "./components/Team";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Header />
      <Banner />
      <Team />
      <Services/>
      
    </main>
  );
}
