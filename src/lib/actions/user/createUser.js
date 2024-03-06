"use server";
import { db } from "@/lib/db";
import { registerSchema } from "@/lib/schemas/authentication";
import { getUserByEmail } from "@/lib/utils/auth/getUser";
import { hash } from "bcryptjs";

export default async function createUser(userData) {
  try {
    const isValid = await registerSchema.isValid(userData);
    if (!isValid) {
      return {
        success: false,
        message: "User data in invalid!",
      };
    }
    const { fullName, email, password } = userData;

    const existUser = await getUserByEmail(email);

    if (existUser) {
      return {
        success: false,
        message: "User is already exist!",
      };
    }

    const hasdedPass = await hash(password, 10);

    await db.user.create({
      data: {
        name: fullName,
        email,
        password: hasdedPass,
      },
    });

    return {
      success: true,
      message: "User is created successfully",
    };
  } catch (err) {
    console.log("Error (createUser.js > line: 42):", err);
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}
