"use client";

import { AnimatePresence, motion } from "framer-motion";
import ContactCard from "./ContactCard";
import { Mail } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";


export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
  | "success"
  | "error"
  | "empty"
  | "invalidEmail"
  | "invalidName"
  | null
>(null);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  setErrors({
  name: false,
  email: false,
  message: false,
});

  const formData = new FormData(form.current);

const name = formData.get("name")?.toString().trim();
const email = formData.get("email")?.toString().trim();
const message = formData.get("message")?.toString().trim();

if (!name || !email || !message) {

  setErrors({
      name: !name,
      email: !email,
      message: !message,
    });

  setStatus("empty");

  setTimeout(() => {
    setStatus(null);
  }, 4000);

  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {

  setErrors((prev) => ({
    ...prev,
    email: true,
  }));
  setStatus("invalidEmail");

  setTimeout(() => {
    setStatus(null);
  }, 4000);

  return;
}

const nameRegex = /^[A-Za-z\s]{2,}$/;

if (!nameRegex.test(name)) {

  setErrors((prev) => ({
    ...prev,
    name: true,
  }));
  setStatus("invalidName");

  setTimeout(() => {
    setStatus(null);
  }, 4000);

  return;
}

  setLoading(true);

  emailjs
    .sendForm(
      "service_adnszjf",
      "template_eequep8",
      form.current,
      "2xbkE0CkL6--XirYu"
    )
    .then(() => {
      setStatus("success");

      setTimeout(() => {
        setStatus(null);
      }, 4000);
      form.current?.reset();
      setLoading(false);
    })
    .catch(() => {
      setStatus("error");

      setTimeout(() => {
        setStatus(null);
      }, 4000);
      setLoading(false);
    });
};

  return (
    <section
      id="contact"
      className="relative bg-[#F8F4FB]"
    >
            {/* HERO */}

      <div
  className="hidden lg:flex h-[55vh] items-end justify-center overflow-hidden pb-10"
>
        <h1
          className="
            text-[20vw]
            font-black
            leading-none
            text-[#49225B]/10
            whitespace-nowrap
            select-none
            pointer-events-none
          "
        >
          CONTACT
        </h1>
      </div>

      {/* CONTENT */}

      <div
        className="
  relative
  z-20
  max-w-7xl
  mx-auto
  px-6
  pt-10
  lg:-mt-60
  pb-20
"
      >
        <p className="uppercase tracking-[6px] text-sm font-semibold text-[#A56ABD]">
          GET IN TOUCH
        </p>

        <h2 className="mt-5 text-4xl lg:text-5xl xl:text-6xl font-bold text-[#49225B]">
          Let's Build Something Amazing.
        </h2>

        <p className="mt-6 text-lg text-[#666] max-w-2xl leading-8">
          Have a project in mind, a job opportunity, or just want to say hello?
          I'd love to hear from you.
        </p>

        <div className="w-24 h-1 bg-[#A56ABD] rounded-full mt-8"></div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 xl:gap-16 mt-16 items-stretch">

          {/* LEFT */}

          <div className="flex flex-col h-full">

            <p className="uppercase tracking-[5px] text-sm font-semibold text-[#A56ABD]">
              Quick Links
            </p>

            <div className="grid grid-cols-1 gap-5 mt-10">

              <ContactCard
                icon={<Mail size={26} />}
                title="Email"
                subtitle="Let's talk"
                href="mailto:jebinjebin937@email.com"
              />

              <ContactCard
                icon={<FaGithub size={26} />}
                title="GitHub"
                subtitle="View my projects"
                href="https://github.com/jebinjebin937-oss"
              />

              <ContactCard
                icon={<FaLinkedin size={26} />}
                title="LinkedIn"
                subtitle="Let's connect"
                href="https://linkedin.com/in/jebin-j-cse"
              />

              <ContactCard
                icon={<FaInstagram size={26} />}
                title="Instagram"
                subtitle="Follow my journey"
                href="https://instagram.com/_jebin_j_v8"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <p className="uppercase tracking-[5px] text-sm font-semibold text-[#A56ABD]">
              Contact Form
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              noValidate
              className="mt-10 bg-white rounded-[36px] px-6 lg:px-10 pt-8 lg:pt-10 pb-6 shadow-[0_20px_60px_rgba(73,34,91,0.12)]"
            >

              <input
                name="name"
                type="text"
                
                placeholder="Your Name"
                onChange={() =>{
                  setErrors((prev) => ({
                    ...prev,
                    name: false,
                  }));
                  setStatus(null)
                }}
                className={`w-full rounded-2xl px-6 py-4 outline-none transition-all

                ${
                  errors.name
                    ? "bg-red-50 border-2 border-red-400"
                    : "bg-[#F8F4FB]"
                }`}
              />

              <input
                name="email"
                type="email"
                
                placeholder="Email Address"
                onChange={() => {
                setErrors((prev) => ({
                  ...prev,
                  email: false,
                }));

                setStatus(null);
              }}
                className={`w-full rounded-2xl px-6 py-4 outline-none mt-5 transition-all

                ${
                  errors.email
                    ? "bg-red-50 border-2 border-red-400"
                    : "bg-[#F8F4FB]"
                }`}
              />

              <textarea
                name="message"

                rows={6}
                placeholder="Tell me about your project..."
                onChange={() => {
                setErrors((prev) => ({
                  ...prev,
                  message: false,
                }));

                setStatus(null);
              }}
                className={`w-full rounded-2xl px-6 py-4 outline-none mt-5 resize-none transition-all

                ${
                  errors.message
                    ? "bg-red-50 border-2 border-red-400"
                    : "bg-[#F8F4FB]"
                }`}
              />

    <AnimatePresence mode="wait">

  {status === "empty" && (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="mb-6 rounded-2xl bg-yellow-100 border border-yellow-300 px-5 py-4 text-yellow-700"
    >
      <div className="flex items-center gap-2 font-semibold">
  <AlertTriangle size={20} />
  <span>Please fill in all the fields.</span>
</div>

      <p className="text-sm mt-1">
        Name, email, and message are required.
      </p>
    </motion.div>
  )}

  {status === "invalidName" && (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="mb-6 rounded-2xl bg-yellow-100 border border-yellow-300 px-5 py-4 text-yellow-700"
    >
      <div className="flex items-center gap-2 font-semibold">
  <AlertTriangle size={20} />
  <span>Invalid name.</span>
</div>

      <p className="text-sm mt-1">
        Please enter a valid name using letters only.
      </p>
    </motion.div>
  )}

  {status === "invalidEmail" && (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="mb-6 rounded-2xl bg-yellow-100 border border-yellow-300 px-5 py-4 text-yellow-700"
    >
      <div className="flex items-center gap-2 font-semibold">
  <AlertTriangle size={20} />
  <span>Invalid email address.</span>
</div>

      <p className="text-sm mt-1">
        Please enter a valid email.
      </p>
    </motion.div>
  )}

  {status === "success" && (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="mb-6 rounded-2xl bg-green-100 border border-green-300 px-5 py-4 text-green-700"
    >
      <div className="flex items-center gap-2 font-semibold">
  <CheckCircle size={20} />
  <span>Message sent successfully!</span>
</div>

      <p className="text-sm mt-1">
        Thanks for reaching out. I'll get back to you soon.
      </p>
    </motion.div>
  )}

  {status === "error" && (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="mb-6 rounded-2xl bg-red-100 border border-red-300 px-5 py-4 text-red-700"
    >
      <div className="flex items-center gap-2 font-semibold">
  <XCircle size={20} />
  <span>Failed to send message.</span>
</div>

      <p className="text-sm mt-1">
        Please try again later.
      </p>
    </motion.div>
  )}

</AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  mt-8
                  bg-[#49225B]
                  text-white
                  rounded-full
                  px-8
                  py-4
                  hover:scale-105
                  transition-all
                  duration-300
                  disabled:opacity-70
                  disabled:cursor-not-allowed

                "
              >
                <span className="flex items-center gap-2">
                  {loading ? "Sending..." : "Let's Talk"}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}