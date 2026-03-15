'use client';

import { useMemo, useState } from 'react';
import { MessageSender, type Conversation, type Message } from './types/chat';
import {
  CalendarIcon,
  InfoIcon,
  LocationIcon,
  PaperclipIcon,
  PlusIcon,
  SearchIcon,
  SendIcon,
  ShieldIcon,
} from './svgs/icons';

const conversations: Conversation[] = [
  {
    id: 'david',
    name: 'David Wilson',
    preview: 'Looking forward to the car repair!',
    timeLabel: '10:30 AM',
    initials: 'DW',
    activeNow: true,
  },
  {
    id: 'sarah',
    name: 'Sarah Jones',
    preview: 'The English tutoring was great.',
    timeLabel: 'Yesterday',
    initials: 'SJ',
  },
  {
    id: 'michael',
    name: 'Michael Chen',
    preview: 'Sent you the address for the pickup.',
    timeLabel: 'Tue',
    initials: 'MC',
  },
];

const messagesByConversation: Record<string, Message[]> = {
  david: [
    {
      id: 'm1',
      sender: MessageSender.Them,
      text: 'Hi! I saw you were offering English tutoring. I\'d love to swap my car repair services for a few sessions.',
      time: '10:15 AM',
    },
    {
      id: 'm2',
      sender: MessageSender.Me,
      text: 'That sounds like a perfect trade! I definitely need some work done on my transmission. How many sessions were you thinking?',
      time: '10:22 AM · Read',
    },
    {
      id: 'm3',
      sender: MessageSender.Them,
      text: 'Maybe 4 sessions for the full inspection and repair? I can come by this weekend if that works for you. Looking forward to the car repair!',
      time: '10:30 AM',
    },
  ],
  sarah: [
    {
      id: 's1',
      sender: MessageSender.Them,
      text: 'Thanks again for the tutoring session. It really helped!',
      time: 'Yesterday',
    },
  ],
  michael: [
    {
      id: 'c1',
      sender: MessageSender.Them,
      text: 'Sent you the address for the pickup. See you tomorrow.',
      time: 'Tue',
    },
  ],
};

const ChatPage = () => {
  const [activeConversationId, setActiveConversationId] = useState(
    conversations[0].id,
  );
  const [searchValue, setSearchValue] = useState('');
  const [draftMessage, setDraftMessage] = useState('');
  const [isTradeDetailsOpen, setIsTradeDetailsOpen] = useState(true);

  const activeConversation = useMemo(
    () =>
      conversations.find(
        (conversation) => conversation.id === activeConversationId,
      ) ?? conversations[0],
    [activeConversationId],
  );

  const visibleConversations = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) {
      return conversations;
    }

    return conversations.filter(
      (conversation) =>
        conversation.name.toLowerCase().includes(query) ||
        conversation.preview.toLowerCase().includes(query),
    );
  }, [searchValue]);

  const threadMessages = messagesByConversation[activeConversation.id] ?? [];

  const logAction = (action: string, payload?: string) => {
    console.log('[chat-page-action]', { action, payload });
  };

  const handleSendMessage = () => {
    const text = draftMessage.trim();
    if (!text) {
      return;
    }

    logAction('send-message', text);
    setDraftMessage('');
  };

  const handleToggleTradeDetails = () => {
    const nextValue = !isTradeDetailsOpen;
    setIsTradeDetailsOpen(nextValue);
    logAction('toggle-trade-details', nextValue ? 'open' : 'closed');
  };

  return (
    <section className="h-[calc(100dvh-98px)] overflow-hidden rounded-b-xl border-x border-b border-[#dfe3e8] bg-[#f2f4f7] px-0 pb-0 pt-0 md:h-[calc(100dvh-88px)]">
      <div className="relative grid h-full w-full grid-cols-1 overflow-hidden border-t border-[#d9e0e7] bg-[#f6f8fa] lg:grid-cols-[1fr_1.45fr]">
        <section className="flex h-full flex-col border-b border-r border-[#d9e0e7] bg-white lg:border-b-0">
          <div className="border-b border-[#dfe5eb] px-5 py-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#1f2a44]">
              Messages
            </h1>
            <div className="mt-3 relative">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa8b5]" />
              <input
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search chats..."
                className="h-11 w-full rounded-xl bg-[#eff3f7] pl-10 pr-3 text-sm font-medium text-[#1f2a44] outline-none ring-1 ring-[#e2e8ef] placeholder:text-[#96a3b1] focus:ring-[#b7c6d6]"
              />
            </div>
          </div>

          <ul className="flex-1 divide-y divide-[#edf1f4] overflow-y-auto">
            {visibleConversations.map((conversation) => {
              const isActive = conversation.id === activeConversation.id;

              return (
                <li key={conversation.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveConversationId(conversation.id);
                      logAction('select-conversation', conversation.id);
                    }}
                    className={`relative flex w-full items-start gap-3 px-5 py-4 text-left transition ${isActive ? 'bg-[#f6f9f6]' : 'bg-white hover:bg-[#f8fafc]'
                      }`}
                  >
                    {isActive ? (
                      <span className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-[#7fa87f]" />
                    ) : null}

                    <div className="relative mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#f0d3bc] to-[#b78f72] text-xs font-bold text-[#2f2a25]">
                      {conversation.initials}
                      {conversation.activeNow ? (
                        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#2cc46a]" />
                      ) : null}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-base font-extrabold text-[#1f2a44]">
                          {conversation.name}
                        </p>
                        <p className="shrink-0 text-[11px] font-semibold text-[#97a4b2]">
                          {conversation.timeLabel}
                        </p>
                      </div>
                      <p className="mt-1 truncate text-sm font-medium text-[#7a8897]">
                        {conversation.preview}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className={`flex h-full min-h-0 flex-col border-b border-r border-[#d9e0e7] bg-[#f4f7f9] xl:border-b-0 xl:transition-[padding-right] xl:duration-300 xl:ease-out ${isTradeDetailsOpen ? 'xl:pr-[360px]' : 'xl:pr-0'
            }`}
        >
          <header className="flex items-center justify-between border-b border-[#dbe3ea] bg-white px-5 py-4">
            <div className="flex items-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-[#1f2a44]">
                {activeConversation.name}
              </h2>
            </div>

            <div className="flex items-center gap-3 text-[#617084]">
              <button
                type="button"
                onClick={() => {
                  setIsTradeDetailsOpen(true);
                  logAction('open-chat-info');
                }}
                className="grid h-8 w-8 place-items-center rounded-full transition hover:bg-[#edf2f7]"
                aria-label="Conversation info"
              >
                <InfoIcon className="h-4 w-4" />
              </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="mx-auto w-fit rounded-full bg-[#e7eef4] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[#6f8193]">
              Wednesday, Oct 25
            </div>

            <div className="mt-5 space-y-5">
              {threadMessages.map((message) => {
                const isMe = message.sender === MessageSender.Me;

                return (
                  <article
                    key={message.id}
                    className={`max-w-[82%] ${isMe ? 'ml-auto text-right' : ''}`}
                  >
                    <div
                      className={`inline-block rounded-3xl px-5 py-4 text-left text-base leading-6 ${isMe
                          ? 'bg-[#89a88a] text-white'
                          : 'bg-white text-[#2b394c] shadow-[0_1px_2px_rgba(25,35,50,0.06)] ring-1 ring-[#e6ebf0]'
                        }`}
                    >
                      {message.text}
                    </div>
                    <p className="mt-2 text-[11px] font-semibold text-[#9aa8b5]">
                      {message.time}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <footer className="border-t border-[#dbe3ea] bg-white px-4 py-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => logAction('chat-add')}
                className="grid h-9 w-9 place-items-center rounded-full text-[#607189] transition hover:bg-[#edf2f7]"
                aria-label="Add attachment"
              >
                <PlusIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => logAction('chat-attach-file')}
                className="grid h-9 w-9 place-items-center rounded-full text-[#607189] transition hover:bg-[#edf2f7]"
                aria-label="Attach file"
              >
                <PaperclipIcon className="h-5 w-5" />
              </button>

              <div className="relative flex-1">
                <input
                  value={draftMessage}
                  onChange={(event) => setDraftMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  type="text"
                  placeholder="Type a message..."
                  className="h-11 w-full rounded-full bg-[#eef2f7] pl-4 pr-12 text-sm font-semibold text-[#253042] outline-none ring-1 ring-[#e2e8ef] placeholder:text-[#9aa8b5] focus:ring-[#b7c6d6]"
                />
                <button
                  type="button"
                  onClick={handleSendMessage}
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-[#7ea27d] transition hover:bg-[#e4ebe2]"
                  aria-label="Send message"
                >
                  <SendIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </footer>
        </section>

        <button
          type="button"
          onClick={handleToggleTradeDetails}
          aria-label={
            isTradeDetailsOpen ? 'Hide trade details' : 'Show trade details'
          }
          className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-l-xl border border-r-0 border-[#d9e0e7] bg-white px-2 py-3 text-[#607189] shadow-sm transition hover:bg-[#f2f5f8] xl:block"
        >
          <span className="inline-block text-lg font-bold leading-none">
            {isTradeDetailsOpen ? '>' : '<'}
          </span>
        </button>

        <aside
          className={`absolute right-0 top-0 z-10 hidden h-full w-[360px] min-h-0 flex-col overflow-y-auto border-l border-[#d9e0e7] bg-[#f7f9fb] p-5 transition-transform duration-300 ease-out xl:flex ${isTradeDetailsOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <h3 className="text-3xl font-extrabold tracking-tight text-[#1f2a44]">
            Trade Details
          </h3>

          <div className="mt-4 space-y-3">
            <article className="rounded-3xl bg-[#edf2f2] p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#94a2af]">
                Your Offering
              </p>
              <p className="mt-1 text-xl font-extrabold text-[#1f2a44]">
                English Tutoring
              </p>
              <p className="text-sm font-semibold text-[#7a8897]">
                4 sessions (60 min each)
              </p>
            </article>

            <article className="rounded-3xl bg-[#edf2f2] p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#94a2af]">
                David&apos;s Offering
              </p>
              <p className="mt-1 text-xl font-extrabold text-[#1f2a44]">
                Car Repair Service
              </p>
              <p className="text-sm font-semibold text-[#7a8897]">
                Transmission inspection & fix
              </p>
            </article>
          </div>

          <div className="mt-5">
            <p className="text-sm font-extrabold uppercase tracking-wide text-[#8e9cab]">
              Status
            </p>
            <span className="mt-2 inline-flex rounded-full bg-[#f6ebbb] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#9e820b]">
              Proposal Pending
            </span>
          </div>

          <button
            type="button"
            onClick={() => logAction('accept-trade-proposal')}
            className="mt-5 rounded-full bg-[#87a587] px-5 py-3 text-base font-extrabold text-white transition hover:bg-[#789578]"
          >
            Accept Trade Proposal
          </button>
          <button
            type="button"
            onClick={() => logAction('modify-trade-details')}
            className="mt-3 rounded-full bg-[#e9edf2] px-5 py-3 text-base font-extrabold text-[#4b5b70] transition hover:bg-[#dfe6ed]"
          >
            Modify Details
          </button>

          <div className="mt-6 space-y-3 border-t border-[#dfe5eb] pt-4 text-sm font-semibold text-[#738194]">
            <p className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Next possible: Oct 28, 2023
            </p>
            <p className="flex items-center gap-2">
              <LocationIcon className="h-4 w-4" />
              Los Angeles, CA
            </p>
          </div>

          <div className="mt-auto rounded-xl bg-[#eef3ee] p-3 text-sm font-semibold text-[#799079]">
            <p className="flex items-center gap-2 font-extrabold">
              <ShieldIcon className="h-4 w-4" />
              Verified Exchange Guarantee protected
            </p>
            <p className="mt-2 text-xs font-bold text-[#8ca08c]">
              Learn more about safe swapping
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ChatPage;
