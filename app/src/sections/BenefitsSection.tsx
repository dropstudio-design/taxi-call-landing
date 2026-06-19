import ScrollReveal from "@/components/ScrollReveal";
import { Radio, Headphones, Wallet, Tag } from "lucide-react";

const benefits = [
  {
    icon: Radio,
    title: "即時對講",
    description: "一個掣按住就講，即時連線司機，零延遲",
  },
  {
    icon: Headphones,
    title: "真人服務",
    description: "7/24真人司機對話，唔係機械人，人性化服務",
  },
  {
    icon: Wallet,
    title: "零平台費",
    description: "一世免平台費！拒絕吸血App！",
  },
  {
    icon: Tag,
    title: "慳錢實惠",
    description: "正價/85折都得，單程過海，你想點就點！",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
            點解要用我哋？
          </h2>
          <p className="text-center text-white/50 mb-12 max-w-2xl mx-auto">
            全新Call的概念！唔駛左撳右撳，一個掣即時對話
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={index * 0.1}>
              <div className="bg-[#1A1A1A] rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300 border border-white/5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
