/**
 * 🎨 VISUAL EFFECTS SHOWCASE
 *
 * Demo tất cả hiệu ứng đã tích hợp từ react-bits
 * File này để test và preview các effects
 */

import GradientText from "./effects/GradientText";
import ShinyText from "./effects/ShinyText";
import SpotlightCard from "./effects/SpotlightCard";
import BlurText from "./effects/BlurText";

// ============================================
// 1. GRADIENT TEXT EXAMPLES
// ============================================

export const GradientTextDemo = () => (
  <div className="space-y-6 p-8">
    {/* Default colors */}
    <GradientText>Default Gradient</GradientText>

    {/* Custom colors - Blue to Purple */}
    <GradientText colors={["#3B82F6", "#8B5CF6", "#EC4899"]}>
      Blue to Purple
    </GradientText>

    {/* Fast animation */}
    <GradientText colors={["#F59E0B", "#EF4444", "#F59E0B"]} animationSpeed={2}>
      Fast Animation (2s)
    </GradientText>

    {/* With border */}
    <GradientText
      colors={["#10B981", "#3B82F6", "#10B981"]}
      showBorder={true}
      className="px-6 py-3"
    >
      With Border Effect
    </GradientText>
  </div>
);

// ============================================
// 2. SHINY TEXT EXAMPLES
// ============================================

export const ShinyTextDemo = () => (
  <div className="space-y-6 p-8 bg-gradient-to-br from-indigo-500 to-purple-600">
    {/* Default */}
    <h1 className="text-4xl font-bold">
      <ShinyText text="Premium Feature" speed={5} />
    </h1>

    {/* Fast shine */}
    <h2 className="text-3xl font-bold">
      <ShinyText text="Quick Shine" speed={3} />
    </h2>

    {/* Slow shine */}
    <h3 className="text-2xl font-bold">
      <ShinyText text="Slow & Elegant" speed={8} />
    </h3>

    {/* In a badge */}
    <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
      ⭐ <ShinyText text="Best Seller" speed={4} />
    </span>
  </div>
);

// ============================================
// 3. SPOTLIGHT CARD EXAMPLES
// ============================================

export const SpotlightCardDemo = () => (
  <div className="grid gap-6 p-8 md:grid-cols-3">
    {/* Default spotlight */}
    <SpotlightCard className="rounded-xl bg-white p-6">
      <h3 className="text-xl font-bold">Default Spotlight</h3>
      <p className="mt-2 text-gray-600">Hover to see the effect</p>
    </SpotlightCard>

    {/* Pink spotlight */}
    <SpotlightCard
      className="rounded-xl bg-white p-6"
      spotlightColor="rgba(236, 72, 153, 0.2)"
    >
      <h3 className="text-xl font-bold text-pink-600">Pink Spotlight</h3>
      <p className="mt-2 text-gray-600">Custom color effect</p>
    </SpotlightCard>

    {/* Green spotlight */}
    <SpotlightCard
      className="rounded-xl bg-white p-6"
      spotlightColor="rgba(16, 185, 129, 0.2)"
    >
      <h3 className="text-xl font-bold text-green-600">Green Spotlight</h3>
      <p className="mt-2 text-gray-600">Eco-friendly vibes</p>
    </SpotlightCard>
  </div>
);

// ============================================
// 4. BLUR TEXT EXAMPLES
// ============================================

export const BlurTextDemo = () => (
  <div className="space-y-12 p-8">
    {/* Animate by words */}
    <div>
      <h2 className="text-3xl font-bold">
        <BlurText
          text="Reveal word by word animation"
          delay={100}
          animateBy="words"
        />
      </h2>
    </div>

    {/* Animate by letters */}
    <div>
      <h2 className="text-3xl font-bold">
        <BlurText
          text="Letter by letter reveal"
          delay={50}
          animateBy="letters"
        />
      </h2>
    </div>

    {/* From bottom */}
    <div>
      <h2 className="text-3xl font-bold">
        <BlurText
          text="Coming from bottom direction"
          delay={100}
          direction="bottom"
        />
      </h2>
    </div>

    {/* Fast animation */}
    <div>
      <h2 className="text-3xl font-bold">
        <BlurText
          text="Quick reveal with short delay"
          delay={30}
          animateBy="words"
        />
      </h2>
    </div>
  </div>
);

// ============================================
// 5. COMBINED EFFECTS SHOWCASE
// ============================================

export const CombinedEffectsDemo = () => (
  <div className="space-y-12 p-8">
    {/* Hero section style */}
    <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-12 text-white">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm">
        🚀 <ShinyText text="New Feature Release" speed={4} />
      </span>

      <h1 className="mt-6 text-5xl font-bold">
        Build <GradientText className="inline">Amazing Apps</GradientText>{" "}
        Faster
      </h1>

      <p className="mt-4 text-xl text-white/80">
        <BlurText
          text="With stunning visual effects that make your website stand out"
          delay={80}
          animateBy="words"
        />
      </p>
    </section>

    {/* Card grid with spotlight */}
    <div className="grid gap-6 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <SpotlightCard key={i} className="rounded-xl bg-white p-6 shadow-lg">
          <h3 className="text-xl font-bold">
            <GradientText>Feature {i}</GradientText>
          </h3>
          <p className="mt-2 text-gray-600">
            Hover over this card to see the spotlight effect in action
          </p>
          <div className="mt-4">
            <span className="text-sm font-medium">
              <ShinyText text="Learn More →" speed={5} />
            </span>
          </div>
        </SpotlightCard>
      ))}
    </div>
  </div>
);

// ============================================
// 6. COLOR PALETTES FOR CUSTOMIZATION
// ============================================

export const ColorPalettes = {
  // Gradient Text
  gradients: {
    ocean: ["#0EA5E9", "#06B6D4", "#14B8A6"],
    sunset: ["#F97316", "#EF4444", "#EC4899"],
    forest: ["#10B981", "#84CC16", "#22C55E"],
    royal: ["#8B5CF6", "#A855F7", "#D946EF"],
    fire: ["#DC2626", "#F97316", "#FBBF24"],
  },

  // Spotlight Card
  spotlights: {
    blue: "rgba(59, 130, 246, 0.15)",
    purple: "rgba(139, 92, 246, 0.15)",
    pink: "rgba(236, 72, 153, 0.15)",
    green: "rgba(16, 185, 129, 0.15)",
    orange: "rgba(249, 115, 22, 0.15)",
  },
};

// ============================================
// 7. USAGE TIPS
// ============================================

/**
 * TIPS & BEST PRACTICES:
 *
 * 1. GradientText
 *    - Dùng cho CTAs và headings quan trọng
 *    - Không dùng quá nhiều trong 1 page
 *    - Speed: 3-5s là optimal
 *
 * 2. ShinyText
 *    - Perfect cho badges và labels
 *    - Hoạt động tốt trên dark background
 *    - Speed: 4-6s cho smooth effect
 *
 * 3. SpotlightCard
 *    - Tuyệt vời cho product/feature cards
 *    - Spotlight alpha: 0.1-0.2 là đẹp nhất
 *    - Combine với hover:scale để dramatic hơn
 *
 * 4. BlurText
 *    - Dùng cho section headings
 *    - animateBy="words" cho text ngắn
 *    - animateBy="letters" cho dramatic reveals
 *    - Delay: 50-150ms tùy độ dài text
 *
 * 5. FloatingCursor
 *    - Desktop only (tự động ẩn mobile)
 *    - Không cần config gì thêm
 *    - Tự động có hover effects
 *
 * 6. AnimatedGradient
 *    - Set once trong Layout
 *    - Chỉnh màu blobs để match brand
 *    - Opacity: 0.3-0.5 để không overwhelm
 */

// ============================================
// 8. PERFORMANCE MONITORING
// ============================================

export const PerformanceCheck = () => {
  // Measure FPS
  if (typeof window !== "undefined") {
    let lastTime = performance.now();
    let frames = 0;

    const checkFPS = () => {
      frames++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        console.log(`FPS: ${frames}`);
        frames = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(checkFPS);
    };

    checkFPS();
  }

  return null;
};

export default {
  GradientTextDemo,
  ShinyTextDemo,
  SpotlightCardDemo,
  BlurTextDemo,
  CombinedEffectsDemo,
  ColorPalettes,
  PerformanceCheck,
};
