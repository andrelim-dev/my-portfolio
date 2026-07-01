import { useState } from "react";
import {
  FloatingLabelInput,
  FloatingLabelTextarea,
} from "./FloatingLabelInput.jsx";

const initialState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Wire this up to form backend / API route of choice.
    setStatus("sent");
    setForm(initialState);
  };

  return (
    <form className="space-y-12" onSubmit={handleSubmit}>
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
        className="w-full py-5 bg-on-background text-background font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all font-label-sm text-label-sm"
      >
        {status === "sent" ? "MESSAGE SENT" : "SEND MESSAGE"}
      </button>
    </form>
  );
}
