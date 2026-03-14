import { ServiceSidebarProps } from '../types/service';
import {
  MapPinIcon,
  MenuItemIcon,
  ProfileAvatarIcon,
  StarIcon,
} from '../svgs/ServiceIcons';

export const ServiceSidebar = ({
  service,
  menuItems,
  selectedMenuId,
  onSelectMenu,
  onMessageTutor,
}: ServiceSidebarProps) => {
  return (
    <aside className="space-y-4">
      <div className="rounded-2xl border border-[#dfe3e8] bg-white p-4 shadow-[0_6px_20px_rgba(34,51,84,0.04)]">
        <div className="flex items-center gap-3">
          <ProfileAvatarIcon />
          <div>
            <p className="text-base font-bold text-[#253042]">
              {service.tutor.shortName}
            </p>
            <p className="flex items-center gap-1 text-xs font-semibold text-[#7ea76f]">
              <StarIcon /> {service.tutor.rating.toFixed(1)} Rating
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-[#f5f7f5] p-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#8fb17c]">
            Looking For:
          </p>
          <p className="mt-1 text-sm font-semibold text-[#4f5f70]">
            {service.tutor.lookingFor}
          </p>
        </div>

        <ul className="mt-3 space-y-1">
          {menuItems.map((item) => {
            const isSelected = selectedMenuId === item.id;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelectMenu(item.id)}
                  className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                    isSelected
                      ? 'bg-[#88ab7d] text-white'
                      : 'text-[#4b5a69] hover:bg-[#f3f6f8]'
                  }`}
                >
                  <MenuItemIcon icon={item.icon} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={onMessageTutor}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#8fb17c] bg-white px-3 py-2 text-sm font-semibold text-[#799d67] transition hover:bg-[#f4f9f1]"
        >
          <MenuItemIcon icon="message" />
          Message {service.tutor.shortName.split(' ')[0]}
        </button>
      </div>

      <div className="rounded-2xl border border-[#dfe3e8] bg-white p-4 shadow-[0_6px_20px_rgba(34,51,84,0.04)]">
        <h3 className="text-sm font-bold text-[#253042]">Service Area</h3>
        <div className="mt-3 relative h-36 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#dde9f5,#b8d7ec)]">
          <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#97b4c7_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="absolute inset-0 grid place-items-center text-[#7ea76f]">
            <MapPinIcon />
          </div>
        </div>
        <p className="mt-2 text-sm text-[#7f8f9f]">
          {service.tutor.serviceAreaText}
        </p>
      </div>
    </aside>
  );
};
