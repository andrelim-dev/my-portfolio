import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FloatingLabelInput, FloatingLabelTextarea } from "./FloatingLabel.jsx";

const initialState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      setForm(initialState);
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="space-y-10 sm:space-y-12 lg:space-y-14"
      onSubmit={handleSubmit}
    >
      <FloatingLabelInput
        id="name"
        label="Name"
        value={form.name}
        onChange={handleChange("name")}
        required
      />
      <FloatingLabelInput
        id="email"
        label="Email"
        type="email"
        value={form.email}
        onChange={handleChange("email")}
        required
      />
      <FloatingLabelInput
        id="subject"
        label="Subject"
        value={form.subject}
        onChange={handleChange("subject")}
      />
      <FloatingLabelTextarea
        id="message"
        label="Message"
        value={form.message}
        onChange={handleChange("message")}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 sm:py-5 bg-on-background text-background font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all font-label-sm text-label-sm disabled:opacity-60 disabled:active:scale-100"
      >
        {loading ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
