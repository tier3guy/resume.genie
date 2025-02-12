import Navbar from "@/components/navbar";
import JoinWaitlistForm from "@/components/forms/join-waitlist-form";
import JoinWaitlistCard from "@/components/cards/join-waitlist-card";

export default function Home() {
    return (
        <div className="bg-slate-50 h-screen overflow-hidden flex flex-col w-full">
            <Navbar />
            <div className="flex-1 flex flex-col md:flex-row gap-5 overflow-y-auto">
                <div className="w-full md:w-1/2">
                    <JoinWaitlistCard />
                </div>
                <div className="w-full md:w-1/2">
                    <JoinWaitlistForm />
                </div>
            </div>
        </div>
    );
}
