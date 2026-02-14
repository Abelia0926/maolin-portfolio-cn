import { motion } from 'framer-motion';
import { skillsContainerVariants, skillCardVariants, skillItemTextVariants } from '../utils/variants';
import { skillsData } from '../utils/skills';

const CircularProgress = ({ percent }) => {
  const radius = 30;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="mx-auto">
      {/* track */}
      <circle
        stroke="#CBD5E1" // slate-300
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* progress */}
      <motion.circle
        stroke="#0EA5E9" // sky-500
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference + ' ' + circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        strokeLinecap="round"
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="text-sm font-bold fill-slate-700"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="min-h-screen py-20 snap-start flex flex-col items-center justify-center px-6 text-slate-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-sky-600 mb-4 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        我的技能
      </motion.h2>

      <motion.p
  className="text-lg md:text-xl text-slate-600 mb-12 text-center whitespace-nowrap"
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.7, delay: 0.2 }}
>
  致力于将战略思维与数据洞察，转化为可落地的产品方案，输出直接指导决策的核心价值。
</motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={skillsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsData.map(({ id, title, icon: Icon, skills }) => (
          <motion.div
            key={id}
            className="bg-white/75 border border-slate-200 backdrop-blur-sm p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center transition-all duration-300"
            variants={skillCardVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 10px 15px -3px rgba(14, 165, 233, 0.22), 0 4px 6px -2px rgba(14, 165, 233, 0.12)'
            }}
          >
            <Icon className="text-sky-600 text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{title}</h3>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full">
              {skills.map(({ name, percent }) => (
                <div key={name} className="flex flex-col items-center">
                  <CircularProgress percent={percent} />
                  <motion.span
                    variants={skillItemTextVariants}
                    className="mt-2 text-slate-700 font-medium text-xs capitalize leading-snug"
                  >
                    {name}
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}