import { useRef } from "react";
import { Star } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Amazing quality and fast delivery! Highly recommended.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        text: "Great customer service and excellent products. The fitness watch has completely changed my workout routine.",
        rating: 5
    },
    {
        id: 3,
        name: "Emma Williams",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        text: "Love the modern design and user-friendly website. Shopping here is always a pleasant experience.",
        rating: 5
    },
    {
        id: 4,
        name: "James L.",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "The styles are so fresh and the support team is fantastic!",
        rating: 4
    },
    {
        id: 5,
        name: "Emily R.",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Love the unique designs and the quality is top-notch!",
        rating: 3
    },
    {
        id: 6,
        name: "Michael B.",
        photo: "https://randomuser.me/api/portraits/men/65.jpg",
        text: "Customer service was super helpful and my order arrived quickly.",
        rating: 5
    },
    {
        id: 7,
        name: "Olivia P.",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "I always find something new and exciting every time I visit!",
        rating: 4
    },
];

export const Testimonial = () => {
    const trackRef = useRef(null);

    return (
        <section className="border-y-2 border-ink bg-paper-deep py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-3 text-center">
                    <span className="inline-block rounded-full border-2 border-ink bg-marigold px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-ink">
                        Reviews
                    </span>
                    <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">What Our Customers Say</h2>
                    <p className="text-lg text-ink/70">Real experiences from our valued customers</p>
                </div>

                <Carousel>
                    <CarouselContent ref={trackRef} className="pb-4">
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="w-[85%] sm:w-[47%] lg:w-[31.5%]">
                                <Card className="hard-shadow-sm flex h-full flex-col gap-4 bg-paper p-6">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-14 w-14">
                                            <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                                            <AvatarFallback>
                                                {testimonial.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-display text-lg font-bold text-ink">
                                                {testimonial.name}
                                            </h4>
                                            <div className="flex text-marigold">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <blockquote className="text-base leading-relaxed text-ink/80">
                                        “{testimonial.text}”
                                    </blockquote>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <CarouselPrevious targetRef={trackRef} />
                        <span className="text-sm font-semibold uppercase tracking-widest text-ink/50">
                            Drag or scroll
                        </span>
                        <CarouselNext targetRef={trackRef} />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
