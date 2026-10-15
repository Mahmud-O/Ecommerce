import { toast } from 'sonner';
import { useState } from 'react';
import { Input } from '../ui/input';
import { BlurFade } from '../magic/blur-fade';

export const NewsLetter = () => {
    const [email, setEmail] = useState('');

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        const valid = /.+@.+\..+/.test(email.trim());
        if (valid) {
            toast.success(`Welcome to the souq — 10% off code sent to ${email.trim()}`);
            setEmail('');
        } else {
            toast.error('Please enter a valid email address');
        }
    };

    return (
        <section className="bg-paper py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <BlurFade>
                    <div className="grain hard-shadow relative overflow-hidden rounded-3xl border-2 border-ink bg-olive px-6 py-12 text-center text-paper sm:px-12">
                        <span className="mb-4 inline-block -rotate-2 rounded-lg border-2 border-ink bg-marigold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
                            10% off your first order
                        </span>
                        <h2 className="font-display mb-3 text-4xl font-bold lg:text-5xl">
                            Fresh drops, straight to your inbox
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-paper/80">
                            Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and style tips
                        </p>

                        <form onSubmit={handleEmailSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                aria-label="Email address"
                                className="h-12 flex-1 rounded-full border-ink bg-paper text-ink"
                            />
                            <button
                                type="submit"
                                className="h-12 shrink-0 rounded-full border-2 border-ink bg-marigold px-8 font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marigold focus-visible:ring-offset-2 focus-visible:ring-offset-olive"
                            >
                                Subscribe
                            </button>
                        </form>

                        <p className="mt-4 text-sm text-paper/70">
                            * No spam, unsubscribe at any time
                        </p>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
