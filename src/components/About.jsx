import { motion } from 'framer-motion';
import { aboutSectionVariants, aboutChildVariants, aboutImageVariants } from '../utils/variants';

export default function About() {
  return (
    <motion.section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-8 text-slate-700"
      variants={aboutSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        variants={aboutChildVariants}
        className="text-3xl md:text-5xl font-extrabold mb-8 text-sky-600"
      >
        关于我
      </motion.h2>

      <motion.span
        variants={aboutChildVariants}
        className="text-sm md:text-base tracking-wide text-slate-600 text-center font-semibold mb-10 max-w-4xl leading-relaxed"
      >
        擅长以咨询的战略视野拆解问题，用工程的严谨逻辑验证假设，最终交付可落地的商业成果。
      </motion.span>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 max-w-6xl mx-auto">
        <motion.div
          variants={aboutImageVariants}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-md border-4 border-sky-300/50"
        >
          <img
            src="/me.jpg"
            alt="Maolin Chen Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="md:w-2/3 text-base md:text-xl text-slate-700 space-y-6 leading-8 text-center md:text-left">
          <motion.p variants={aboutChildVariants}>
            我是陈茂林（Abelia），Imperial College London Biomedical Technology Ventures 本科在读。
            我擅长结构化拆解复杂问题，并将数据洞察转化为可执行的决策方案。
          </motion.p>

          <motion.p variants={aboutChildVariants}>
            我的核心能力位于咨询战略、医疗AI研究与产品实践的交叉点。
            在安永帕特农和天风证券，我聚焦肿瘤创新药赛道，负责患者池测算、市场情景推演，并将专家观点转化为可追溯的决策依据；
            在医疗AI方向，我参与推进脑区自动化标注与 CGM（连续血糖监测）推理评测基准构建；同时，我也具备从 0 到 1 开发任务管理 Web 工具的落地经验。
          </motion.p>

          <motion.p variants={aboutChildVariants}>
            我习惯使用 Python / Excel 建模与 Think-cell 可视化处理复杂信息，
            并持续在分析深度、沟通清晰度与落地速度之间寻找更优平衡，
            目标是在医疗与生命科学场景中打通从数据到策略、再到产品的价值闭环。
          </motion.p>

          <motion.p variants={aboutChildVariants}>
            如果你正在寻找能够同时处理业务问题与数据问题的合作伙伴，
            欢迎查看我的
            <a href="#experience" className="text-sky-600 hover:text-sky-700 font-semibold transition-colors mx-1">
              实习经历
            </a>
            、
            <a href="#projects" className="text-sky-600 hover:text-sky-700 font-semibold mx-1 transition-colors">
              项目成果
            </a>
            ，或通过
            <a href="#contact" className="text-sky-600 hover:text-sky-700 font-semibold mx-1 transition-colors">
              联系方式
            </a>
            与我沟通。
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}