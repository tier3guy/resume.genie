"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { vidaloka } from "@/lib/fonts";
import { Input } from "@/components/ui/input";
import { AddWaitLister } from "@/actions/join-waitlist";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AvatarCircles, fakeAvatars } from "@/components/magicui/avatar-circles";

export default function JoinWaitlistForm() {
    const [, setMsg] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const onJoinHandler = async () => {
        setLoading(true);
        const resp = await AddWaitLister(name, email);
        if(resp){
            setMsg(resp.message);
            setLoading(false);
        }
    }

    return (
        <div className="w-full h-full grid place-content-center bg-white">
            <div className="w-[55%] flex items-center justify-center flex-col m-auto">
                <div className="text-center">
                    <h1 className={`text-4xl font-bold text-slate-700 ${vidaloka.className}`}>Join our journey to get early access</h1>
                    <p className="text-slate-500 mt-4">Join our extensive waitlist today to spark connection and get notified when we launch 🎉</p>
                </div>
                <div className="my-4">
                    <AvatarCircles avatarUrls={fakeAvatars} numPeople={99}/>
                </div>
                <div className="my-4 flex flex-col gap-3 w-full">
                    <Input placeholder="Tell us your name..." value={name} onChange={(e) => setName(e.target.value)}/>
                    <Input placeholder="Enter your email address..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <ShimmerButton className="bg-slate-700 flex items-center gap-2 py-2" onClick={onJoinHandler} loading={loading}>
                    <p className={cn(vidaloka.className, "px-4")}>Join the Waitlist</p>
                </ShimmerButton>
                <div className="w-full my-4 border-t py-4">
                    <p className="text-center text-slate-400">{`By clicking "Join the Waitlist you agree to our"`} <span className="font-semibold text-slate-500">Privacy Policy</span> and <span className="font-semibold text-slate-500">Terms of Use</span>.</p>
                </div>
            </div>
        </div>
    );
}
