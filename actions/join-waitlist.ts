"use server";
import { prisma } from "@/lib/db";
import { IActionResult } from "@/types/action-result.type";

export async function AddWaitLister(name: string, email: string): Promise<IActionResult> {
    if (!name || !email) return {
        status: false,
        message: "⚠️ Please fill all the necessary fields",
        data: null
    };

    const ifAlreadyExits = await prisma.waitlisters.findFirst({
        where: {
            email: email
        }
    });
    if (ifAlreadyExits) return {
        status: false,
        message: "🚫 You are already on the waitlist",
        data: null
    };

    try {
        const newWaitLister = await prisma.waitlisters.create({
            data: {
                name: name,
                email: email
            }
        });

        return {
            status: true,
            message: "You have been added to the waitlist 🎉",
            data: newWaitLister
        };
    } catch (error) {
        return {
            status: false,
            message: "❌ Internal Server Error. Please try again after sometime",
            data: error
        };
    }

}
