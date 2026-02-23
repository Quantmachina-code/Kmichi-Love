'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { trackBeginCheckout } from '@/lib/gtm';
import { ArrowLeft, ChevronRight, CreditCard, Banknote, Truck } from 'lucide-react';

type Step = 'info' | 'shipping' | 'payment' | 'confirm';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zip: string;
  note: string;
  paymentMethod: 'card' | 'transfer' | 'cod';
}

export default function CheckoutPage() {
  const { state, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<Step>('info');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zip: '',
    note: '',
    paymentMethod: 'card',
  });

  const shipping = totalPrice >= 1000 ? 0 : 99;
  const total = totalPrice + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNextStep = () => {
    if (step === 'info') setStep('shipping');
    else if (step === 'shipping') {
      trackBeginCheckout(state.items, total);
      setStep('payment');
    }
    else if (step === 'payment') setStep('confirm');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: send to backend / payment gateway
    setSubmitted(true);
    clearCart();
  };

  if (state.items.length === 0 && !submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-20 text-center px-4">
        <div>
          <p className="text-5xl mb-4">🛒</p>
          <h1 className="font-display text-3xl font-bold text-kimchi-black mb-3">
            Košík je prázdný
          </h1>
          <Link href="/kimchi" className="btn-primary mt-6 inline-block">
            Nakupovat
          </Link>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 text-center px-4">
        <div className="max-w-md">
          <p className="text-6xl mb-6">🎉</p>
          <h1 className="font-display text-4xl font-bold text-kimchi-black mb-4">
            Objednávka přijata!
          </h1>
          <p className="text-gray-600 text-lg mb-3">
            Děkujeme za vaši objednávku. Potvrzení bylo odesláno na{' '}
            <strong>{form.email}</strong>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Naše kimchi se na vás těší! 🌶️
          </p>
          <Link href="/" className="btn-primary inline-block">
            Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    );
  }

  const steps: { key: Step; label: string }[] = [
    { key: 'info', label: 'Kontakt' },
    { key: 'shipping', label: 'Doručení' },
    { key: 'payment', label: 'Platba' },
    { key: 'confirm', label: 'Shrnutí' },
  ];

  const stepIndex = steps.findIndex((s) => s.key === step);

  return (
    <section className="py-12 bg-kimchi-cream min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <nav className="flex items-center justify-center gap-2 mb-10" aria-label="Kroky pokladny">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center gap-2">
              <div
                className={`flex items-center gap-2 text-sm font-medium ${
                  i <= stepIndex ? 'text-kimchi-red' : 'text-gray-400'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    i < stepIndex
                      ? 'bg-kimchi-red text-white'
                      : i === stepIndex
                      ? 'bg-kimchi-red text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {i < stepIndex ? '✓' : i + 1}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight size={14} className="text-gray-300 mx-1" />
              )}
            </div>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              {step === 'info' && (
                <>
                  <h2 className="font-semibold text-xl text-kimchi-black mb-5">Kontaktní údaje</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'firstName', label: 'Jméno', type: 'text', required: true },
                      { name: 'lastName', label: 'Příjmení', type: 'text', required: true },
                      { name: 'email', label: 'E-mail', type: 'email', required: true },
                      { name: 'phone', label: 'Telefon', type: 'tel', required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1.5">
                          {field.label} {field.required && <span className="text-kimchi-red">*</span>}
                        </label>
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          value={form[field.name as keyof FormData]}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-kimchi-black focus:outline-none focus:ring-2 focus:ring-kimchi-red/30 focus:border-kimchi-red transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {step === 'shipping' && (
                <>
                  <h2 className="font-semibold text-xl text-kimchi-black mb-5">Doručovací adresa</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ulice a číslo popisné <span className="text-kimchi-red">*</span>
                      </label>
                      <input
                        id="street"
                        name="street"
                        type="text"
                        required
                        value={form.street}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-kimchi-red/30 focus:border-kimchi-red transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Město <span className="text-kimchi-red">*</span>
                        </label>
                        <input
                          id="city"
                          name="city"
                          type="text"
                          required
                          value={form.city}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-kimchi-red/30 focus:border-kimchi-red transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1.5">
                          PSČ <span className="text-kimchi-red">*</span>
                        </label>
                        <input
                          id="zip"
                          name="zip"
                          type="text"
                          required
                          value={form.zip}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-kimchi-red/30 focus:border-kimchi-red transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Poznámka k objednávce
                      </label>
                      <textarea
                        id="note"
                        name="note"
                        rows={3}
                        value={form.note}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-kimchi-red/30 focus:border-kimchi-red transition-colors resize-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {step === 'payment' && (
                <>
                  <h2 className="font-semibold text-xl text-kimchi-black mb-5">Způsob platby</h2>
                  <div className="space-y-3">
                    {[
                      { value: 'card', label: 'Platba kartou online', icon: CreditCard, desc: 'VISA, Mastercard, Maestro' },
                      { value: 'transfer', label: 'Bankovní převod', icon: Banknote, desc: 'Odeslání objednávky po přijetí platby' },
                      { value: 'cod', label: 'Dobírka', icon: Truck, desc: 'Platba při převzetí (+50 Kč)' },
                    ].map(({ value, label, icon: Icon, desc }) => (
                      <label
                        key={value}
                        className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          form.paymentMethod === value
                            ? 'border-kimchi-red bg-kimchi-cream'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={value}
                          checked={form.paymentMethod === value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          form.paymentMethod === value ? 'bg-kimchi-red text-white' : 'bg-gray-100 text-gray-500'
                        }`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-kimchi-black">{label}</p>
                          <p className="text-sm text-gray-500">{desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </>
              )}

              {step === 'confirm' && (
                <>
                  <h2 className="font-semibold text-xl text-kimchi-black mb-5">Zkontrolujte objednávku</h2>
                  <div className="space-y-4 text-sm">
                    <div className="bg-kimchi-cream rounded-xl p-4">
                      <p className="font-medium text-kimchi-black mb-1">Kontakt</p>
                      <p className="text-gray-600">{form.firstName} {form.lastName}</p>
                      <p className="text-gray-600">{form.email} · {form.phone}</p>
                    </div>
                    <div className="bg-kimchi-cream rounded-xl p-4">
                      <p className="font-medium text-kimchi-black mb-1">Doručení</p>
                      <p className="text-gray-600">{form.street}, {form.zip} {form.city}</p>
                    </div>
                    <div className="bg-kimchi-cream rounded-xl p-4">
                      <p className="font-medium text-kimchi-black mb-1">Platba</p>
                      <p className="text-gray-600">
                        {form.paymentMethod === 'card' ? 'Karta' : form.paymentMethod === 'transfer' ? 'Převod' : 'Dobírka'}
                      </p>
                    </div>
                    {form.note && (
                      <div className="bg-kimchi-cream rounded-xl p-4">
                        <p className="font-medium text-kimchi-black mb-1">Poznámka</p>
                        <p className="text-gray-600">{form.note}</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center gap-4">
              {step !== 'info' && (
                <button
                  type="button"
                  onClick={() => {
                    const prev = steps[stepIndex - 1];
                    if (prev) setStep(prev.key);
                  }}
                  className="flex items-center gap-2 text-gray-500 hover:text-kimchi-black transition-colors"
                >
                  <ArrowLeft size={16} />
                  Zpět
                </button>
              )}
              {step !== 'confirm' ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="ml-auto btn-primary flex items-center gap-2 group"
                >
                  Pokračovat
                  <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
                >
                  Potvrdit objednávku 🎉
                </button>
              )}
            </div>
          </form>

          {/* Order summary sidebar */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="font-semibold text-kimchi-black mb-4">Vaše objednávka</h2>
              <div className="space-y-3 mb-5">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span className="text-gray-600 line-clamp-1 pr-2">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="font-medium text-kimchi-black shrink-0">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Mezisoučet</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Doprava</span>
                  <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                    {shipping === 0 ? 'Zdarma' : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-kimchi-black text-base pt-2 border-t border-gray-100">
                  <span>Celkem</span>
                  <span className="text-kimchi-red">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
