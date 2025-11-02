import Image from "next/image";
import facebook from "@/public/Facebook.svg"
import linnkedin from "@/public/linkedin.svg";
import reddit from "@/public/reddit.svg";
import github from "@/public/github.svg"

export default function SocialMedia() {
  return (
    <>
      <section className="paddings flex gap-6 mb-24 md:hidden">
        <button className="mt-12 pt-2 pb-2 pl-2 pr-2 border-2 rounded-lg w-12 h-12 flex justify-center items-center">
          <Image
            src={facebook}
            alt="facebook"
            width={20}
            height={20}
            className=""
          />
        </button>
        <button className="mt-12 pt-2 pb-2 pl-2 pr-2 border-2 rounded-lg w-12 h-12 flex justify-center items-center">
          <Image
            src={linnkedin}
            alt="linkedin"
            width={20}
            height={20}
            className=""
          />
        </button>
        <button className="mt-12 pt-2 pb-2 pl-2 pr-2 border-2 rounded-lg w-12 h-12 flex justify-center items-center">
          <Image
            src={reddit}
            alt="reddit"
            width={20}
            height={20}
            className=""
          />
        </button>
        <button className="mt-12 pt-2 pb-2 pl-2 pr-2 border-2 rounded-lg w-12 h-12 flex justify-center items-center">
          <Image
            src={github}
            alt="github"
            width={20}
            height={20}
            className=""
          />
        </button>
      </section>
    </>
  );
}
