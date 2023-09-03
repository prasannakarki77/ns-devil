import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExist) {
    return NextResponse.json(
      { message: "User already registered!" },
      { status: 409 }
    );
  }
  const user = await prisma.user.create({
    data: {
      ...body,
      password: hashedPassword,
    },
  });
  if (user) {
    return NextResponse.json(user);
  }
  return NextResponse.error();
}
