import brainAnnotationImg from '../assets/projects/brain_annotation.png'
import cgmImg from '../assets/projects/cgm.png'
import taskManagerImg from '../assets/projects/task_manager.png'

export const projectsData = [
  {
    id: 'project-1',
    title: '医学图像脑区标注自动化',
    description: '围绕医学图像脑区标注任务，完成从手动标注到半自动流程的迭代。使用 Fiji/ImageJ 与 OpenCV 打通 ROI、空间坐标与脑区标签映射，开发批量自动赋值流程，并沉淀“自动配准 + 人工复核”的稳定工作流。',
    technologies: ['Python', 'OpenCV', 'Fiji/ImageJ', 'NumPy', 'Pandas'],
    imageUrl: brainAnnotationImg,
    liveLink: 'https://drive.google.com/file/d/1TLKZzDh1_JBaRHa1DCGHKlT_8yyq2ZUX/view?usp=sharing',
  },
  {
  id: 'project-2',
  title: 'HealthLoopQA：CGM 推理评测基准构建',
  description: '围绕连续血糖监测（CGM）场景，先完成 py-mgipsim 模拟器代码理解与扩展，并基于扩展 Hovorka 模型生成多场景仿真数据；随后进行异常注入与事件标注，按模型视角设计问答任务和 answer instruction，统一采用 interval / timestamp 作为标准答案格式，最终形成可解释、可复现的 LLM 推理评测基准。',
  technologies: ['Python', 'py-mgipsim', 'Hovorka Model', 'CGM Simulation', 'LLM Evaluation', 'Time Series', 'Prompt Design', 'JSON'],
  imageUrl: cgmImg,
  githubLink: 'https://github.com/Abelia0926/ExtendedCambridgeModel',
},
  {
  id: 'project-3',
  title: 'GenAI 任务管理原型工具（Web）',
  description: '基于 AI 协同开发完成任务管理 Web 原型，覆盖任务创建、优先级管理、进度追踪与基础看板展示。采用“需求拆解—提示词生成—人工校验—快速部署”流程，使用腾讯免费接口实现基础可用能力，支持实际演示与轻量使用。',
  technologies: [
    'HTML/CSS',
    'JavaScript',
    'Prompt-driven Development',
    'CodeBuddy Deployment',
    'Tencent API'
  ],
  imageUrl: taskManagerImg,
  liveLink: 'http://124.221.76.252'
}
  // {
  //   id: 'project-4',
  //   title: '多终点 Toxicity Prediction（二分类建模）',
  //   description: '搭建可查询、可追溯的毒性数据流程，围绕多个 toxicity endpoint 分别训练二分类模型，并使用 AUC、F1、PR-AUC 进行系统评估。针对类别不平衡进行优化，提升关键终点识别能力并输出可解释对比结果。',
  //   technologies: ['Python', 'Scikit-learn', 'XGBoost', 'SVM', 'Imbalanced Learning'],
  //   imageUrl: '/toxicity-prediction.png',
  // },
];
