import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Team from "./components/Team";
import { Services } from "./components/Services";
import { CallToAction } from "./components/CallToAction";
import Footer from "./components/Footer";
import Solution from "./components/Solution";
export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Banner />
      <Solution />
      <Team />
      <Services/>
      <CallToAction/>
      <Footer/>
      
    </main>
  );
}
