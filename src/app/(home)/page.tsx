import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto md:px-40 px-4 flex py-24">
          <div className="md:w-1/2">
          <h1 className="text-7xl font-black
          leading-2 ">Saver Delicious Pizza in <br /><span className="text-primary">Only 45 Minutes!</span></h1>
          <p className="capitalize mt-8 max-w-lg">Enjoy a Free Meal if your order takes more than 45 minutes!</p>
          <Button className="mt-8 text-lg rounded-full leading-snug">Get Your Pizza Now</Button>
          </div>

          <div className="md:w-1/2 ">
          <Image src={'/pizzaa.png'} width={400} height={400} alt="pizza-main" className="ml-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
