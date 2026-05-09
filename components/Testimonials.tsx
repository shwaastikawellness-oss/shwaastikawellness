import Reveal from "@/components/Reveal";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "The session gave our team practical language for stress, communication, and accountability. It felt thoughtful, calm, and immediately useful.",
    name: "Client Name",
    role: "HR Lead, Company Name",
  },
  {
    quote:
      "SHWAASTIKA WELLNESS created a safe environment for reflection while keeping the training grounded in workplace realities.",
    name: "Client Name",
    role: "Operations Manager, Company Name",
  },
  {
    quote:
      "A polished and meaningful program that helped our people connect leadership behaviour with everyday wellbeing.",
    name: "Client Name",
    role: "Founder, Organization Name",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fbf8f1] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d8b65]">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#2f2822] sm:text-4xl">
            Shared Experiences
          </h2>
          <Link
            href="/testimonials"
            className="mt-7 inline-flex rounded-full border border-[#cdbd9f] bg-white px-6 py-3 text-sm font-semibold text-[#3f352d] transition hover:border-[#8a9b72] hover:bg-[#fbf8f1]"
          >
            View All Testimonials
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.role} delay={index * 0.08}>
              <article className="h-full rounded-[1.5rem] border border-[#e5d9c7] bg-white p-6 shadow-sm">
                <div className="mb-5 aspect-[16/9] rounded-2xl border border-dashed border-[#c8b693] bg-[#fbf8f1]" />
                <p className="text-base leading-8 text-[#5f5349]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-8 border-t border-[#e2d4bf] pt-5">
                  <h3 className="font-semibold text-[#332b24]">{testimonial.name}</h3>
                  <p className="mt-1 text-sm text-[#7b6e62]">{testimonial.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
