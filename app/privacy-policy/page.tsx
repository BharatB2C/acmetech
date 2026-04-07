import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Acme Technologies Inc.",
  description:
    "Read Acme Technologies Inc.'s privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://acmetechnologies.ca/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Acme Technologies Inc.",
    description: "How we collect, use, and protect your personal information.",
    url: "https://acmetechnologies.ca/privacy-policy",
  },
};

const EFFECTIVE_DATE = "January 1, 2025";
const COMPANY = "Acme Technologies Inc.";
const EMAIL = "hello@acmetechnologies.ca";
const WEBSITE = "https://acmetechnologies.ca";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#f5f5f7] border-b border-[#d2d2d7]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#6e6e73] text-lg">
            Effective date: <span className="text-[#1d1d1f] font-medium">{EFFECTIVE_DATE}</span>
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none text-[#1d1d1f]">

          <p className="text-[#6e6e73] leading-relaxed mb-10">
            {COMPANY} ("we", "our", or "us") operates the website at{" "}
            <a href={WEBSITE} className="text-[#0071e3] hover:underline">{WEBSITE}</a> and our
            associated software products, including Inn Professionals, TeamConnect, and Datum51
            (collectively, the "Services"). This Privacy Policy explains what information we collect,
            how we use it, and your rights regarding that information.
          </p>

          <Section title="1. Information We Collect">
            <p>We collect information you provide directly and information collected automatically:</p>
            <Subsection title="Information You Provide">
              <ul>
                <li><strong>Account information:</strong> name, email address, company name, and password when you register for an account.</li>
                <li><strong>Billing information:</strong> payment card details processed securely through our payment provider (Stripe). We do not store full card numbers.</li>
                <li><strong>Contact information:</strong> messages you send us via the contact form or by email.</li>
                <li><strong>Business data:</strong> invoices, client records, project data, and other content you create within our products.</li>
              </ul>
            </Subsection>
            <Subsection title="Information Collected Automatically">
              <ul>
                <li><strong>Usage data:</strong> pages visited, features used, time spent, and actions taken within the Services.</li>
                <li><strong>Device and browser data:</strong> IP address, browser type, operating system, and referring URLs.</li>
                <li><strong>Cookies and similar technologies:</strong> session cookies required to operate the Services, and analytics cookies as described in Section 5.</li>
              </ul>
            </Subsection>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain the Services.</li>
              <li>Process transactions and send related notices (receipts, renewal reminders).</li>
              <li>Respond to comments, questions, and customer support requests.</li>
              <li>Send product updates, security alerts, and administrative messages.</li>
              <li>Analyze usage patterns to improve our products and develop new features.</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>
              We will not sell, rent, or share your personal information with third parties for their
              direct marketing purposes without your explicit consent.
            </p>
          </Section>

          <Section title="3. Legal Basis for Processing (GDPR / PIPEDA)">
            <p>
              Where applicable, we process your personal information under the following legal bases:
            </p>
            <ul>
              <li><strong>Contractual necessity:</strong> processing required to deliver the Services you have subscribed to.</li>
              <li><strong>Legitimate interests:</strong> improving our products, fraud prevention, and security monitoring.</li>
              <li><strong>Consent:</strong> marketing communications and optional analytics tracking.</li>
              <li><strong>Legal obligation:</strong> complying with applicable Canadian and international laws.</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing and Disclosure">
            <p>We share your information only in the following circumstances:</p>
            <ul>
              <li>
                <strong>Service providers:</strong> we engage trusted third-party companies to perform
                functions on our behalf (e.g., cloud hosting on AWS, payment processing by Stripe,
                transactional email by a communications provider). These parties have access to personal
                information only as needed to perform their functions and are contractually obligated to
                protect it.
              </li>
              <li>
                <strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of
                company assets, your information may be transferred. We will notify you before your
                information becomes subject to a different privacy policy.
              </li>
              <li>
                <strong>Legal requirements:</strong> we may disclose information when required by law,
                court order, or governmental authority, or to protect the rights and safety of our users
                and the public.
              </li>
            </ul>
          </Section>

          <Section title="5. Cookies">
            <p>
              We use cookies and similar tracking technologies to operate and improve the Services:
            </p>
            <ul>
              <li><strong>Essential cookies:</strong> required for authentication and basic site functionality. Cannot be disabled.</li>
              <li><strong>Analytics cookies:</strong> help us understand how visitors use the site. You may opt out by adjusting your browser settings or using a browser extension.</li>
            </ul>
            <p>
              Most browsers allow you to manage cookie preferences. Disabling cookies may affect the
              functionality of certain parts of the Services.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal information for as long as your account is active or as needed to
              provide the Services. If you close your account, we will delete or anonymize your personal
              data within 90 days unless we are required to retain it by law or for legitimate business
              purposes (e.g., fraud prevention, dispute resolution).
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul>
              <li>Encryption of data at rest (AES-256) and in transit (TLS 1.3).</li>
              <li>Role-based access controls limiting employee access to personal data.</li>
              <li>Regular security reviews and vulnerability assessments.</li>
              <li>Hosting on AWS infrastructure with SOC 2 certified data centres.</li>
            </ul>
            <p>
              No method of transmission over the internet is 100% secure. We cannot guarantee absolute
              security, but we will notify you promptly if a breach affecting your data occurs.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              Depending on your location, you may have the following rights regarding your personal
              information:
            </p>
            <ul>
              <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> request that inaccurate or incomplete data be corrected.</li>
              <li><strong>Deletion:</strong> request that your personal data be deleted, subject to legal obligations.</li>
              <li><strong>Portability:</strong> receive your data in a structured, machine-readable format.</li>
              <li><strong>Withdrawal of consent:</strong> withdraw consent for processing at any time where consent is the legal basis.</li>
              <li><strong>Objection:</strong> object to processing based on legitimate interests.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-[#0071e3] hover:underline">{EMAIL}</a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              The Services are not directed to individuals under the age of 16. We do not knowingly
              collect personal information from children. If you believe we have inadvertently collected
              information from a minor, please contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>
              Our website and products may contain links to third-party websites. We are not responsible
              for the privacy practices of those sites and encourage you to review their privacy policies
              before submitting any personal information.
            </p>
          </Section>

          <Section title="11. International Transfers">
            <p>
              {COMPANY} is based in Canada. If you are accessing the Services from outside Canada, your
              information may be transferred to and processed in Canada and in other countries where our
              service providers operate. We ensure appropriate safeguards are in place for any
              international transfer of personal data.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material
              changes by posting the new policy on this page and updating the effective date. We
              encourage you to review this page periodically. Continued use of the Services after any
              changes constitutes your acceptance of the revised policy.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <address className="not-italic mt-4 p-6 bg-[#f5f5f7] rounded-2xl border border-[#d2d2d7]">
              <p className="font-semibold text-[#1d1d1f]">{COMPANY}</p>
              <p className="text-[#6e6e73] mt-1">Canada</p>
              <p className="mt-2">
                <a href={`mailto:${EMAIL}`} className="text-[#0071e3] hover:underline">{EMAIL}</a>
              </p>
            </address>
          </Section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[#d2d2d7] flex flex-wrap gap-4 text-sm text-[#6e6e73]">
          <Link href="/terms-of-service" className="hover:text-[#0071e3] transition-colors">Terms of Service</Link>
          <Link href="/about" className="hover:text-[#0071e3] transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-[#0071e3] transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-[#1d1d1f] mb-4 mt-10">{title}</h2>
      <div className="text-[#6e6e73] leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_strong]:text-[#1d1d1f]">
        {children}
      </div>
    </div>
  );
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">{title}</h3>
      <div className="[&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_strong]:text-[#1d1d1f]">
        {children}
      </div>
    </div>
  );
}
