import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CircleAlert,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import { InstagramIcon } from './icons'

/**
 * Form delivery.
 *
 * Default behavior: submitting opens the visitor's email app with everything
 * they typed pre-filled and addressed to pixelsyncweb@gmail.com — they review,
 * press send, done. No backend required, nothing is ever faked.
 *
 * Prefer silent delivery? Set VITE_FORM_ENDPOINT in a .env file (Formspree,
 * Web3Forms, a serverless function…) and the form POSTs JSON there instead.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
const CONTACT_EMAIL = 'pixelsyncweb@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/pixelsyncweb/'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error' | 'mailto'

interface FormValues {
  name: string
  email: string
  projectType: string
  brief: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const PROJECT_TYPES = [
  'Web Design',
  'Web App',
  'UI/UX Design',
  'Full-Stack Development',
  'Other / Not Sure',
] as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const initialValues: FormValues = {
  name: '',
  email: '',
  projectType: '',
  brief: '',
  message: '',
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (values.name.trim().length < 2) {
    errors.name = 'Please tell us your name.'
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.projectType) {
    errors.projectType = 'Please choose a project type.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Give us a little more — at least 10 characters.'
  }
  return errors
}

function buildMailtoUrl(values: FormValues): string {
  const trimmed = {
    name: values.name.trim(),
    email: values.email.trim(),
    projectType: values.projectType,
    brief: values.brief.trim(),
    message: values.message.trim(),
  }
  const subject = `PixelSync project inquiry — ${trimmed.name}${
    trimmed.projectType ? ` · ${trimmed.projectType}` : ''
  }`
  const body = [
    'Hi PixelSync,',
    '',
    "I'd like to talk about a project. Here are the details:",
    '',
    `Name: ${trimmed.name}`,
    `Email: ${trimmed.email}`,
    `Project type: ${trimmed.projectType}`,
    `Website / Idea brief: ${trimmed.brief || '—'}`,
    '',
    'Message:',
    trimmed.message,
    '',
    '— Sent from the PixelSync Studio website',
  ].join('\n')
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = CONTACT_EMAIL
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
      } catch {
        /* clipboard unavailable — the address is printed right next to the button */
      }
      document.body.removeChild(textarea)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-linestrong px-3 py-2 text-[0.8rem] font-semibold text-dim transition-colors duration-300 hover:border-accent hover:text-accent"
      aria-label={copied ? 'Email address copied' : `Copy email address ${CONTACT_EMAIL}`}
    >
      {copied ? (
        <Check size={14} aria-hidden="true" className="text-accent" />
      ) : (
        <Copy size={14} aria-hidden="true" />
      )}
      {copied ? 'Copied' : 'Copy address'}
    </button>
  )
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [mailtoUrl, setMailtoUrl] = useState('')

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    const mailto = buildMailtoUrl(values)

    if (FORM_ENDPOINT) {
      setStatus('submitting')
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...values, name: values.name.trim(), email: values.email.trim() }),
        })
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
        setStatus('success')
        setValues(initialValues)
        return
      } catch {
        // Endpoint failed — fall back to the visitor's email app instead of a dead end.
        window.location.href = mailto
        setMailtoUrl(mailto)
        setStatus('mailto')
        return
      }
    }

    // Default: hand off to the visitor's email app, pre-filled and addressed.
    window.location.href = mailto
    setMailtoUrl(mailto)
    setStatus('mailto')
  }

  return (
    <section id="contact" className="section section-line-top relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Ambient emerald light, anchored to the form side */}
      <div
        className="glow-orb -right-40 top-1/3 h-[30rem] w-[30rem]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at center, var(--glow) 0%, transparent 70%)' }}
      />

      <div className="wrap relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Persuasion column */}
        <div className="flex flex-col gap-7 lg:col-span-5">
          <span className="eyebrow">
            <span className="eyebrow-index">07</span>
            <span className="eyebrow-rule" aria-hidden="true" />
            Contact
          </span>
          <h2 id="contact-heading" className="h-display text-[clamp(2.4rem,4.8vw,3.6rem)]">
            Have an Idea?<br />
            Let&apos;s <span className="text-accent">Build It Together.</span>
          </h2>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-dim">
            Tell us about your idea, your business, or the digital experience
            you want to create. We&apos;d love to hear about it.
          </p>

          {/* Instagram — the always-on alternative */}
          <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-surface p-6">
            <span aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative flex flex-col gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accentsoft text-accent">
                <InstagramIcon size={24} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-[1.3rem] font-semibold tracking-tight text-ink">
                  Prefer Instagram?
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-dim">
                  DM us the word <strong className="font-semibold text-accent">BUILD</strong> and
                  let&apos;s talk about your website.
                </p>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary btn-sm w-fit"
              >
                @pixelsyncweb
                <ArrowRight aria-hidden="true" size={16} strokeWidth={2.25} className="btn-arrow" />
              </a>
            </div>
          </div>

          {/* Direct email + location */}
          <div className="flex flex-col gap-3 text-sm text-faint">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex w-fit items-center gap-2 font-medium text-dim transition-colors duration-300 hover:text-accent"
            >
              <Mail size={14} aria-hidden="true" className="text-accent" />
              <span className="underline decoration-linestrong underline-offset-4 transition-colors duration-300 group-hover:decoration-accent">
                {CONTACT_EMAIL}
              </span>
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin size={14} aria-hidden="true" className="text-accent" />
              Kerala, India
            </p>
          </div>
        </div>

        {/* Form column */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-5 py-8 text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accentsoft">
                  <CheckCircle2 size={30} strokeWidth={1.8} className="text-accent" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Inquiry sent<span className="text-accent">.</span>
                </h3>
                <p className="max-w-sm leading-relaxed text-dim">
                  Thanks for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle')
                    setValues(initialValues)
                  }}
                  className="btn btn-ghost btn-sm"
                >
                  Send another inquiry
                </button>
              </div>
            ) : status === 'mailto' ? (
              <div className="flex flex-col items-center gap-5 py-6 text-center" role="status">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accentsoft">
                  <Mail size={28} strokeWidth={1.8} className="text-accent" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Your email app is opening<span className="text-accent">.</span>
                </h3>
                <p className="max-w-md leading-relaxed text-dim">
                  Everything you typed is pre-filled and addressed to{' '}
                  <span className="font-semibold text-ink">{CONTACT_EMAIL}</span> — just press
                  send in your email app. Nothing leaves your device until you do.
                </p>
                <CopyEmailButton />
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a href={mailtoUrl} className="btn btn-primary btn-sm">
                    Open your email app again
                    <ArrowRight aria-hidden="true" size={16} strokeWidth={2.25} className="btn-arrow" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn btn-ghost btn-sm"
                  >
                    Edit the inquiry
                  </button>
                </div>
                <p className="text-sm text-faint">
                  No email app? DM us the word <strong className="text-dim">BUILD</strong> on{' '}
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-accent underline underline-offset-2"
                  >
                    @pixelsyncweb
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label">
                      Name <span aria-hidden="true" className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={values.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className="field-input"
                      placeholder="Your name"
                    />
                    {errors.name ? (
                      <p id="name-error" role="alert" className="field-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="field-label">
                      Email <span aria-hidden="true" className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className="field-input"
                      placeholder="you@example.com"
                    />
                    {errors.email ? (
                      <p id="email-error" role="alert" className="field-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="field-label">
                    Project type <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={values.projectType}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                    className="field-input"
                  >
                    <option value="">Choose a project type…</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType ? (
                    <p id="projectType-error" role="alert" className="field-error">
                      <CircleAlert size={13} aria-hidden="true" />
                      {errors.projectType}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="brief" className="field-label">
                    Website / Idea brief <span className="optional">(optional)</span>
                  </label>
                  <input
                    id="brief"
                    name="brief"
                    type="text"
                    value={values.brief}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="e.g. studio site, booking app, portfolio…"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    Message <span aria-hidden="true" className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="field-input min-h-[7.5rem] resize-y"
                    placeholder="Tell us about the product you want to build…"
                  />
                  {errors.message ? (
                    <p id="message-error" role="alert" className="field-error">
                      <CircleAlert size={13} aria-hidden="true" />
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                {status === 'error' ? (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-danger/35 bg-danger/10 p-4 text-sm leading-relaxed text-ink"
                  >
                    <CircleAlert size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-danger" />
                    <span>
                      Something went wrong while sending — your inquiry is still here in the form.
                      Please try again, or email us directly at{' '}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-semibold text-accent underline underline-offset-2"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </span>
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} aria-hidden="true" className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Project Inquiry
                      <Send size={17} strokeWidth={2.25} aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="text-center text-[0.75rem] leading-relaxed text-faint">
                  This opens your email app with the inquiry pre-filled and addressed to{' '}
                  <span className="font-medium text-dim">{CONTACT_EMAIL}</span> — nothing is sent
                  until you press send.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
