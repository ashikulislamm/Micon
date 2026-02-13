"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  subtitle: string;
  delay?: number;
}

function Counter({ end, suffix = "", delay = 0 }: { end: number; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(end);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, end, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function StatItem({ end, suffix, label, subtitle, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="text-center px-6 lg:px-8"
    >
      <div className="mb-3 lg:mb-4">
        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
          <Counter end={end} suffix={suffix} delay={(delay || 0) * 1000} />
        </h3>
      </div>
      <p className="text-base lg:text-lg font-bold text-foreground mb-2">
        {label}
      </p>
      <p className="text-xs lg:text-sm text-foreground/60">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    {
      end: 30,
      suffix: "+",
      label: "Industry Experts",
      subtitle: "Certified Engineers & Technicians",
    },
    {
      end: 100,
      suffix: "+",
      label: "Successful Projects",
      subtitle: "Delivered Across Bangladesh",
    },
    {
      end: 7,
      suffix: "+",
      label: "Established",
      subtitle: "Years of Industrial Excellence",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-y-0 md:divide-x divide-foreground/10 divide gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              subtitle={stat.subtitle}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
