import Image from "next/image";
import Right from "../icons/Right";
export default function Hero(){
    return(
      <section className="hero">
        <div className="py-12">
        <h1 className="text-4xl font-semibold"><span className="text-primary">SSIT</span> A PLACE TO EXCEL</h1>
        <p className="my-6 text-gray-500 text-sm">lorem kbhwrkbcfevcfndcbnsdbcjsdjclsdc nbsdn sdvdjfv nc cxxbcbdkjcsdlkvsdbcds jsdcldshcjhfdjvbsdncbdshvldfjfn jvn jdhvfd jlkkvjfdhuelsdckejf
        </p>
        <div className="flex text-sm">
            <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full">
                <a href="https://ssit.edu.in/" target="_blank">
                Learn more about SSIT
                </a>
                <Right/>
            </button>
        </div>
        </div>
    
        <div className="relative rounded-full overflow-hidden float-right">
        <Image src={'/us.jpg'} layout={'fill'} objectFit={'contain'} alt={'ssit'}/>
        </div>
      </section>
      
    );
}