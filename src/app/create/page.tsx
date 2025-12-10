"use client"
import { useUsername } from "@/hooks/use-username";
import { client } from "@/lib/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/dist/client/components/navigation";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Page = () => {
    return (
        <Suspense>
            <CreateRoom />
        </Suspense>
    );
}

function CreateRoom() {
    const username = useUsername();
    const router = useRouter();
    const searchParams = useSearchParams();
    const error = searchParams.get("error");
    const wasDestroyed = searchParams.get("destroyed") === "true";

    const { mutate: createRoom, isPending } = useMutation({
        mutationFn: async () => {
            const res = await client.room.create.post();
            if (res.status === 200) {
                router.push(`/room/${res.data?.roomId}`);
            }
        },
    })

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            {/* Create Room Section */}
            <section className="min-h-[calc(100vh-64px)] px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="w-full max-w-md mx-auto space-y-8">
                        <div className="text-center space-y-2">
                            <button>
                                <Link href="/" className="text-zinc-500 hover:text-zinc-400">
                                    <span className="text-xl font-bold text-green-500">{">"}private_chat</span>

                                </Link>
                            </button>
                            <p className="text-zinc-400 mt-5">Start a new encrypted conversation</p>
                        </div>

                        {wasDestroyed && (
                            <div className="bg-red-950/50 border border-red-900 p-4 text-center">
                                <p className="text-red-500 text-sm font-bold">ROOM DESTROYED</p>
                                <p className="text-zinc-500 text-xs mt-1">
                                    All messages were permanently deleted.
                                </p>
                            </div>
                        )}

                        {error === "room-not-found" && (
                            <div className="bg-red-950/50 border border-red-900 p-4 text-center">
                                <p className="text-red-500 text-sm font-bold">ROOM NOT FOUND</p>
                                <p className="text-zinc-500 text-xs mt-1">
                                    This room may have expired or never existed.
                                </p>
                            </div>
                        )}

                        {error === "room-full" && (
                            <div className="bg-red-950/50 border border-red-900 p-4 text-center">
                                <p className="text-red-500 text-sm font-bold">ROOM FULL</p>
                                <p className="text-zinc-500 text-xs mt-1">
                                    This room is at maximum capacity.
                                </p>
                            </div>
                        )}

                        <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md">
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="flex items-center text-zinc-500 text-sm">Your identity</label>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 bg-zinc-950 border border-zinc-800 p-3 text-sm text-zinc-400 font-mono">
                                            {username}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => createRoom()}
                                    disabled={isPending}
                                    className="w-full bg-green-500 text-black p-3 text-sm font-bold hover:bg-green-400 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isPending ? "CREATING..." : "CREATE SECURE ROOM"}
                                </button>
                            </div>
                        </div>

                        <p className="text-center text-xs text-zinc-500">
                            Your room will be encrypted and automatically destroyed when the session ends.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Page;