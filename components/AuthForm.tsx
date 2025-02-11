"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; //define a form https://ui.shadcn.com/docs/components/form
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";

import { authFormSchema } from "@/lib/utils";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. Define your form. From https://ui.shadcn.com/docs/components/form
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    // console.log(values);

    setLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href="/"
          className=" cursor-pointer gap-1 px-4  items-center flex"
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Finnance logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Finnance
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Log In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please, enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PLAID LINK */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <Button type="submit" className="form-btn">
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />&nbsp;Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Log In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
