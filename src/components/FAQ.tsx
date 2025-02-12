
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Why can't I used to install ShadowOS?",
      answer: "ShadowCore OS requires specific system requirements and compatibility checks. We ensure a smooth installation process by verifying your hardware compatibility first."
    },
    {
      question: "Why should I choose this optimization service instead of using a custom OS?",
      answer: "ShadowCore OS provides a perfect balance of performance optimization and user-friendly interface, without the complexity of managing a fully custom OS."
    },
    {
      question: "How much more performance will I get?",
      answer: "Users typically experience 30-50% performance improvements in CPU usage, RAM management, and overall system responsiveness."
    },
    {
      question: "Is there any form of guarantee, and what about future support?",
      answer: "We offer a 30-day money-back guarantee and provide regular updates and support through our premium subscriptions."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="glass border-b border-white/10">
          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-400">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
