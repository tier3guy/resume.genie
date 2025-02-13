import { NextResponse } from "next/server";
import { AddWaitLister } from "@/actions/join-waitlist";

export async function POST(request: Request) {
    const { name, email } = await request.json();
    const result = await AddWaitLister(name, email);
    return NextResponse.json(result);
}
