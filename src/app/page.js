import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import AboutUs from "@/components/layout/menu/AboutUs";


export default function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <HomeMenu/>
        <section className="text-center my-16">
          <SectionHeaders 
          mainHeader={"About us"}/>
          <div className="grid grid-cols-4 gap-4 my-8">
            <AboutUs/>
            <AboutUs/>
            <AboutUs/>
            <AboutUs/>
        </div>
        </section>
        <section className="text-center my-8">
          <SectionHeaders
          mainHeader={'Help'}/>
          <div className="mt-6">
          <a className="text-4xl underline text-gray-500" href="tel:0000000000">0000000000</a>
          </div>
          {/* need to add footer */}
        </section>
    </>
  );
}
