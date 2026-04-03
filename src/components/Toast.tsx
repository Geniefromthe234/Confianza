import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export function Toast({ message, isVisible }: ToastProps) {
  return (
    <div
      className={`toast fixed bottom-6 right-6 z-50 bg-[#18181b] border border-white/[0.06] rounded-xl px-5 py-3.5 flex items-center gap-3 ${
        isVisible ? 'show' : ''
      }`}
      role="status"
      aria-live="polite"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <Check size={16} className="text-brand-400" />
      <span className="text-sm text-white font-light">{message}</span>
    </div>
  );
}
