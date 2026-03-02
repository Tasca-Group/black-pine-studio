import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind Pflichtfelder.' },
        { status: 400 }
      )
    }

    // If Resend API key is configured, send email
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.TO_EMAIL || 'marcel@tasca-group.com',
        subject: `Neue Kontaktanfrage von ${name}${company ? ` (${company})` : ''}`,
        html: `
          <h2>Neue Kontaktanfrage über blackpine-studio.com</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Unternehmen:</strong> ${company}</p>` : ''}
          ${service ? `<p><strong>Gewünschte Leistung:</strong> ${service}</p>` : ''}
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      })
    } else {
      // Log to console in development
      console.log('Contact form submission:', { name, email, phone, company, service, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Interner Serverfehler.' },
      { status: 500 }
    )
  }
}
