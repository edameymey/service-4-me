'use client';

import { useState } from 'react';
import {
  AVAILABILITY_SLOTS,
  MENU_ITEMS,
  REVIEW_SUMMARY,
  SERVICE_DETAILS,
  WHAT_YOU_NEED_ITEMS,
} from './constants/service';
import { ServiceBottomCards } from './components/ServiceBottomCards';
import { ServiceDetailsCard } from './components/ServiceDetailsCard';
import { ServiceSidebar } from './components/ServiceSidebar';

const ServicePage = () => {
  const [selectedMenuId, setSelectedMenuId] = useState<string>('overview');
  const [selectedAvailabilityId, setSelectedAvailabilityId] =
    useState<string>('monday');

  const logAction = (action: string, payload?: Record<string, unknown>) => {
    console.log('[service-action]', { action, ...payload });
  };

  const handleSelectMenu = (menuId: string) => {
    setSelectedMenuId(menuId);
    logAction('select-menu', { menuId });
  };

  const handleSelectAvailability = (slotId: string, hasSlots: boolean) => {
    setSelectedAvailabilityId(slotId);
    logAction('select-availability', { slotId, hasSlots });
  };

  const handleMessageTutor = () => {
    logAction('message-tutor', { tutorId: SERVICE_DETAILS.tutor.id });
  };

  const handleProposeTrade = () => {
    logAction('propose-trade', { serviceId: SERVICE_DETAILS.id });
  };

  const handleSaveForLater = () => {
    logAction('save-for-later', { serviceId: SERVICE_DETAILS.id });
  };

  const handleViewAllReviews = () => {
    logAction('view-all-reviews', { total: REVIEW_SUMMARY.count });
  };

  return (
    <section className="rounded-b-xl border-x border-b border-[#dfe3e8] bg-[#f2f4f7] px-4 py-5 sm:px-6 sm:py-7">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-[250px_1fr]">
        <ServiceSidebar
          service={SERVICE_DETAILS}
          menuItems={MENU_ITEMS}
          selectedMenuId={selectedMenuId}
          onSelectMenu={handleSelectMenu}
          onMessageTutor={handleMessageTutor}
        />

        <div className="space-y-4">
          <ServiceDetailsCard
            service={SERVICE_DETAILS}
            availabilitySlots={AVAILABILITY_SLOTS}
            selectedAvailabilityId={selectedAvailabilityId}
            onSelectAvailability={handleSelectAvailability}
            onProposeTrade={handleProposeTrade}
            onSaveForLater={handleSaveForLater}
          />

          <ServiceBottomCards
            requirements={WHAT_YOU_NEED_ITEMS}
            reviewSummary={REVIEW_SUMMARY}
            onViewAllReviews={handleViewAllReviews}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
