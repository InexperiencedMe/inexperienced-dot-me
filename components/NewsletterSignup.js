"use client";
import { Card } from "@/components/Card";
import { useState } from "react";
import { LuMailPlus, LuMailCheck } from "react-icons/lu";

export const NewsletterSignup = () => {
  const [success, setSuccess] = useState(undefined);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const email = event.target.email.value;
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    }

    event.target.firstName.value = '';
    event.target.email.value = '';
  };

  return (
    <div className="flex flex-col gap-4 place-content-center items-center justify-center mt-12">
      {success === undefined ? (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row gap-2 justify-center">
            <input
              className="p-3 rounded-md min-w-0 bg-background-secondary border-2 border-foreground-secondary w-1/3
                         placeholder:text-foreground-secondary focus:outline-none focus:border-foreground"
              type="text"
              name="firstName"
              required
              placeholder="First Name"
              autoComplete="off"
            />

            <input
              className="p-3 rounded-md min-w-0 bg-background-secondary border-2 border-foreground-secondary w-1/3
                         placeholder:text-foreground-secondary focus:outline-none focus:border-foreground"
              type="email"
              name="email"
              required
              placeholder="E-mail"
              autoComplete="off"
            />

            <button
              className="hidden sm:flex p-3 rounded-md hover:opacity-70 hover:cursor-pointer text-foreground"
              name="submit"
              type="submit">
              Sign up
            </button>

            <button
              className="flex sm:hidden p-3 rounded-md hover:opacity-70 hover:cursor-pointer text-foreground"
              name="submit"
              type="submit"
            >
              <LuMailPlus size={24} />
            </button>
          </div>
        </form>
      ) : success ? (
        <Card>
          <div className="w-full flex flex-row gap-4">
            Welcome. We're glad to have you
            <LuMailCheck size={24} />
          </div>
        </Card>
      ) : (
        <Card>
          <button
            onClick={() => setSuccess(undefined)}
            className="w-full flex flex-row gap-4 text-red-500 hover:opacity-70"
          >
            Subscription failed. Click to try again.
          </button>
        </Card>
      )}
    </div>
  );
};
