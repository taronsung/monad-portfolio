"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/content";

const skillCategories = [
  { key: "languages" as const, label: "Languages" },
  { key: "frameworks" as const, label: "Frameworks & Tools" },
  { key: "blockchain" as const, label: "Blockchain Platforms" },
  { key: "specialties" as const, label: "Specialties" },
];

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-6"
      id="skills"
    >
      <h2 className="text-monad-purple text-lg mb-6 text-glow-subtle">
        $ echo $SKILLS
      </h2>

      <div className="space-y-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h3 className="text-monad-purple-light text-sm mb-3">
              ## {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills[category.key].map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                  className="skill-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
