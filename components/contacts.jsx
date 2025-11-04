import Link from "next/link";
import SocialMedia from "./socialMedia";

export default function Contact() {
  return (
    <>
      <section className="paddings" id="contacts">
        <div className="pt-14 pb-14 flex flex-col items-start gap-5 lg:max-w-7xl lg:flex lg:flex-row lg:items-center lg:justify-center">
          <div className="lg:flex lg:flex-col lg:items-center gap-8 w-full">
            <form action="" className="flex flex-col items-center gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="border-2 rounded-md p-3 lg:w-102"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-2 rounded-md p-3 lg:w-102"
              />
              <textarea
                name="help text"
                placeholder="How can I help you"
                id="textarea"
                className="p-3 border-2 rounded-md h-36 lg:w-102"></textarea>
            </form>
            <div className="lg:flex lg:gap-6">
              <div className="flex justify-start w-full pb-8 pt-8 lg:pt-0">
                <button className="bg-black text-white p-3 font-bold rounded-md cursor-pointer ">
                  Get in touch
                </button>
              </div>
              <div className="flex justify-center w-full">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 items-center w-full lg:pb-24">
            <h1 className="font-bold text-3xl w-80 lg:w-96">
              Let’s{" "}
              <span className="text-transparent font-extrabold outlined-text-shadow inline-block">
                make
              </span>{" "} <br />
              something special
            </h1>
            <p className="w-80 text-sm lg:w-96">
              I build thoughtful, responsive interfaces that connect design and
              technology, creating calm yet engaging user experiences.
            </p>
            <Link
              href="jonmahmadzoda77@gmail.com"
              className="font-bold text-left w-80 lg:w-96">
              jonmahmadzoda77@gmail.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
