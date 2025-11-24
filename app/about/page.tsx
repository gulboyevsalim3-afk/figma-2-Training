import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="border-b border-black py-4 md:py-8 px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-[8rem] leading-[0.8] font-black uppercase tracking-tighter">
          About Us
        </h1>
      </section>

      {/* Vision Section */}
      <section className="grid md:grid-cols-2 border-b border-black">
        <div className="bg-primal-blue p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-black">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-12 md:mb-24">
            Tap into your primal power. Forge a stronger you.
          </h2>
          <div>
            <h3 className="text-lg font-black uppercase mb-4">Our Vision</h3>
            <p className="text-sm md:text-base font-medium">
              Primal Training is committed to delivering a training experience rooted in raw strength, functional
              fitness, and unwavering community support. We empower our members to tap into their primal power, achieve
              their goals, and live a life of strength, resilience, and unwavering determination.
            </p>
          </div>
        </div>
        <div className="relative min-h-[400px]">
          <Image src="/overhead-gym-workout.jpg" alt="Gym overhead view" fill className="object-cover grayscale" />
        </div>
      </section>

      {/* Open Gym Section */}
      <section className="grid md:grid-cols-2 border-b border-black">
        <div className="order-2 md:order-1 relative min-h-[400px]">
          <Image src="/weightlifting-barbell.jpg" alt="Barbell training" fill className="object-cover grayscale" />
        </div>
        <div className="order-1 md:order-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-primal-gray/10">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
            Dynamic Open <br />
            Gym
          </h2>
          <p className="text-sm md:text-base font-medium">
            At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you
            through intense, functional workouts designed to build raw strength, resilience, and a body capable of
            anything.
          </p>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="relative min-h-[400px] md:min-h-[500px] border-b border-black flex items-end">
        <Image
          src="/female-athlete-back-muscles.jpg"
          alt="Athlete back muscles"
          fill
          className="object-cover brightness-75"
        />
        <div className="relative z-10 p-8 md:p-16 w-full max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-none tracking-tighter drop-shadow-lg">
            We've created a space where you can reconnect with your primal self.
          </h2>
        </div>
      </section>

      {/* CTA Section repeated for consistency */}
      <section className="bg-primal-gray/20 py-20 md:py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="uppercase tracking-widest text-sm font-bold">What We Believe In</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
            Join The Primal <br />
            Tribe Today!
          </h2>
        </div>
      </section>
    </div>
  )
}
