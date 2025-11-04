import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <>
      <section className="flex items-start max-w-7xl gap-6">
        <Link href="https://www.linkedin.com/in/jonmahmadzoda-sulaimon-9ab381343/">
          <button className="pt-2 pb-2 pl-2 pr-2 border-2 rounded-lg w-12 h-12 flex justify-center items-center cursor-pointer">
            <Image
              src="./linkedin.svg"
              alt="linkedin"
              width={20}
              height={20}
              className=""
            />
          </button>
        </Link>
        <Link href="https://github.com/sulaimonoo5">
          <button className="pt-2 pb-2 pl-2 pr-2 border-2 rounded-lg w-12 h-12 flex justify-center items-center cursor-pointer">
            <Image
              src="./github.svg"
              alt="github"
              width={20}
              height={20}
              className=""
            />
          </button>
        </Link>
        <Link href="https://www.reddit.com/user/Large-Oil-4940/">
          <button className="pt-2 pb-2 pl-2 pr-2 border-2 rounded-lg w-12 h-12 flex justify-center items-center cursor-pointer">
            <Image
              src="./reddit.svg"
              alt="reddit"
              width={20}
              height={20}
              className=""
            />
          </button>
        </Link>
      </section>
    </>
  );
}
