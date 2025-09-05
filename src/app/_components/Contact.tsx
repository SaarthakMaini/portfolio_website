"use client";

import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import SocialMedia from './SocialMedia'

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
  message: z.string().min(1, "Message is required"),
});

const Contact = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    // console.log("Form values:", values);

    try{
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(res.status)
      if(res.ok){
        router.push("/thanks")
      }else{
        router.push("/404")
      }
    }catch(err : any){
      console.log(err)
    }
  }, [router]);
  
  return (
    <div className="flex items-center justify-center bg-base-200 sm:py-12 px-4 sm:px-6 lg:px-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-8 text-center">
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
                    className="w-full rounded-md border-2 border-black px-3 sm:px-4 lg:px-5 py-3 sm:py-4 
                             text-base sm:text-lg font-semibold placeholder:text-base sm:placeholder:text-lg 
                             placeholder:font-semibold"
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
                    className="w-full rounded-md border-2 border-black px-3 sm:px-4 lg:px-5 py-3 sm:py-4 
                             text-base sm:text-lg font-semibold placeholder:text-base sm:placeholder:text-lg 
                             placeholder:font-semibold"
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
                    className="w-full rounded-md border-2 border-black px-3 sm:px-4 lg:px-5 py-3 sm:py-4 
                             text-base sm:text-lg font-semibold placeholder:text-base sm:placeholder:text-lg 
                             placeholder:font-semibold"
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
                    className="w-full rounded-md border-2 border-black px-3 sm:px-4 lg:px-5 py-3 sm:py-4 
                             min-h-[120px] sm:min-h-[150px] text-base sm:text-lg font-semibold 
                             placeholder:text-base sm:placeholder:text-lg placeholder:font-semibold resize-none"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full hover:bg-neutral-700 rounded-md font-bold text-base sm:text-lg py-2 sm:py-4 
                     transition-colors duration-100"
          >
            Submit
          </Button>
          
          <div className="flex justify-center sm:mt-8">
            <div className="scale-110 sm:scale-125 lg:scale-140">
              <SocialMedia />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
