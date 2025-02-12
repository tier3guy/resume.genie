import { cn } from "@/lib/utils";
import { ChangeEventHandler } from "react";

interface InputProps{
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    className?: string;
}
export function Input({value, onChange, placeholder, className}: InputProps) {
    return <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={cn("border w-full py-2 rounded-full px-4 outline-none focus:outline-2 focus:outline-slate-600 outline-offset-1 text-slate-700", className)}
            />
}
