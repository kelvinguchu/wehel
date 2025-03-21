"use client";

import { motion } from "framer-motion";
import { HospitalForm } from "@/components/forms/hospital/hospital-form";

export default function HospitalPartnershipPage() {
  return (
    <main className='min-h-screen bg-[#0A1A2F] pt-32 pb-20'>
      <div className='container px-6 mx-auto'>
        {/* Header Section */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8'>
            <span className='text-sm text-[#FFD60A]'>Hospital Partnership</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-4xl font-medium text-white mb-6'>
            Join Our Global Healthcare Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-lg text-white/60'>
            Partner with Wehel to expand your reach and provide world-class
            healthcare to international patients.
          </motion.p>
        </div>

        {/* Form Section */}
        <div className='max-w-4xl mx-auto'>
          <HospitalForm />
        </div>
      </div>
    </main>
  );
}
