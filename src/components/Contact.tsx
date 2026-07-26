import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { InquiryPayload } from '@/types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<InquiryPayload>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (k: keyof InquiryPayload, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const { error } = await supabase.from('inquiries').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone?.trim() || null,
      message: form.message.trim(),
    });
    if (error) {
      setStatus('error');
      setErrorMsg('No se pudo enviar el mensaje. Inténtalo de nuevo en unos minutos.');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <p className="flex items-center gap-2 text-xs tracking-widest2 uppercase text-clay-500 mb-4">
            <span className="h-px w-8 bg-clay-500" /> Contacto
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink-900 leading-tight mb-6">
            Cuéntanos qué estás buscando. Te responderemos en persona.
          </h2>
          <p className="text-ink-700 leading-relaxed mb-10 max-w-md">
            Cada búsqueda comienza con una conversación. Escríbenos y un asesor
            te contactará en menos de 24 horas para entender tu proyecto.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:hola@maisonboutique.es"
              className="flex items-center gap-4 text-ink-700 hover:text-clay-600 transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-ink-900/15 flex items-center justify-center">
                <Mail size={16} />
              </span>
              hola@maisonboutique.es
            </a>
            <a
              href="tel:+34951000000"
              className="flex items-center gap-4 text-ink-700 hover:text-clay-600 transition-colors"
            >
              <span className="w-10 h-10 rounded-full border border-ink-900/15 flex items-center justify-center">
                <Phone size={16} />
              </span>
              +34 951 000 000
            </a>
            <div className="flex items-center gap-4 text-ink-700">
              <span className="w-10 h-10 rounded-full border border-ink-900/15 flex items-center justify-center">
                <MapPin size={16} />
              </span>
              Calle Ricardo Soriano 12, Marbella
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-ink-900/5">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <CheckCircle2 size={48} className="text-sage-600 mb-5" />
              <h3 className="font-serif text-3xl text-ink-900 mb-3">
                Mensaje recibido
              </h3>
              <p className="text-ink-500 max-w-sm">
                Gracias por escribirnos. Un asesor de Maison se pondrá en
                contacto contigo muy pronto.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm text-clay-600 hover:text-clay-700 underline underline-offset-4"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  label="Nombre"
                  value={form.name}
                  onChange={(v) => update('name', v)}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => update('email', v)}
                  required
                />
              </div>
              <Field
                label="Teléfono (opcional)"
                value={form.phone ?? ''}
                onChange={(v) => update('phone', v)}
              />
              <div>
                <label className="block text-xs tracking-wide text-ink-500 mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={5}
                  placeholder="Cuéntanos qué tipo de vivienda buscas, dónde y cuándo…"
                  className="w-full px-4 py-3 bg-cream-50 border border-ink-900/10 rounded-xl text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-clay-500 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-clay-700">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-ink-900 text-cream-50 rounded-full text-sm tracking-wide hover:bg-clay-500 transition-all disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Enviando…
                  </>
                ) : (
                  <>
                    <Send size={16} /> Enviar mensaje
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs tracking-wide text-ink-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-cream-50 border border-ink-900/10 rounded-xl text-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-clay-500 transition-colors"
      />
    </div>
  );
}
