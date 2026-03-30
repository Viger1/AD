"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed-position background layer with animated gradient blobs
 * that drift and morph based on scroll position.
 */
export function ScrollBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const animRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Color stops along the scroll journey
    const palette = [
      // Hero:       warm cream with a hint of coral glow
      { bg: [250, 250, 247], blobs: [[255, 107, 53, 0.07], [30, 58, 95, 0.05], [16, 185, 129, 0.04]] },
      // Payment:    light seafoam tint
      { bg: [245, 250, 248], blobs: [[16, 185, 129, 0.08], [30, 58, 95, 0.06], [255, 107, 53, 0.03]] },
      // Features:   warm sand
      { bg: [247, 244, 238], blobs: [[255, 107, 53, 0.06], [200, 120, 50, 0.05], [30, 58, 95, 0.04]] },
      // HowItWorks: cool blue tint
      { bg: [242, 247, 252], blobs: [[30, 58, 95, 0.09], [100, 150, 220, 0.06], [16, 185, 129, 0.03]] },
      // Pricing:    lavender whisper
      { bg: [246, 244, 252], blobs: [[108, 92, 231, 0.06], [30, 58, 95, 0.05], [255, 107, 53, 0.04]] },
      // FAQ:        back to warm
      { bg: [250, 248, 244], blobs: [[255, 170, 90, 0.06], [30, 58, 95, 0.04], [16, 185, 129, 0.05]] },
      // CTA:        deep trust blue glow
      { bg: [240, 245, 250], blobs: [[30, 58, 95, 0.1], [255, 107, 53, 0.06], [16, 185, 129, 0.04]] },
    ];

    function lerp(a: number, b: number, t: number): number {
      return a + (b - a) * t;
    }

    function lerpColor(
      a: number[],
      b: number[],
      t: number,
    ): number[] {
      return a.map((v, i) => lerp(v, b[i], t));
    }

    function getInterpolated(progress: number) {
      const segments = palette.length - 1;
      const raw = progress * segments;
      const idx = Math.min(Math.floor(raw), segments - 1);
      const localT = raw - idx;
      const from = palette[idx];
      const to = palette[idx + 1];
      return {
        bg: lerpColor(from.bg, to.bg, localT),
        blobs: from.blobs.map((b, i) => lerpColor(b, to.blobs[i], localT)),
      };
    }

    let time = 0;

    function draw() {
      time += 0.003;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const progress = scrollRef.current;
      const scene = getInterpolated(progress);

      // Fill background
      const [br, bg2, bb] = scene.bg;
      ctx!.fillStyle = `rgb(${br},${bg2},${bb})`;
      ctx!.fillRect(0, 0, w, h);

      // Draw 3 animated gradient blobs
      const blobConfigs = [
        { cx: 0.2, cy: 0.3, rx: 0.45, ry: 0.45, phaseX: 0.7, phaseY: 1.1 },
        { cx: 0.8, cy: 0.2, rx: 0.4, ry: 0.5, phaseX: 1.3, phaseY: 0.8 },
        { cx: 0.5, cy: 0.8, rx: 0.5, ry: 0.4, phaseX: 0.9, phaseY: 1.4 },
      ];

      blobConfigs.forEach((cfg, i) => {
        const [cr, cg, cb, ca] = scene.blobs[i];
        // Drift position with time + scroll
        const x = (cfg.cx + Math.sin(time * cfg.phaseX + i * 2) * 0.08 + progress * 0.1) * w;
        const y = (cfg.cy + Math.cos(time * cfg.phaseY + i * 1.5) * 0.06) * h;
        const rx = cfg.rx * w;
        const ry = cfg.ry * h;

        const gradient = ctx!.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry));
        gradient.addColorStop(0, `rgba(${cr},${cg},${cb},${ca})`);
        gradient.addColorStop(0.5, `rgba(${cr},${cg},${cb},${ca * 0.4})`);
        gradient.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        ctx!.fillStyle = gradient;
        ctx!.fillRect(0, 0, w, h);
      });

      // Floating geometric shapes
      const shapeCount = 6;
      for (let i = 0; i < shapeCount; i++) {
        const phase = (i / shapeCount) * Math.PI * 2;
        const sx = (0.1 + (i * 0.15)) * w + Math.sin(time * 0.5 + phase) * 30;
        const sy = (0.15 + Math.sin(time * 0.3 + phase) * 0.1 + progress * 0.3) * h;
        const size = 3 + Math.sin(time + i) * 1.5;
        const alpha = 0.04 + Math.sin(time * 0.7 + i) * 0.02;

        ctx!.save();
        ctx!.translate(sx, sy);
        ctx!.rotate(time * 0.2 + i);
        ctx!.fillStyle = `rgba(30, 58, 95, ${alpha})`;

        if (i % 3 === 0) {
          // Circle
          ctx!.beginPath();
          ctx!.arc(0, 0, size, 0, Math.PI * 2);
          ctx!.fill();
        } else if (i % 3 === 1) {
          // Diamond
          ctx!.beginPath();
          ctx!.moveTo(0, -size);
          ctx!.lineTo(size, 0);
          ctx!.lineTo(0, size);
          ctx!.lineTo(-size, 0);
          ctx!.closePath();
          ctx!.fill();
        } else {
          // Small cross
          const t2 = size * 0.3;
          ctx!.fillRect(-size, -t2, size * 2, t2 * 2);
          ctx!.fillRect(-t2, -size, t2 * 2, size * 2);
        }
        ctx!.restore();
      }

      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
