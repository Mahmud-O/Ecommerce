import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import heroImg from '../../assets/img/maincontact.6038b3c3.webp';
import Input from '../../ReusableComponents/Input';
import Button from '../../ReusableComponents/Button';
import { Card } from '../ui/card';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !/.+@.+\..+/.test(form.email.trim()) || !form.message.trim()) {
      toast.error('Please fill in your name, a valid email, and a message.');
      return;
    }
    toast.success(`Thanks ${form.name.trim()} — your message is on its way!`);
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <>
      <Helmet><title>Contact Us — souq.</title></Helmet>
      <div className="bg-paper pb-5 text-ink">
        {/* Hero Section */}
        <div className="grain relative flex h-[320px] w-full items-center justify-center overflow-hidden border-b-2 border-ink bg-olive md:h-[450px]">
          <img src={heroImg} alt="Contact banner" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center opacity-40" />
          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            <span className="mb-4 inline-block rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
              Say hello
            </span>
            <h1 className="font-display text-5xl font-bold text-paper md:text-6xl">Contact us</h1>
            <p className="mt-3 text-xl font-medium tracking-wide text-paper/80 md:text-2xl">We&apos;re here to help you shine</p>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <div className="container mx-auto flex flex-col gap-8 px-4 py-16 md:flex-row">
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <span className="inline-block w-fit rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
              Get in touch
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink">We reply fast</h2>
            <p className="mb-6 mt-3 text-lg text-ink/75">Have a question, feedback, or just want to say hello? Our team is always happy to connect with you. Reach out and we&apos;ll get back to you as soon as possible!</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 rounded-xl border-2 border-ink bg-paper-deep px-4 py-3 font-semibold">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-marigold"><Mail className="h-4 w-4 text-ink" /></span>
                support@yourbrand.com
              </li>
              <li className="flex items-center gap-3 rounded-xl border-2 border-ink bg-paper-deep px-4 py-3 font-semibold">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-marigold"><Phone className="h-4 w-4 text-ink" /></span>
                +1 234 567 890
              </li>
              <li className="flex items-center gap-3 rounded-xl border-2 border-ink bg-paper-deep px-4 py-3 font-semibold">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-marigold"><MapPin className="h-4 w-4 text-ink" /></span>
                123 Fashion Ave, New York, NY
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <Card className="hard-shadow p-6 sm:p-8">
              <h3 className="font-display text-2xl font-bold">Send a message</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-bold">Name</label>
                  <Input id="contact-name" type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-bold">Email</label>
                  <Input id="contact-email" type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-bold">Message</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full rounded-xl border-2 border-ink bg-paper px-3 py-2 text-ink placeholder:text-ink/40 focus:border-persimmon focus:outline-none focus:ring-2 focus:ring-persimmon"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto" size="lg">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-20 flex justify-center">
          <Link to="/about" className="rounded-xl border-2 border-ink bg-olive px-8 py-3 text-lg font-bold text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persimmon focus-visible:ring-offset-2">
            Learn More About Us
          </Link>
        </div>
      </div>
    </>
  );
}
