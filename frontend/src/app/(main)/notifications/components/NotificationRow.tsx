import { NotificationRowProps } from '../types/notifications';
import { DotsIcon } from '../svgs/DotsIcon';

export const NotificationRow = ({
  item,
  hasBorder,
  onMarkOneAsRead,
  onOpenNotificationMenu,
}: NotificationRowProps) => {
  return (
    <article
      className={`flex items-center justify-between gap-3 px-3 py-3 sm:px-4 ${
        hasBorder ? 'border-b border-[#f1f4f7]' : ''
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        <div
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-[#253042]"
          style={{ backgroundColor: item.avatarColor }}
        >
          {item.avatarLabel}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#253042]">
            {item.title}
          </p>
          <p className="text-xs text-[#8f9baa]">{item.subtitle}</p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {item.unread ? (
          <button
            type="button"
            onClick={() => onMarkOneAsRead(item.id)}
            aria-label="Mark notification as read"
            className="h-6 w-6 rounded-full p-0 text-[#6e9f68]"
          >
            <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-current" />
          </button>
        ) : (
          <span className="block h-6 w-6" />
        )}

        <button
          type="button"
          onClick={() => onOpenNotificationMenu(item.id)}
          aria-label="Open notification menu"
          className="grid h-6 w-6 place-items-center rounded-full text-[#b1bac5] transition hover:bg-[#f4f7f9] hover:text-[#8f9baa]"
        >
          <DotsIcon />
        </button>
      </div>
    </article>
  );
};
