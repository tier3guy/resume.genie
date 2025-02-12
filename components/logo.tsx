import { cn } from "@/lib/utils";
import { poppins } from "@/lib/fonts";

export default function Logo() {
    return (
        <div className="flex flex-col items-end">
            <div className={cn(poppins.className, "flex items-center gap-1")}>
                <Square />
                <Circle />
                <Circle />
                <p className="ml-2 text-2xl font-bold text-slate-700">resume.genie</p>
            </div>
            {/* <p className="text-sm text-slate-500">by <a href="https://www.tier3guy.com" target="_blank">tier3guy</a></p> */}
        </div>
    );
}

export function Square() {
    return (
        <div className={cn("bg-slate-500 w-[20px] h-[20px]")} />
    )
}

export function Circle() {
    return (
        <div className={cn("bg-slate-500 w-[20px] h-[20px] rounded-full")} />
    )
}
