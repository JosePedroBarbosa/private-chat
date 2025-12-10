"use client"
import { useUsername } from "@/hooks/use-username";
import { useSearchParams } from "next/dist/client/components/navigation";
import { Suspense } from "react";
import { Lock, Zap, Users, Eye, Trash2, MessageSquare, ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <Suspense>
      <Lobby />
    </Suspense>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Lobby() {
  const searchParams = useSearchParams();
  const wasDestroyed = searchParams.get("destroyed") === "true";
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-green-500">{">"}private_chat</span>
            </div>
            <a 
              href="/create"
              className="bg-green-500 text-black px-6 py-2 text-sm font-bold hover:bg-green-400 transition-colors"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen px-4 sm:px-6 lg:px-8 flex items-start justify-center pt-32 sm:pt-40 lg:pt-48">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Secure. Private.{" "}
              <span className="text-green-500">Self-Destructing.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Have confidential conversations that leave no trace. Messages are encrypted end-to-end and automatically destroyed when your session ends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/create"
                className="bg-green-500 text-black px-8 py-4 text-base font-bold hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
              >
                CREATE SECURE ROOM
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Built for Privacy-First Communication
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every feature designed with your security and privacy in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-green-500" />}
              title="End-to-End Encryption"
              description="Military-grade encryption ensures only you and your recipients can read messages."
            />
            <FeatureCard
              icon={<Trash2 className="w-8 h-8 text-green-500" />}
              title="Auto-Destruct"
              description="All messages are permanently deleted when the room is closed. No traces left behind."
            />
            <FeatureCard
              icon={<Eye className="w-8 h-8 text-green-500" />}
              title="No Registration"
              description="Start chatting immediately without creating an account or providing personal information."
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-green-500" />}
              title="Real-Time Messaging"
              description="Instant message delivery with WebSocket technology for seamless conversations."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-green-500" />}
              title="Multi-User Rooms"
              description="Create private rooms and share secure links with multiple participants."
            />
            <FeatureCard
              icon={<MessageSquare className="w-8 h-8 text-green-500" />}
              title="Zero Data Retention"
              description="We don't store your messages on our servers. Your privacy is our priority."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-zinc-400 text-lg">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <Step
              number="01"
              title="Create a Room"
              description="Click the button and instantly generate a secure, encrypted chat room."
            />
            <Step
              number="02"
              title="Share the Link"
              description="Send the unique room link to your intended participants through any channel."
            />
            <Step
              number="03"
              title="Chat Securely"
              description="Have your conversation knowing it will be destroyed when you're done."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-green-500">{">"}private_chat</span>
            </div>
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Private Chat. Encrypted. Self-destructing. Anonymous.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="text-center">
      <div className="text-6xl font-bold text-green-500/60 mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

export default Page;