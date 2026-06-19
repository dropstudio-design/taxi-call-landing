import ScrollReveal from "@/components/ScrollReveal";
import { MessageCircle } from "lucide-react";

export default function FooterCTA() {
  return (
    <footer className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#E53935] to-[#C62828]">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            立即掃碼，
            <br />
            開始Call車
          </h2>
        </ScrollReveal>

        {/* Channel QR Code */}
        <ScrollReveal delay={0.1}>
          <a
            href="https://on.zello.com/8qmp6r"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <div className="bg-white rounded-2xl p-5 mb-8 shadow-2xl group-hover:shadow-red-500/30 transition-shadow">
              <img
                src="/assets/channel-qr-clean.png"
                alt="HKNewTaxi頻道QR Code"
                className="w-44 h-44 md:w-52 md:h-52 object-contain"
              />
            </div>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href="https://wa.me/85297663802"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp查詢：9766 3802
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="/assets/zello-icon.png"
                alt="Zello"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-white font-bold">HKNewTaxi</span>
            </div>
            <p className="text-white/60 text-sm">
              &copy; 2026 HKNewTaxi | 香港的士Call台服務
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
