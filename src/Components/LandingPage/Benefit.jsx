import { Headphones, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { BlurFade } from "../magic/blur-fade";

const benefits = [
    {
        icon: <Truck className="h-7 w-7" />,
        title: "Free Shipping",
        description: "On orders over $50"
    },
    {
        icon: <Headphones className="h-7 w-7" />,
        title: "24/7 Support",
        description: "Always here to help"
    },
    {
        icon: <RotateCcw className="h-7 w-7" />,
        title: "Easy Returns",
        description: "30-day return policy"
    },
    {
        icon: <ShieldCheck className="h-7 w-7" />,
        title: "Secure Checkout",
        description: "100% secure payments"
    }
];

export const Benefit = () => {
    return (
        <section className="bg-paper py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 space-y-3 text-center">
                    <span className="inline-block rounded-full border-2 border-ink bg-clay px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
                        Our promise
                    </span>
                    <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">Why Shop With Us</h2>
                    <p className="mx-auto max-w-2xl text-lg text-ink/70">
                        Experience the difference with our commitment to excellence
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <BlurFade key={benefit.title} delay={Math.min(index * 0.06, 0.3)}>
                            <div className="hard-shadow-sm group rounded-2xl border-2 border-ink bg-paper p-8 text-center transition-transform duration-300 hover:-translate-y-1.5">
                                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-ink bg-marigold text-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-display mb-2 text-xl font-bold text-ink">{benefit.title}</h3>
                                <p className="text-ink/70">{benefit.description}</p>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    )
}
