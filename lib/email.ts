export type EmailRequest = { email: string; context?: string };

export async function sendNewsletterSignup(payload: EmailRequest) {
  if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
    // Placeholder for real provider
    return { provider: "convertkit", email: payload.email };
  }
  return { provider: "local", email: payload.email };
}

export async function sendContactMessage(payload: { name: string; email: string; message: string }) {
  if (process.env.CONTACT_TO_EMAIL) {
    return { provider: "email", ...payload };
  }
  return { provider: "local", ...payload };
}
