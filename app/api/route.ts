import { NextRequest, NextResponse } from "next/server"

// api keys or whatever

export async function POST(req: NextRequest) { 
    const { name, email } = await req.json()

    console.log({name, email})

    return new NextResponse("OK", {status: 200})
}

export async function GET() {

    return new NextResponse("ok", {status: 200})
}