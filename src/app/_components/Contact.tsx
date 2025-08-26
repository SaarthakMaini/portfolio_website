"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import SocialMedia from './SocialMedia'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center bg-base-200 py-16">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6 w-[650px]"
        >
          <h1 className="text-5xl font-bold mb-12 text-center">
            Work With Saarthak
          </h1>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="w-full rounded-md border-2 border-black px-5 py-4 text-lg font-semibold placeholder:text-lg placeholder:font-semibold"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="w-full rounded-md border-2 border-black px-5 py-4 text-lg font-semibold placeholder:text-lg placeholder:font-semibold"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Phone Number"
                    {...field}
                    className="w-full rounded-md border-2 border-black px-5 py-4 text-lg font-semibold placeholder:text-lg placeholder:font-semibold"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <textarea
                    placeholder="Message"
                    {...field}
                    className="w-full rounded-md border-2 border-black px-5 py-4 min-h-[150px] text-lg font-semibold placeholder:text-lg placeholder:font-semibold"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full hover:bg-neutral-700 rounded-md font-bold text-lg py-4 transition-colors duration-100"
          >
            Submit
          </Button>
          <div className="flex justify-center mt-6 scale-140">
            <SocialMedia />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
