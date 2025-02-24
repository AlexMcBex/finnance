// https://appwrite.io/docs/tutorials/nextjs-ssr-auth/step-3
// src/lib/server/appwrite.js
"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client() // start a session to access project data
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!) 
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = await cookies().get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client() 
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!); //key to allow admin access

  return {
    get account() {
      return new Account(client);
    },
    get database(){ //ADDED LINE: get access to database
      return new Databases(client) 
    },
    get user(){ //ADDED LINE: get access to users
      return new Users(client)
    }
  }
}
