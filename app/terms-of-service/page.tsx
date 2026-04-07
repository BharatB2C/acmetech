import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Acme Technologies Inc.",
  description:
    "Read the Terms of Service for Acme Technologies Inc. and our software products. These terms govern your use of our website and services.",
  alternates: { canonical: "https://acmetechnologies.ca/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Acme Technologies Inc.",
    description: "Terms and conditions governing your use of Acme Technologies services.",
    url: "https://acmetechnologies.ca/terms-of-service",
  },
};

const EFFECTIVE_DATE = "January 1, 2025";
const COMPANY = "Acme Technologies Inc.";
const EMAIL = "hello@acmetechnologies.ca";
const WEBSITE = "https://acmetechnologies.ca";

export default function TermsOfServicePage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#f5f5f7] border-b border-[#d2d2d7]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0071e3] mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Terms of Service
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
            Please read these Terms of Service ("Terms") carefully before using the website at{" "}
            <a href={WEBSITE} className="text-[#0071e3] hover:underline">{WEBSITE}</a> or any of our
            software products, including Inn Professionals, TeamConnect, and Datum51 (collectively, the
            "Services"), operated by {COMPANY} ("we", "our", or "us"). By accessing or using the
            Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.
          </p>

          <Section title="1. Eligibility">
            <p>
              You must be at least 16 years of age to use the Services. By using the Services, you
              represent and warrant that you meet this requirement and that you have the legal capacity
              to enter into a binding agreement. If you are using the Services on behalf of a company or
              other legal entity, you represent that you have authority to bind that entity to these Terms.
            </p>
          </Section>

          <Section title="2. Account Registration">
            <p>
              Certain features of the Services require you to create an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information during registration.</li>
              <li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
              <li>Promptly notify us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#0071e3] hover:underline">{EMAIL}</a>{" "}
                if you suspect unauthorized use of your account.</li>
              <li>Not share your account credentials with any third party.</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that we determine, in our sole
              discretion, violate these Terms or pose a security risk.
            </p>
          </Section>

          <Section title="3. Acceptable Use">
            <p>You agree to use the Services only for lawful purposes. You must not:</p>
            <ul>
              <li>Violate any applicable local, provincial, national, or international laws or regulations.</li>
              <li>Use the Services to transmit spam, malware, or any harmful or disruptive content.</li>
              <li>Attempt to gain unauthorized access to any part of the Services or our infrastructure.</li>
              <li>Reverse engineer, decompile, or disassemble any portion of the Services.</li>
              <li>Resell, sublicense, or otherwise transfer access to the Services without our express written consent.</li>
              <li>Use automated tools (bots, scrapers) to access the Services in a manner that imposes unreasonable load on our servers.</li>
              <li>Upload, store, or transmit content that infringes any third-party intellectual property rights.</li>
            </ul>
          </Section>

          <Section title="4. Subscriptions and Billing">
            <p>
              Some Services are offered on a subscription basis. By subscribing, you agree to the
              following:
            </p>
            <ul>
              <li>
                <strong>Billing cycle:</strong> subscriptions are billed monthly or annually as selected
                at checkout. Fees are charged in advance at the start of each billing period.
              </li>
              <li>
                <strong>Automatic renewal:</strong> subscriptions renew automatically unless cancelled
                before the renewal date. You can cancel at any time from your account settings.
              </li>
              <li>
                <strong>Payment processing:</strong> payments are processed by Stripe. By providing
                payment information, you authorize us to charge the applicable fees.
              </li>
              <li>
                <strong>Price changes:</strong> we may change subscription pricing with at least 30
                days' notice. Continued use after the notice period constitutes acceptance of the new
                pricing.
              </li>
              <li>
                <strong>Taxes:</strong> prices may be exclusive of applicable taxes. You are responsible
                for all taxes associated with your subscription.
              </li>
            </ul>
          </Section>

          <Section title="5. Refund Policy">
            <p>
              We offer a <strong>14-day money-back guarantee</strong> on paid subscriptions. If you are
              not satisfied with the Services, contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-[#0071e3] hover:underline">{EMAIL}</a> within
              14 days of your initial payment and we will issue a full refund with no questions asked.
            </p>
            <p>
              Refunds are not available after the 14-day period unless required by applicable law. Annual
              subscriptions cancelled after 14 days will remain active until the end of the billing period
              and will not be renewed.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All content, software, trademarks, and other intellectual property associated with the
              Services — including but not limited to text, graphics, logos, and code — are owned by or
              licensed to {COMPANY} and protected by Canadian and international intellectual property
              laws.
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable licence to access and
              use the Services solely for your personal or internal business purposes in accordance with
              these Terms.
            </p>
            <p>
              You retain ownership of all content and data you submit to the Services ("Your Content").
              By submitting Your Content, you grant us a limited licence to host, store, and process it
              solely for the purpose of providing the Services to you.
            </p>
          </Section>

          <Section title="7. Privacy">
            <p>
              Your use of the Services is also governed by our{" "}
              <Link href="/privacy-policy" className="text-[#0071e3] hover:underline">Privacy Policy</Link>,
              which is incorporated into these Terms by reference. Please review it to understand our
              data practices.
            </p>
          </Section>

          <Section title="8. Third-Party Integrations">
            <p>
              The Services may integrate with or link to third-party services and websites (e.g., Stripe,
              Shopify, ADP). These third-party services have their own terms and privacy policies. We are
              not responsible for the practices of any third-party service, and your use of such services
              is at your own risk.
            </p>
          </Section>

          <Section title="9. Service Availability and Modifications">
            <p>
              We strive to maintain high availability of the Services but do not guarantee uninterrupted
              or error-free operation. We reserve the right to:
            </p>
            <ul>
              <li>Perform scheduled or emergency maintenance with reasonable notice where possible.</li>
              <li>Modify, suspend, or discontinue any feature or the Services as a whole, with at least 30 days' notice for material changes.</li>
              <li>Update these Terms at any time. Material changes will be communicated by email or by a prominent notice within the Services.</li>
            </ul>
          </Section>

          <Section title="10. Disclaimer of Warranties">
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Services will be error-free, that defects will be corrected, or
              that the Services or the servers that make them available are free of viruses or other
              harmful components.
            </p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, {COMPANY.toUpperCase()} AND ITS
              OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR
              USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE
              GREATER OF (A) THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM OR (B) CAD
              $100.
            </p>
          </Section>

          <Section title="12. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless {COMPANY} and its officers, directors,
              employees, and agents from and against any claims, liabilities, damages, losses, costs, and
              expenses (including reasonable legal fees) arising out of or in connection with your use of
              the Services, Your Content, or your violation of these Terms.
            </p>
          </Section>

          <Section title="13. Governing Law and Dispute Resolution">
            <p>
              These Terms are governed by and construed in accordance with the laws of the Province of
              Ontario and the federal laws of Canada applicable therein, without regard to conflict of
              law principles.
            </p>
            <p>
              Any dispute arising from these Terms or the Services shall first be submitted to informal
              negotiation by contacting us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-[#0071e3] hover:underline">{EMAIL}</a>. If
              not resolved within 30 days, disputes shall be submitted to binding arbitration in Toronto,
              Ontario, in accordance with the Arbitration Act, 1991 (Ontario).
            </p>
          </Section>

          <Section title="14. Termination">
            <p>
              Either party may terminate the agreement formed by these Terms at any time. You may
              terminate by closing your account. We may terminate or suspend your access immediately,
              without prior notice, if you materially breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Services ceases. Sections 6 (Intellectual
              Property), 10 (Disclaimer of Warranties), 11 (Limitation of Liability), 12
              (Indemnification), and 13 (Governing Law) survive termination.
            </p>
          </Section>

          <Section title="15. Entire Agreement">
            <p>
              These Terms, together with the{" "}
              <Link href="/privacy-policy" className="text-[#0071e3] hover:underline">Privacy Policy</Link>,
              constitute the entire agreement between you and {COMPANY} with respect to the Services and
              supersede all prior agreements, representations, and understandings.
            </p>
          </Section>

          <Section title="16. Contact Us">
            <p>If you have any questions about these Terms, please contact us:</p>
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
          <Link href="/privacy-policy" className="hover:text-[#0071e3] transition-colors">Privacy Policy</Link>
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
