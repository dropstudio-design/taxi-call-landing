import ScrollReveal from "@/components/ScrollReveal";
import { ScanLine } from "lucide-react";

export default function QRCodeSection() {
  return (
    <section id="qrcode" className="py-20 md:py-28 px-6 bg-gradient-to-br from-[#C62828] to-[#E53935]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <ScrollReveal className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <ScanLine className="w-8 h-8 text-white" />
              <span className="text-white/80 font-semibold">快速入頻道</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              掃碼即入頻道
            </h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              用Zello App掃描以下QR Code，或點擊連結，即刻加入「HKNewTaxi」頻道！
            </p>
            <a
              href="https://on.zello.com/8qmp6r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black/20 rounded-full px-5 py-3 hover:bg-black/30 transition-colors"
            >
              <img
                src="/assets/zello-icon.png"
                alt="Zello"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-white font-bold">on.zello.com/8qmp6r</span>
            </a>
          </ScrollReveal>

          {/* Right: Channel QR Code */}
          <ScrollReveal delay={0.2} className="flex-shrink-0">
            <a
              href="https://on.zello.com/8qmp6r"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white rounded-3xl p-6 shadow-2xl animate-pulse-glow group-hover:shadow-red-500/40 transition-shadow">
                <img
                  src="/assets/channel-qr-clean.png"
                  alt="HKNewTaxi頻道QR Code"
                  className="w-56 h-56 md:w-72 md:h-72 object-contain"
                />
                <p className="text-center text-gray-800 font-semibold mt-4 text-sm">
                  點擊或掃描加入頻道
                </p>
              </div>
            </a>
            <p className="text-center text-white/70 mt-4 text-sm">
              頻道：<span className="font-bold text-white">HKNewTaxi</span>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
