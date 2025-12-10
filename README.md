# 🔒 Private Chat

A secure, real-time, self-destructing chat application built with Next.js, Elysia, and Upstash.

## ✨ Features

- **Real-time Messaging**: Instant message delivery using WebSocket connections via Upstash Realtime
- **Self-Destructing Rooms**: Chat rooms automatically expire after 10 minutes
- **Secure Authentication**: Token-based authentication with HTTP-only cookies
- **Anonymous Identity**: Auto-generated usernames with animal names and unique IDs
- **Two-Person Limit**: Rooms support maximum 2 concurrent users
- **Message History**: Full chat history persists during room lifetime
- **Responsive Design**: Modern dark UI built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Elysia (high-performance Bun framework)
- **Real-time**: Upstash Realtime (WebSocket)
- **Database**: Upstash Redis
- **Styling**: Tailwind CSS 4
- **State Management**: React Query (TanStack Query)
- **Validation**: Zod

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Upstash account

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd real-time-chat

# Install dependencies
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory:

```env
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
NEXT_PUBLIC_API_URL=your_production_api or localhost:3000
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 How It Works

1. **Create a Room**: Click "CREATE SECURE ROOM" on the home page
2. **Share the Link**: Copy the room URL and share with another person
3. **Chat Securely**: Both users can exchange messages in real-time
4. **Auto-Expiration**: Room and all messages are deleted after 10 minutes

## 🔐 Security

- ✅ Token-based authentication with HTTP-only cookies
- ✅ Room isolation - messages only accessible within the specific room
- ✅ Middleware protection on all API endpoints
- ✅ Auto-destruction of data when room expires

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── [[...slugs]]/
│   │   │   ├── route.ts      # Elysia API routes
│   │   │   └── auth.ts       # Authentication middleware
│   │   └── realtime/
│   │       └── route.ts      # WebSocket handler
│   ├── room/[roomId]/
│   │   └── page.tsx          # Chat interface
│   ├── page.tsx              # Home page
│   └── layout.tsx
├── components/
│   └── providers.tsx         # React Query & Realtime setup
├── hooks/
│   └── use-username.ts       # Username generation
└── lib/
    ├── redis.ts             # Redis client
    ├── realtime.ts          # Realtime schema
    └── client.ts            # API client
```

## 📝 API Endpoints

### Rooms
- `POST /api/room/create` - Create a new room
- `GET /api/room/ttl?roomId=...` - Get room TTL
- `DELETE /api/room?roomId=...` - Destroy room

### Messages
- `POST /api/messages?roomId=...` - Send a message
- `GET /api/messages?roomId=...` - Get message history

## 📚 Credits

This project was inspired by and based on the tutorial from [joschan21/nextjs16_realtime_chat](https://github.com/joschan21/nextjs16_realtime_chat). Special thanks to the original creator for the excellent tutorial on building real-time chat applications with Next.js 16.

---

Made with ❤️ for learning and development