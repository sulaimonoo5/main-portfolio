"use client";

import Link from "next/link";
import SocialMedia from "./socialMedia";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    // Анти-спам: если honeypot заполнен — выходим
    if (e.target.company.value) {
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      .then(() => {
        alert("Message sent successfully 🚀");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong ❌");
      });
  };

  return (
    <section className="paddings" id="contacts">
      <div className="pt-14 pb-14 flex flex-col items-start gap-5 lg:max-w-7xl lg:flex lg:flex-row lg:items-center lg:justify-center">
        <div className="lg:flex lg:flex-col lg:items-center gap-8 w-full">
          {/* ФОРМА */}
          <form
            onSubmit={sendEmail}
            className="flex flex-col items-center gap-8">
            {/* HONEYPOT — скрытое поле которое заполнить только бот */}
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="border-2 rounded-md p-3 lg:w-102 outline-0"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="border-2 rounded-md p-3 lg:w-102 outline-0"
            />

            <textarea
              name="message"
              placeholder="How can I help you"
              required
              className="p-3 border-2 rounded-md h-36 lg:w-102 outline-0"></textarea>

            <div className="lg:flex lg:gap-6 lg:w-102">
              <button
                type="submit"
                className="bg-black text-white p-3 font-bold rounded-md cursor-pointer">
                Get in touch
              </button>
              <SocialMedia />
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-7 items-center w-full lg:pb-24">
          <h1 className="font-bold text-3xl w-80 lg:w-96">
            Let’s{" "}
            <span className="text-transparent font-extrabold outlined-text-shadow inline-block">
              make
            </span>
            <br />
            something special
          </h1>

          <p className="w-80 text-sm lg:w-96">
            I build thoughtful, responsive interfaces that connect design and
            technology, creating calm yet engaging user experiences.
          </p>

          <Link
            href="mailto:jonmahmadzoda77@gmail.com"
            className="font-bold text-left w-80 lg:w-96">
            jonmahmadzoda77@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
}
