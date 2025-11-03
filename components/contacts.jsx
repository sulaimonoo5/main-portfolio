import Link from "next/link";
import SocialMedia from "./socialMedia";

export default function Contact() {
  return (
    <>
      <section className="paddings md:hidden">
        <div className="pt-14 pb-14 flex flex-col items-start gap-5">
          <form action="" className="flex flex-col gap-8 w-80">
            <input
              type="text"
              placeholder="Your Name"
              className="border-2 rounded-md p-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 rounded-md p-3"
            />
            <textarea
              name="help text"
              placeholder="How can I help you"
              id="textarea"
              className="p-3 border-2 rounded-md h-36"></textarea>
          </form>
          <button className="bg-black text-white p-3 font-bold rounded-md cursor-pointer ">
            Get in touch
          </button>
          <SocialMedia />
          <div className="flex flex-col gap-7">
            <h1 className="font-bold text-3xl">
              Let’s{" "}
              <span className="text-transparent font-extrabold outlined-text-shadow inline-block">
                make
              </span>{" "}
              something special
            </h1>
            <p>
              I build thoughtful, responsive interfaces that connect design and
              technology, creating calm yet engaging user experiences.
            </p>
            <Link href="jonmahmadzoda77@gmail.com" className="font-bold">jonmahmadzoda77@gmail.com</Link>
          </div>
        </div>
      </section>
    </>
  );
}
