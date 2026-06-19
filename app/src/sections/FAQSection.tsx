import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "呢個App要收幾錢？",
    answer:
      "Zello App完全免費下載使用！我哋嘅Call車服務都係一世免平台費，不過車資就要照付㗎啦。",
  },
  {
    question: "入唔到頻道點算？",
    answer:
      "確認你下載嘅係「Zello Walkie Talkie」，然後用Zello入面嘅掃描功能掃QR Code。如果仲係唔得，可以WhatsApp我哋 9766 3802求助。",
  },
  {
    question: "聽唔到聲點算？",
    answer:
      "檢查手機音量，確認Zello有麥克風權限。入咗頻道後等一等，有時要幾秒先連到線。",
  },
  {
    question: "咩地區有得Call？",
    answer: "我哋主要服務香港島、九龍同新界，過海都得！",
  },
  {
    question: "夜晚call唔call到車？",
    answer: "我哋7/24全天候服務，深夜都叫得到車！",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
            常見問題
          </h2>
          <p className="text-center text-white/50 mb-10">
            有疑問？睇吓有冇你想知嘅答案
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-[#1A1A1A] rounded-xl border border-white/5 px-5 data-[state=open]:border-[#E53935]/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-white font-bold py-5 hover:no-underline [&>svg]:text-[#E53935]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
