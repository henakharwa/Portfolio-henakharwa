// The contact form submits to Formspree (https://formspree.io) — a free,
// backend-free form endpoint. See PORTFOLIO_SETUP.md for how to create a
// form and fill in VITE_FORMSPREE_FORM_ID in your .env file.
//
// The app intentionally still works with no Formspree config: isContactFormConfigured
// is false and the contact form shows a setup notice instead of crashing.

const formId: string | undefined = import.meta.env.VITE_FORMSPREE_FORM_ID

export const isContactFormConfigured = Boolean(formId)

export const formspreeEndpoint = formId ? `https://formspree.io/f/${formId}` : null
