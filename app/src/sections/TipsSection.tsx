import ScrollReveal from "@/components/ScrollReveal";
import { Mic, MapPin, Volume2, Heart } from "lucide-react";

const tips = [
  {
    icon: Mic,
    title: "按住先講得",
    description: "要按住個橙色掣先可以講話，放開就收線",
  },
  {
    icon: MapPin,
    title: "講清楚上車地點",
    description: "講你喺邊條街、邊個地標附近等車",
  },
  {
    icon: Volume2,
    title: "聽到先有回應",
    description: "司機會講返佢幾時到，記得聽住個電話",
  },
  {
    icon: Heart,
    title: "禮貌待人",
    description: "有禮貌叫人，司機都會更樂意幫你",
  },
];

export default function TipsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
            使用小貼士
          </h2>
          <p className="text-center text-white/50 mb-12">
            跟住以下提示，Call車更順利
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <ScrollReveal key={tip.title} delay={index * 0.1}>
              <div className="bg-[#0A0A0A] rounded-2xl p-6 flex items-start gap-4 hover:border-[#E53935]/30 border border-transparent transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-6 h-6 text-[#E53935]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
