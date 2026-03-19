import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-[500px] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <motion.div variants={itemVariants} className="mb-4">
        <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e9d5ff_0%,#a855f7_50%,#e9d5ff_100%)]" />
          <span className="relative inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-900">
            <Sparkles className="h-4 w-4 text-purple-600" />
            Early Access Now Open
          </span>
        </div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl text-gray-900 leading-tight"
      >
        Give your child a head start<br />
        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          when it matters most
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mb-8 max-w-2xl text-lg font-medium text-gray-700"
      >
        We are opening up early access to our accredited, real-world learning programmes to bring structure, confidence, and future-ready skills during uncertain times. Four hands-on courses for ages 5–16. From launching startups to building board games, designed to make kids genuinely future-ready.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4">
        <Button size="lg" className="gap-2 bg-brand-500 text-white hover:bg-brand-600 font-semibold px-8 py-6 text-lg">
          Get access now
          <ArrowRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
