import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  const scrollToQR = () => {
    document.getElementById("qrcode")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/assets/hero-bg.jpg"
          alt="香港夜景"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0A0A0A]" />
        {/* Red tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E53935]/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Zello Icon + Channel Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <img
            src="/assets/zello-icon.png"
            alt="Zello"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white/80 text-lg font-medium">
            HKNewTaxi
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight tracking-tight"
        >
          Call的講一句就得
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-xl md:text-2xl text-white/90 font-bold mb-2"
        >
          一世免平台費！唔駛左撳右撳！
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-base text-white/60 mb-8"
        >
          用Zello對講機App，按住就講，即時Call車
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToQR}
            className="px-8 py-4 bg-gradient-to-r from-[#E53935] to-[#C62828] text-white font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-500/30"
          >
            立即加入頻道
          </button>
          <a
            href="https://wa.me/85297663802"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 bg-[#25D366] text-white font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp查詢
          </a>
        </motion.div>

        {/* Video Tutorial Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-6"
        >
          <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300">
                <Play className="w-5 h-5 fill-white" />
                影片教學
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-[#1A1A1A] border-white/10 p-0 overflow-hidden">
              <DialogTitle className="sr-only">影片教學</DialogTitle>
              <div className="relative aspect-[9/16] w-full bg-black">
                <iframe
                  src="https://www.youtube.com/embed/rTH8tetrbLA"
                  title="HKNewTaxi 影片教學"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs">向下捲動</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
