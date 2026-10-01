# Kinara Hair Studio · Instant Booking

> Turns "can I book with you?" into "you're booked" in one step, and handles confirmations, reminders, cancellations and waitlist refills so the owner doesn't have to.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-6-DB7093?logo=styledcomponents&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

Built for the **Lovable Challenge**: rebuild the moment a customer inquiry becomes a confirmed booking.

<!-- Add a screenshot or GIF once you have one: ![Demo](docs/demo.gif) -->

## The client

| | |
|---|---|
| **Business** | Kinara Hair Studio |
| **Owner** | Meera, a solo stylist running a one-chair studio |
| **Location** | Indiranagar, Bengaluru |
| **Hours** | Tue to Sun, 10 AM to 7 PM, closed 2 to 3 PM for lunch, closed Mondays |
| **Services** | Haircut & finish, Global colour, Hair spa, Bridal trial |

**Quirks of the business**
- **Saturdays fill up days in advance.** Walk-in demand is turned away because nobody can answer in time.
- **About 1 in 5 clients no-show,** which leaves an empty chair and lost income.
- **Meera is the whole team.** She answers booking DMs with colour on her gloves, mid-appointment.

## The problem solved

**Before:** a client DMs "free Saturday?". Meera replies hours later, they trade times, she confirms, she remembers to remind them, and if they cancel she starts over.

**After:** the client sees live availability, books in one screen and is confirmed instantly. Reminders go out automatically. Unconfirmed slots are released and refilled from a waitlist. Meera does none of it.

## Features

**Customer side (front door)**
- Live availability by service, day and time. No messaging back and forth.
- Instant confirmation with a WhatsApp message (simulated).
- Full slots show **Join waitlist** instead of a dead end.
- Self-serve cancellation from the confirmation screen.

**Owner side (follow-through)**
- Automatic confirmations and two reminders: 24 hours and 3 hours before ("Reply Y to keep your slot").
- Slots are released when a client doesn't reply to the reminder.
- Released or cancelled slots go to the first waitlisted client and are confirmed on acceptance.
- A live activity log of everything the studio handled, plus a running **minutes saved** counter.

### Estimated owner time saved per automation

| Automation | Minutes saved |
|---|---|
| Instant confirmation (replaces the DM exchange) | 4 |
| Reminder scheduling | 3 |
| Waitlist refill after a cancellation | 6 |
| Releasing an unconfirmed slot | 5 |

These are the estimates the demo's counter uses. They are assumptions, not measured data.

## Demo walkthrough (under 3 minutes)

1. **Customer view:** pick *Global colour*, then a Saturday. Show that most slots are full.
2. Pick a full slot and **join the waitlist**.
3. Book an open slot and show the instant confirmation.
4. Switch to **Meera's view:** show the activity log and the minutes-saved counter.
5. Click **Simulate: no reply to reminder** on an unconfirmed booking and watch the slot release and refill from the waitlist.
6. Close on the before/after: zero DMs answered.

## Tech stack

- **React 19** with function components and hooks
- **TypeScript** in strict mode
- **Vite** for dev server and bundling
- **styled-components 6** with a typed theme and transient (`$`) props
- State via `useReducer` and Context, with no external state library

## Getting started

Requires **Node 20.19+** (an `.nvmrc` is included).

```bash
git clone https://github.com/deekshitha0405/Hair-Studio.git
cd Hair-Studio
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173.

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run typecheck` | Type-check without emitting |
| `npm run build` | Type-check, then create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```
src/
├─ App.tsx                    Wires theme, store and the two views
├─ types.ts                   Shared domain types and the Action union
├─ data.ts                    Business info, services, date and slot helpers
├─ theme.ts · styled.d.ts     Design tokens and typed styled-components theme
├─ ui/                        Reusable styled primitives
│  └─ Panel, Button, Chip, Input, Banner, List, Stat, StatusTag, GlobalStyle, animations
├─ state/                     reducer, initialState, selectors, StoreContext
└─ components/
   ├─ layout/                 Header, ViewSwitch, PageIntro
   ├─ booking/                BookingFlow and its small parts, plus useBookingForm
   └─ owner/                  OwnerDashboard, StatsRow, UpcomingList, BookingRow, ActivityLog
```

## How it works

- **Single source of truth:** a reducer in `state/reducer.ts` handles three actions: `book`, `waitlist` and `free`. Both views read from the same store, so a customer action shows up instantly on the owner's side.
- **Availability:** `data.ts` generates a deterministic busy pattern (Saturdays are nearly full) and `state/selectors.ts` combines it with live bookings.
- **Waitlist refill:** `free` removes a booking and, if someone is waiting for that exact slot, confirms them in the same step and logs it.
- **Booking form logic** lives in the `useBookingForm` hook, so the components stay presentational.

## Limitations and next steps

This is a front-end prototype. All data is in memory and resets on refresh.

- Confirmations and reminders are simulated. A real version would call the WhatsApp Business API or an SMS provider.
- Add a backend and database for persistence and real-time availability.
- Add rescheduling, deposits for high-risk bookings, and a lead follow-up sequence.
- Add two-way calendar sync with Google Calendar.

## Challenge submission checklist

- [x] Business archetype with name, location and realistic quirks
- [ ] Lovable build with the project link set to public: `<add link>`
- [ ] Demo video under 3 minutes: `<add link>`
- [ ] Social post tagging @Lovable and #lovablechallenge: `<add link>`
- [ ] Bonus: process walkthrough video: `<add link>`

## License

[MIT](LICENSE)
