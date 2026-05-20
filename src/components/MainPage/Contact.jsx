import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_uv1s6xt";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_8uk46am";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "8D54qyP1R78P2J6v8";
const CONTACT_TO_EMAIL = import.meta.env.VITE_CONTACT_TO_EMAIL || "admin.com";
const CONTACT_DELIVERY = (import.meta.env.VITE_CONTACT_DELIVERY || "mailto").toLowerCase();

const hasEmailJsConfig =
  Boolean(EMAILJS_SERVICE_ID) &&
  Boolean(EMAILJS_TEMPLATE_ID) &&
  Boolean(EMAILJS_PUBLIC_KEY);

const buildMailtoHref = ({ name, email, message }) => {
  const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  return `mailto:${CONTACT_TO_EMAIL}?subject=${subject}&body=${body}`;
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    if (!trimmedForm.name || !trimmedForm.email || !trimmedForm.message) {
      alert("Please complete all fields before sending.");
      return;
    }

    setLoading(true);

    const mailtoHref = buildMailtoHref(trimmedForm);

    if (CONTACT_DELIVERY !== "emailjs") {
      setLoading(false);
      window.location.href = mailtoHref;
      return;
    }

    if (!hasEmailJsConfig) {
      setLoading(false);
      alert("Email service config missing. Opening your email app instead.");
      window.location.href = mailtoHref;
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: trimmedForm.name,
          to_name: "Edward Mercado",
          from_email: trimmedForm.email,
          to_email: CONTACT_TO_EMAIL,
          message: trimmedForm.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.error("EmailJS send failed:", error);
      alert("Email service is temporarily unavailable. Opening your email app...");
      window.location.href = mailtoHref;
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              autoComplete="email"
              inputMode="email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const WrappedContact = SectionWrapper(Contact, "contact");
export default WrappedContact;
