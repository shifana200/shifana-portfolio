import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { name, email, message } = await request.json();

          if (!name || !email || !message) {
            return new Response(
              JSON.stringify({
                error: "All fields are required.",
              }),
              {
                status: 400,
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
          }

          const { error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["shifanasaleem50@gmail.com"],
            subject: `Portfolio enquiry from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          });

          if (error) {
            console.error(error);

            return new Response(
              JSON.stringify({
                error: "Failed to send email.",
              }),
              {
                status: 500,
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
          }

          return new Response(
            JSON.stringify({
              success: true,
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
        } catch (error) {
          console.error(error);

          return new Response(
            JSON.stringify({
              error: "Something went wrong.",
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
        }
      },
    },
  },
});