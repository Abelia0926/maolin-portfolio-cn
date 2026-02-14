import { useState } from 'react';

const MENU_OPTIONS = [
  { key: 'about', label: '关于我', target: '#about' },
  { key: 'skills', label: '我的技能', target: '#skills' },
  { key: 'experience', label: '实习经历', target: '#experience' },
  { key: 'projects', label: '项目经历', target: '#projects' },
  { key: 'contact', label: '联系方式', target: '#contact' },
];

// 你可以把这段文案改成你喜欢的口吻
const getWelcomeMessage = () => ({
  sender: 'bot',
  text: 'Hi! 你可以直接点下面的选项快速查看内容：',
  type: 'menu', // 用于前端渲染按钮
  options: MENU_OPTIONS,
});

export const useChat = (initialMessages) => {
  const [messages, setMessages] = useState(
    initialMessages?.length ? initialMessages : [getWelcomeMessage()]
  );
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // 平滑滚动到目标锚点
  const jumpToSection = (target) => {
    const id = target.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // 可选：同步 hash，便于分享链接和刷新定位
      window.history.replaceState(null, '', target);
    }
  };

  // 处理“菜单按钮点击”
  const handleMenuClick = (option) => {
    const userMsg = { sender: 'user', text: `我想看：${option.label}` };
    const botMsg = { sender: 'bot', text: `好的，正在为你跳转到「${option.label}」...` };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    jumpToSection(option.target);
  };

  // 保留输入框，但改成“关键词导航”，不走后端
  const handleSend = async (e) => {
    e.preventDefault();
    const raw = input.trim();
    if (!raw) return;

    setLoading(true);
    const userInput = raw.toLowerCase();
    const newUserMessage = { sender: 'user', text: raw };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');

    // 简单关键词映射（中英都支持一点）
    const map = [
      { keys: ['关于', 'about', '自我介绍'], optionKey: 'about' },
      { keys: ['技能', 'skills', '能力'], optionKey: 'skills' },
      { keys: ['实习', 'experience', '工作经历'], optionKey: 'experience' },
      { keys: ['项目', 'project', 'projects'], optionKey: 'projects' },
      { keys: ['联系', 'contact', '邮箱', '微信', 'phone'], optionKey: 'contact' },
    ];

    const matched = map.find((m) => m.keys.some((k) => userInput.includes(k)));
    if (matched) {
      const option = MENU_OPTIONS.find((o) => o.key === matched.optionKey);
      if (option) {
        const botMsg = { sender: 'bot', text: `收到，带你去「${option.label}」。` };
        setMessages((prev) => [...prev, botMsg]);
        jumpToSection(option.target);
        setLoading(false);
        return;
      }
    }

    // 未识别时：不给后端发请求，避免报错
    setMessages((prev) => [
      ...prev,
      {
        sender: 'bot',
        text: '我目前是导航助手。你可以输入：关于我 / 技能 / 实习经历 / 项目经历 / 联系方式，或者直接点下方按钮。',
        type: 'menu',
        options: MENU_OPTIONS,
      },
    ]);

    setLoading(false);
  };

  return {
    messages,
    input,
    setInput,
    loading,
    handleSend,
    handleMenuClick, // 暴露给 ChatWidget 渲染按钮点击
  };
};