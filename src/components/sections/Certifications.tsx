import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface ICertification {
  name: string;
  issuer: string;
  date: string;
  description: string;
}

const certifications: ICertification[] = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024-2027",
    description: "Fundamental understanding of AWS Cloud concepts, services, and architecture."
  },
  {
    name: "Introduction to Data Science in Python",
    issuer: "iLab Africa",
    date: "2024",
    description: "Comprehensive course covering Python programming for data analysis and visualization."
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Various",
    date: "2024",
    description: "Essential cybersecurity concepts and best practices for protecting digital assets."
  },
  {
    name: "Introduction to Python (Refresher)",
    issuer: "Various",
    date: "October 2024",
    description: "Updated Python programming skills and modern development practices."
  },
  {
    name: "Fundamentals of Applications Programming",
    issuer: "Tallinn University (Virtual) - Estonia",
    date: "Jan - Feb 2024",
    description: "Advanced programming concepts and interaction design methods."
  }
];

const CertificationCard: React.FC<{ index: number } & ICertification> = ({ 
  index, 
  name, 
  issuer, 
  date, 
  description 
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-tertiary p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-colors duration-300"
  >
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-[20px] font-bold text-white">{name}</h3>
      <span className="text-[14px] text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
        {date}
      </span>
    </div>
    <p className="text-[16px] text-purple-300 font-semibold mb-2">{issuer}</p>
    <p className="text-[14px] text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.certifications} />
      
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.certifications.content}
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.name} index={index} {...certification} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");

