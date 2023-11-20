import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Your GET request handling logic here
    return NextResponse.json({
      message: "Hello world!",
      myId: 25,
      hello: "Hello",
    });
  } catch (error) {
    return NextResponse.error();
  }
}
