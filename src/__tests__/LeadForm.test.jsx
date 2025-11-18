import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import LeadForm from '../components/LeadForm'

// Mock config
vi.mock('../config', () => ({
  config: {
    FORM_WEBHOOK_URL: 'https://test-webhook.com/api/leads',
  },
}))

describe('LeadForm', () => {
  it('renders form fields', () => {
    render(<LeadForm />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/what's your email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    render(<LeadForm />)
    const submitButton = screen.getByRole('button', { name: /request appointment/i })
    
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/email is required/i)).toBeInTheDocument()
      expect(screen.getByText(/phone is required/i)).toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    render(<LeadForm />)
    const emailInput = screen.getByLabelText(/what's your email/i)
    const submitButton = screen.getByRole('button', { name: /request appointment/i })
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument()
    })
  })

  it('validates phone format', async () => {
    render(<LeadForm />)
    const phoneInput = screen.getByLabelText(/phone/i)
    const submitButton = screen.getByRole('button', { name: /request appointment/i })
    
    fireEvent.change(phoneInput, { target: { value: '123' } })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument()
    })
  })

  it('submits form with valid data', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    )

    render(<LeadForm />)
    
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText(/what's your email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '555-123-4567' } })
    
    const submitButton = screen.getByRole('button', { name: /request appointment/i })
    fireEvent.click(submitButton)
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://test-webhook.com/api/leads',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
      )
    })
  })
})

