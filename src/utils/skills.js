import { FaServer, FaCode, FaTools } from 'react-icons/fa';

export const skillsData = [
  {
    id: 'strategy',
    title: '咨询与商业分析',
    icon: FaServer,
    skills: [
      { name: '市场规模测算与情景建模（Excel）', percent: 90 },
      { name: '二手研究与证据图谱梳理', percent: 90 },
      { name: '专家访谈洞察提炼', percent: 88 },
      { name: '竞争格局与市场定位分析', percent: 86 },
      { name: '决策型汇报制作（PowerPoint/Think-cell）', percent: 90 },
      { name: '医药商业分析', percent: 85 },
    ],
  },
  {
    id: 'data-ai',
    title: '数据与技术能力',
    icon: FaCode,
    skills: [
      { name: 'Python（NumPy/Pandas）', percent: 88 },
      { name: 'SQL（数据查询与清洗）', percent: 78 },
      { name: 'Tableau（分析可视化）', percent: 72 },
      { name: '数据清洗与结构化处理', percent: 90 },
      { name: '时间序列建模与评测设计（CGM）', percent: 82 },
      { name: '图像处理流程（OpenCV/Fiji）', percent: 85 },
    ],
  },
  {
    id: 'product-dev',
    title: '产品化与效率工程',
  icon: FaTools,
  skills: [
    { name: 'Prompt 驱动开发流程', percent: 82 },
    { name: '需求拆解与功能优先级管理', percent: 84 },
    { name: '从0到1原型落地', percent: 80 },
    { name: 'Git与GitHub（协作与版本管理）', percent: 80 },
    { name: '任务流程设计与可视化', percent: 78 },
    { name: '跨工具协同交付（AI + Office + Web）', percent: 82 },
  ],
  },
];