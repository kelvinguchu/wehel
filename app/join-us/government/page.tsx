"use client";

import { motion } from "framer-motion";
import { GovernmentForm } from "@/components/forms/government/government-form";

export default function GovernmentPage() {
  return (
    <main className='min-h-screen bg-[#0A1A2F] pt-32 pb-20'>
      <div className='container px-6 mx-auto'>
        {/* Header Section */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>
              Government Partnership
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-4xl font-medium text-white mb-6'>
            Public-Private Healthcare Collaboration
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-lg text-white/60'>
            Partner with Wehel to enhance healthcare accessibility and quality
            through strategic public-private partnerships. Together, we can
            strengthen healthcare systems and improve patient outcomes.
          </motion.p>
        </div>

        {/* Form Section */}
        <div className='max-w-4xl mx-auto'>
          <GovernmentForm />
        </div>
      </div>
    </main>
  );
}
