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

function Counter({
  end,
  suffix = "",
  delay = 0,
}: {
  end: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 90,
  });
  const isInView = useInView(ref, { once: true, margin: "-40px" });

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

function StatItem({ end, suffix, label, subtitle, delay = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6"
    >
      <div className="mb-2">
        <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
          <Counter end={end} suffix={suffix} delay={delay * 1000} />
        </h3>
      </div>
      <div>
        <p className="font-heading text-sm sm:text-base font-semibold text-foreground mb-1">
          {label}
        </p>
        <p className="font-body text-xs text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const stats = [
    {
      end: 100,
      suffix: "+",
      label: "Turnkey Projects Delivered",
      subtitle: "Factories, warehouses & infrastructure across Bangladesh",
    },
    {
      end: 5000,
      suffix: " MT",
      label: "Monthly Fabrication Output",
      subtitle: "Off-site automated CNC beam lines and steel processing",
    },
    {
      end: 30,
      suffix: "+",
      label: "Industry Engineers & Leads",
      subtitle: "Structural, civil, MEP and certified BIM detailers",
    },
    {
      end: 7,
      suffix: "+",
      label: "Years of Established EPC",
      subtitle: "ISO 9001:2015 certified with Zero Incident HSE protocol",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-b">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              subtitle={stat.subtitle}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
