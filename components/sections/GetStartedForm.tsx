"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

const projectTypes = [
  { label: "New Website", emoji: "🌐" },
  { label: "Redesign", emoji: "✏️" },
  { label: "SaaS / App", emoji: "🚀" },
  { label: "Mobile App", emoji: "📱" },
  { label: "Integration", emoji: "🔗" },
];

const timelines = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Not sure"];
const budgets = ["Under $5,000", "$5,000 – $25,000", "$25,000 – $100,000", "$100,000+", "Not sure"];
const goals = ["More Traffic / SEO", "More Sales / Conversions", "Automate Processes", "Launch a New Product"];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-[#d2d2d7] text-[#1d1d1f] text-sm placeholder:text-[#a1a1a6] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20 transition-all bg-white";

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

export default function GetStartedForm() {
  const [projectType, setProjectType] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    description: "",
    timeline: "",
    budget: "",
    goal: "",
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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#1d1d1f]">Proposal request received!</h3>
        <p className="text-[#6e6e73] max-w-sm">
          We&apos;ve received your details and will prepare a custom proposal. Expect to
          hear from us within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Step 1 — About You */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#0071e3] mb-4">
          Step 1 — About You
        </p>
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
          <Field label="Your Role">
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Founder, CTO, Marketing…"
              className={inputClass}
            />
          </Field>
        </div>
      </div>

      {/* Step 2 — Your Project */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#0071e3] mb-4">
          Step 2 — Your Project
        </p>
        <div className="flex flex-col gap-5">
          <Field label="Project Type" required>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {projectTypes.map(({ label, emoji }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setProjectType(label)}
                  className={cn(
                    "flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl border text-xs font-semibold transition-all duration-150 cursor-pointer",
                    projectType === label
                      ? "border-[#0071e3] bg-[#eff6ff] text-[#0071e3]"
                      : "border-[#d2d2d7] bg-white text-[#1d1d1f] hover:border-[#0071e3]/50 hover:bg-[#f5f5f7]"
                  )}
                >
                  <span className="text-xl">{emoji}</span>
                  {label}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Project Description" required>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Briefly describe what you want to build, who it's for, and any specific features or requirements…"
              required
              rows={4}
              className={cn(inputClass, "resize-none")}
            />
          </Field>

          <Field label="Ideal Timeline">
            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className={cn(inputClass, "appearance-none")}
            >
              <option value="" disabled>Select a timeline…</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </Field>
        </div>
      </div>

      {/* Step 3 — Budget & Goals */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#0071e3] mb-4">
          Step 3 — Budget &amp; Goals
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          <Field label="Primary Goal">
            <select
              name="goal"
              value={form.goal}
              onChange={handleChange}
              className={cn(inputClass, "appearance-none")}
            >
              <option value="" disabled>Select a goal…</option>
              {goals.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-[#0071e3] text-white font-semibold rounded-full hover:bg-[#0077ed] active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed text-base"
      >
        {loading ? "Submitting…" : "Request a Proposal →"}
      </button>
    </form>
  );
}
