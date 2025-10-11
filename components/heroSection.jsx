import Image from "next/image";
import hero from "@/public/hero.svg";

export default function HeroSection() {
  return (
    <>
      <section className="mt-11">
        <div>
          <Image
            src={hero}
            alt="hero"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>
    </>
  );
}
