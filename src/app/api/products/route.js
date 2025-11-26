// /app/api/products/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();

    console.log("New Product Added:", data);

    return NextResponse.json(
      { message: "Product added" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
