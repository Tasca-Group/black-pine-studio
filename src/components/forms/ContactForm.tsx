'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { services } from '@/data/services'

const contactSchema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')

    try {
      const parsed = contactSchema.safeParse(data)
      if (!parsed.success) {
        setStatus('error')
        return
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      if (!res.ok) throw new Error('Fehler beim Senden')

      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-pine/10 p-8 text-center">
        <div className="text-4xl">✅</div>
        <h3 className="mt-4 text-xl font-bold text-pine">Nachricht gesendet!</h3>
        <p className="mt-2 text-dark-gray">
          Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="mt-6">
          Neue Nachricht senden
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Name *"
          id="name"
          placeholder="Ihr Name"
          error={errors.name?.message}
          {...register('name', { required: 'Bitte geben Sie Ihren Namen ein.' })}
        />
        <Input
          label="E-Mail *"
          id="email"
          type="email"
          placeholder="ihre@email.de"
          error={errors.email?.message}
          {...register('email', { required: 'Bitte geben Sie Ihre E-Mail-Adresse ein.' })}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="Telefon"
          id="phone"
          type="tel"
          placeholder="+49 123 456 7890"
          {...register('phone')}
        />
        <Input
          label="Unternehmen"
          id="company"
          placeholder="Ihr Unternehmen"
          {...register('company')}
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-near-black">
          Gewünschte Leistung
        </label>
        <select
          id="service"
          className="w-full rounded-lg border border-cream bg-cream/50 px-4 py-3 text-near-black transition-colors focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/20"
          {...register('service')}
        >
          <option value="">Bitte wählen...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <Textarea
        label="Nachricht *"
        id="message"
        placeholder="Erzählen Sie uns von Ihrem Projekt..."
        error={errors.message?.message}
        {...register('message', { required: 'Bitte geben Sie eine Nachricht ein.' })}
      />

      {status === 'error' && (
        <p className="text-sm text-red-600">
          Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
        {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
      </Button>
    </form>
  )
}
