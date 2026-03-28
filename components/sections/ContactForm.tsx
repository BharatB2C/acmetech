"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

const services = [
  "WordPress Development",
  "Shopify Development",
  "Custom Development / SaaS",
  "Mobile App",
  "Other",
];

const budgets = [
  "Under $5,000",
  "$5,000 – $25,000",
  "$25,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-[#1d1d1f]">
        {label}
        {required && <span className="text-[#0071e3] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#d2d2d7] text-[#1d1d1f] text-sm placeholder:text-[#a1a1a6] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-all bg-white";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#1d1d1f]">Message sent!</h3>
        <p className="text-[#6e6e73] max-w-sm">
          Thanks for reaching out. We&apos;ll review your message and get back to you
          within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            required
            className={inputClass}
          />
        </Field>
        <Field label="Email Address" required>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            required
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Company">
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Inc. (optional)"
          className={inputClass}
        />
      </Field>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Service Interest" required>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className={cn(inputClass, "appearance-none")}
          >
            <option value="" disabled>Select a service…</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Budget Range">
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={cn(inputClass, "appearance-none")}
          >
            <option value="" disabled>Select a range…</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Message" required>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, timeline…"
          required
          rows={5}
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
