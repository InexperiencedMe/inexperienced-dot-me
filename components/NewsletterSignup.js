"use client";
import { Card } from "@/components/Card";
import { useState } from "react";
import { LuMail, LuMailCheck } from "react-icons/lu";


export const NewsletterSignup = () => {
    const [success, setSuccess] = useState(undefined);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const email = event.target.email.value;
  
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
  
        if (res.ok) {
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      } catch (error) {
        setSuccess(false);
      }
  
      event.target.email.value = '';
    };
  
    return (
      <div className="flex flex-col gap-4 place-content-center items-center justify-center w-fit">
        {success === undefined ? (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row gap-2">
              <input
                className="p-3 rounded-lg min-w-0 bg-background-secondary accent-accent w-fit"
                type="email"
                name="email"
                required
                placeholder="E-mail"
              />
              <button
                className="hidden sm:flex bg-background p-3 rounded-lg hover:opacity-50 hover:cursor-pointer text-white"
                name="submit"
                type="submit"
              >
                Subscribe
              </button>
              <button
                className="flex sm:hidden bg-background p-3 rounded-lg hover:opacity-50 hover:cursor-pointer text-white"
                name="submit"
                type="submit"
              >
                <LuMail size={24} />
              </button>
            </div>
          </form>
        ) : success ? (
          <Card>
            <div className="w-full flex flex-row gap-4">
              Subscribed!
              <LuMailCheck size={24} />
            </div>
          </Card>
        ) : (
          <Card>
            <div className="w-full flex flex-row gap-4 text-red-500">
              Subscription failed. Please try again.
            </div>
          </Card>
        )}
      </div>
    );
  };
  