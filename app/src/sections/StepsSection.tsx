import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "1",
    image: "/assets/step1-download.jpg",
    title: "下載Zello App",
    description:
      "去Google Play或App Store搜尋「Zello Walkie Talkie」，下載安裝",
  },
  {
    number: "2",
    image: "/assets/step2-scan.jpg",
    title: "掃碼入頻道",
    description: "開啟Zello，用「掃描QR Code」功能掃描上方QR Code加入頻道",
  },
  {
    number: "3",
    image: "/assets/step3-talk.jpg",
    title: "按住講話Call車",
    description: "入咗頻道後，按住個橙色掣講「叫車」，司機即刻回應",
  },
];

export default function StepsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
            3步即Call車
          </h2>
          <p className="text-center text-white/50 mb-14 max-w-xl mx-auto">
            簡單三步，即刻開始用對講機Call車
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.15}>
              <div className="text-center">
                {/* Phone Image */}
                <div className="relative mb-6 mx-auto max-w-[240px]">
                  <div className="rounded-2xl overflow-hidden border-2 border-[#E53935]/50 shadow-lg shadow-red-500/10">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#E53935] to-[#C62828] flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
