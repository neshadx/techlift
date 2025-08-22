"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Frequently Asked <span className="text-green-600">Questions</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions? We’ve got answers! Learn more about how TechLift works and what you can expect.
        </p>

        <Accordion type="single" collapsible className="text-left space-y-2">
          <AccordionItem value="q1">
            <AccordionTrigger>Is TechLift free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, many courses are completely free. However, we also offer premium content for those seeking advanced material or certification.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q2">
            <AccordionTrigger>Do I get a certificate after completing a course?</AccordionTrigger>
            <AccordionContent>
              Yes! Once you complete a course and pass the final quiz or project, you’ll receive a downloadable certificate.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q3">
            <AccordionTrigger>Can I access courses on mobile?</AccordionTrigger>
            <AccordionContent>
              Absolutely! TechLift is mobile-friendly and accessible from any device with internet access.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q4">
            <AccordionTrigger>Do I need coding experience?</AccordionTrigger>
            <AccordionContent>
              Not at all. We offer beginner-friendly courses in web development, marketing, and design — no experience needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
