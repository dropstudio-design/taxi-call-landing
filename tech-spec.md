# Tech Spec - 每日都早D早D Landing Page

## 項目配置

- **框架**: React + TypeScript + Vite
- **樣式**: Tailwind CSS
- **UI組件**: shadcn/ui
- **動畫**: Framer Motion
- **圖標**: Lucide React

---

## 依賴安裝

```bash
npm install framer-motion lucide-react
```

---

## 組件結構

```
src/
├── App.tsx                 # 主組件，組合所有section
├── main.tsx               # 入口
├── index.css              # 全局樣式
├── sections/
│   ├── HeroSection.tsx    # Hero Banner
│   ├── BenefitsSection.tsx # 賣點4欄
│   ├── QRCodeSection.tsx  # QR Code專區
│   ├── StepsSection.tsx   # 3步教學
│   ├── TipsSection.tsx    # 使用小貼士
│   ├── FAQSection.tsx     # FAQ手風琴
│   └── FooterCTA.tsx      # Footer CTA
├── components/
│   ├── ScrollReveal.tsx   # Scroll reveal包裝組件
│   ├── SectionTitle.tsx   # Section標題組件
│   └── PulsingQR.tsx      # 脈衝QR Code
```

---

## 組件說明

### ScrollReveal

用Framer Motion嘅`useInView`實現scroll reveal效果。

Props:
- `children`: ReactNode
- `delay?`: number (default: 0)
- `direction?`: 'up' | 'down' | 'left' | 'right' (default: 'up')

實現:
- `motion.div` with `initial={{ opacity: 0, y: 40 }}`
- `animate={{ opacity: 1, y: 0 }}`
- `transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}`
- `useInView({ once: true, margin: "-20%" })`

### SectionTitle

統一嘅Section標題樣式。

Props:
- `title`: string
- `subtitle?`: string
- `align?`: 'center' | 'left' (default: 'center')

### PulsingQR

帶脈衝glow效果嘅QR Code。

用CSS animation:
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(229,57,53,0.3); }
  50% { box-shadow: 0 0 40px rgba(229,57,53,0.6); }
}
```

---

## Section詳細規劃

### HeroSection

- Full viewport height (`min-h-screen`)
- 背景圖用`absolute`定位，`object-cover`
- Overlay用`absolute`定位，黑色漸變背景
- 內容用`relative`置中
- Framer Motion: `initial`, `animate`控制各元素出現
- Scroll indicator用CSS animation bounce

### BenefitsSection

- 4欄grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- 每個benefit card用ScrollReveal，stagger delay
- Icon用lucide-react

### QRCodeSection

- 紅色漸變背景
- 左右分欄: `flex-col lg:flex-row`
- QR Code用PulsingQR組件

### StepsSection

- 3欄grid: `grid-cols-1 md:grid-cols-3`
- 每個step: 圖片 + 數字badge + 標題 + 說明
- ScrollReveal stagger

### TipsSection

- 2x2 grid: `grid-cols-1 md:grid-cols-2`
- 每個tip card

### FAQSection

- 用shadcn/ui Accordion組件
- 自定義樣式配合深色主題

### FooterCTA

- 紅色漸變背景
- 置中內容
- WhatsApp連結用`https://wa.me/85297663802`

---

## 全局樣式 (index.css)

```css
/* 自定義色彩 */
:root {
  --primary-red: #E53935;
  --deep-red: #C62828;
  --zello-orange: #FF6F00;
  --bg-dark: #0A0A0A;
  --bg-card: #1A1A1A;
  --text-secondary: #B0B0B0;
  --whatsapp-green: #25D366;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Pulse glow animation */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(229,57,53,0.3); }
  50% { box-shadow: 0 0 40px rgba(229,57,53,0.6); }
}

/* Bounce animation for scroll indicator */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}
```

---

## 響應式策略

Mobile-first，用Tailwind斷點:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

主要斷點:
- Mobile: < 768px (默認)
- Tablet: md (768px+)
- Desktop: lg (1024px+)

---

## 性能考慮

1. 圖片用`loading="lazy"`（除Hero背景外）
2. Framer Motion用`useInView`一次性觸發
3. 動畫用CSS transforms（GPU加速）
4. 靜態頁面，無需API call
