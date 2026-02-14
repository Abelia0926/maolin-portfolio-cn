import { useState } from 'react';
import { useChat } from '../utils/useChat';

export default function ChatWidget() {
  // ✅ 把 handleMenuClick 解构出来
  const { messages, input, setInput, loading, handleSend, handleMenuClick } = useChat();

  const [open, setOpen] = useState(false);
  const [useStream, setUseStream] = useState(true);

  return (
    <div className="fixed bottom-4 right-8 z-100">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-sky-200 cursor-pointer rounded-full w-16 h-16 flex items-center justify-center shadow-xl duration-300 transition-all hover:bg-sky-600 hover:-translate-y-1 hover:scale-105"
        >
          💬
        </button>
      )}

      {open && (
        <div className="flex flex-col h-100 w-100 bg-slate-50 shadow-2xl rounded-xl overflow-hidden">
          <div className="bg-sky-200 text-slate-500 p-3 font-bold flex justify-between items-center">
            导航助手
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 cursor-pointer hover:bg-sky-200 w-6 hover:rounded-full hover:w-6 font-bold"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className="space-y-2">
                {/* 气泡 */}
                <div
                  className={`p-2 rounded-xl max-w-[80%] ${
                    msg.sender === 'user'
                      ? 'bg-sky-200 text-slate-500 ml-auto'
                      : 'bg-sky-100 text-slate-500'
                  }`}
                >
                  {msg.text}
                </div>

                {/* ✅ 这里就是你要加的渲染位置：菜单按钮 */}
                {msg.type === 'menu' && Array.isArray(msg.options) && (
                  <div className="flex flex-wrap gap-2 max-w-[90%]">
                    {msg.options.map((opt) => (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => handleMenuClick(opt)}
                        className="px-3 py-1.5 rounded-full border border-sky-300 text-sky-700 bg-white hover:bg-sky-50 text-sm transition cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && <div className="text-slate-400">Typing...</div>}
          </div>

          <form onSubmit={(e) => handleSend(e, useStream)} className="flex border-t border-slate-200">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 outline-none bg-grey-200 text-slate-800 placeholder-slate-400"
              placeholder="输入：关于我 / 技能 / 实习经历 / 项目经历 / 联系方式"
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-sky-300 text-slate-500 px-4 cursor-pointer hover:bg-sky-600 disabled:bg-slate-300"
              disabled={loading}
            >
              发送
            </button>
          </form>
        </div>
      )}
    </div>
  );
}