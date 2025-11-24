import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header Text */}
      <section className="border-b border-black py-4 md:py-8 px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-[8rem] leading-[0.8] font-black uppercase tracking-tighter text-center md:text-left">
          Train Hard. <span className="text-primal-blue">Live Better</span>
        </h1>
      </section>

      {/* Hero Content Split */}
      <section className="grid md:grid-cols-2 border-b border-black">
        <div className="relative min-h-[400px] md:min-h-[600px] border-b md:border-b-0 md:border-r border-black">
          <Image
            src="/gym-workout-crossfit.jpg"
            alt="Athlete training"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="flex flex-col">
          <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center border-b border-black bg-primal-gray/10">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              For the <br />
              Committed
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-md">
              Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or
              breaking PRs, we help you push past limits.
            </p>
            <LinkButton href="/about" text="ABOUT US" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 border-b border-black">
        {/* Feature 1 */}
        <div className="border-b md:border-b-0 md:border-r border-black p-8 md:p-10 flex flex-col justify-between h-full bg-primal-gray/20">
          <div>
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
              Guided by <br />
              Experts
            </h3>
            <p className="text-sm md:text-base font-medium">
              We believe in creating a positive environment where you can thrive. We're here to help you achieve your
              goals and unlock your full potential.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="border-b md:border-b-0 md:border-r border-black p-8 md:p-10 flex flex-col justify-between h-full bg-primal-gray/20">
          <div>
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
              Dynamic Open <br />
              Gym
            </h3>
            <p className="text-sm md:text-base font-medium">
              Our facility is the optimal environment for strength training and performance, fully equipped with
              top-of-the-line tools, ample training areas, and a focus on functional movement.
            </p>
          </div>
        </div>

        {/* Image Panel */}
        <div className="relative min-h-[300px]">
          <Image src="/female-athlete-gym.jpg" alt="Open Gym" fill className="object-cover" />
        </div>
      </section>

      {/* Community Banner */}
      <section className="border-b border-black py-4 md:py-6 px-4 md:px-8 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] leading-none font-black uppercase tracking-tighter">
          Join the <span className="text-primal-blue">Community</span>
        </h2>
      </section>

      {/* Community Content Split */}
      <section className="grid md:grid-cols-2 border-b border-black">
        {/* Left: Text Content */}
        <div className="order-2 md:order-1 flex flex-col border-t md:border-t-0 border-black md:border-r bg-primal-gray/10">
          <div className="p-8 md:p-12 border-b border-black">
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-2">
              Discover Your <br />
              Potential
            </h3>
          </div>

          <div className="p-8 md:p-10 border-b border-black hover:bg-white transition-colors">
            <h4 className="text-xl font-black uppercase mb-2">Expert Coaching</h4>
            <p className="text-sm font-medium">Trainers who are passionate about your progress.</p>
          </div>
          <div className="p-8 md:p-10 border-b border-black hover:bg-white transition-colors">
            <h4 className="text-xl font-black uppercase mb-2">Results-Driven Programs</h4>
            <p className="text-sm font-medium">Workouts that deliver tangible, measurable results.</p>
          </div>
          <div className="p-8 md:p-10 hover:bg-white transition-colors flex-1">
            <h4 className="text-xl font-black uppercase mb-2">A Supportive Tribe</h4>
            <p className="text-sm font-medium">A community that pushes you to be your best.</p>
          </div>
          <div className="p-8 md:p-10 bg-primal-gray/20">
            <LinkButton href="/classes" text="VIEW CLASSES" />
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 md:order-2 relative min-h-[400px] md:min-h-auto">
          <Image
            src="/gym-community-black-and-white.jpg"
            alt="Community training"
            fill
            className="object-cover grayscale"
          />
        </div>
      </section>

      {/* Booking Header */}
      <section className="border-b border-black py-4 md:py-8 px-4 md:px-8">
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] leading-none font-black uppercase tracking-tighter">
          Book a <span className="text-primal-blue">Session</span>
        </h2>
      </section>

      {/* Booking Grid */}
      <section className="grid md:grid-cols-3 border-b border-black">
        {/* Card 1 */}
        <div className="border-b md:border-b-0 md:border-r border-black p-6 md:p-8 flex flex-col h-full bg-primal-gray/10">
          <h3 className="text-3xl font-black uppercase mb-8">Strength</h3>

          <div className="space-y-6 mb-8 flex-1">
            <div className="border-b border-black pb-2">
              <p className="text-base font-medium">Weekdays at 6AM</p>
            </div>
            <div className="border-b border-black pb-2">
              <p className="text-base font-medium">Weekends and Holidays at 8AM</p>
            </div>
            <p className="text-sm md:text-base mt-6">
              Build a foundation of raw power with our comprehensive weightlifting and strength training programs.
            </p>
          </div>

          <Button variant="primal" size="primal" className="w-full">
            Reserve Your Spot
          </Button>
        </div>

        {/* Card 2 */}
        <div className="border-b md:border-b-0 md:border-r border-black p-6 md:p-8 flex flex-col h-full bg-primal-gray/10">
          <h3 className="text-3xl font-black uppercase mb-8">Conditioning</h3>

          <div className="space-y-6 mb-8 flex-1">
            <div className="border-b border-black pb-2">
              <p className="text-base font-medium">Weekdays at 8AM</p>
            </div>
            <div className="border-b border-black pb-2">
              <p className="text-base font-medium">Weekends and Holidays at 10AM</p>
            </div>
            <p className="text-sm md:text-base mt-6">
              Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build
              functional fitness.
            </p>
          </div>

          <Button variant="primal" size="primal" className="w-full">
            Reserve Your Spot
          </Button>
        </div>

        {/* Card 3 */}
        <div className="p-6 md:p-8 flex flex-col h-full bg-primal-gray/10">
          <h3 className="text-3xl font-black uppercase mb-8 leading-tight">
            Community <br />
            Classes
          </h3>

          <div className="space-y-6 mb-8 flex-1">
            <div className="border-b border-black pb-2">
              <p className="text-base font-medium">Every day on the hour</p>
            </div>
            <p className="text-sm md:text-base mt-6">
              Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside
              like-minded individuals.
            </p>
          </div>

          <Button variant="primal" size="primal" className="w-full">
            Reserve Your Spot
          </Button>
        </div>
      </section>

      {/* Personal Training CTA */}
      <section className="bg-primal-blue border-b border-black py-20 md:py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Primal Personal <br />
            Training
          </h2>
          <p className="text-base md:text-lg font-medium max-w-2xl mx-auto">
            Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our
            expert coaches will guide you every step of the way.
          </p>
          <Button className="bg-white text-black hover:bg-white/90 rounded-sm font-semibold tracking-wider uppercase px-8 py-6 h-auto">
            Reserve Your Spot
          </Button>
        </div>
      </section>

      {/* What We Believe CTA */}
      <section className="bg-[#a0afff] py-20 md:py-32 px-4 text-center border-b border-black">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="uppercase tracking-widest text-sm font-bold">What We Believe In</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
            Join The Primal <br />
            Tribe Today!
          </h2>
          <Button variant="primal" size="primal" className="mt-8">
            Reserve Your Spot
          </Button>
        </div>
      </section>
    </div>
  )
}

function LinkButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="inline-block text-sm font-bold uppercase tracking-wider hover:underline underline-offset-4"
    >
      {text}
    </a>
  )
}
