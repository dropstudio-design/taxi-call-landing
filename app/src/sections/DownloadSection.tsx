import ScrollReveal from "@/components/ScrollReveal";
import { Smartphone, ExternalLink } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#1A1A1A]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-4">
            下載Zello App
          </h2>
          <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
            點擊或掃描QR Code下載Zello對講機App
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Google Play */}
          <ScrollReveal delay={0.1}>
            <a
              href="https://play.google.com/store/apps/details?id=com.loudtalks"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-center bg-[#0A0A0A] rounded-2xl p-6 border border-white/5 hover:border-[#E53935]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white rounded-2xl p-4 shadow-lg inline-block mb-4 group-hover:shadow-red-500/20 transition-shadow">
                <img
                  src="/assets/zello-qr.png"
                  alt="Google Play QR Code"
                  className="w-40 h-40"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Smartphone className="w-5 h-5 text-[#E53935]" />
                <span className="text-white font-bold">Google Play</span>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#E53935] transition-colors" />
              </div>
              <p className="text-white/50 text-sm">Android用戶 · 點擊或掃描</p>
            </a>
          </ScrollReveal>

          {/* App Store */}
          <ScrollReveal delay={0.2}>
            <a
              href="https://apps.apple.com/hk/app/zello-walkie-talkie/id508231856"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-center bg-[#0A0A0A] rounded-2xl p-6 border border-white/5 hover:border-[#E53935]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-white rounded-2xl p-4 shadow-lg inline-block mb-4 group-hover:shadow-red-500/20 transition-shadow">
                <img
                  src="/assets/appstore-qr.png"
                  alt="App Store QR Code"
                  className="w-40 h-40"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <Smartphone className="w-5 h-5 text-[#E53935]" />
                <span className="text-white font-bold">App Store</span>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-[#E53935] transition-colors" />
              </div>
              <p className="text-white/50 text-sm">iPhone用戶 · 點擊或掃描</p>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
