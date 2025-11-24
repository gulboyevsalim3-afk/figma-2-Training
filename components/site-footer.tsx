import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-black bg-primal-gray/30 pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-32">
          <div className="flex items-center gap-2 mb-8 md:mb-0">
            <div className="flex items-center -space-x-6">
              <div className="h-12 w-12 rounded-full bg-black md:h-16 md:w-16" />
              <div className="h-16 w-16 rounded-full bg-black md:h-24 md:w-24" />
              <div className="h-12 w-12 rounded-full bg-black md:h-16 md:w-16" />
            </div>
          </div>
          <div className="text-3xl md:text-5xl font-black tracking-tighter">PrimalTraining</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase">Contact</h3>
            <div className="flex flex-col gap-1 text-sm font-medium">
              <a href="mailto:hello@figma.com" className="hover:underline">
                Email: hello@figma.com
              </a>
              <a href="tel:2035555555" className="hover:underline">
                Phone: (203) 555-5555
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase">Opening Hours</h3>
            <div className="grid grid-cols-[100px_1fr] gap-y-1 text-sm font-medium uppercase">
              <div>Mon – Fri</div>
              <div>5:00 – 23:00</div>
              <div>Saturdays</div>
              <div>8:00 – 16:00</div>
              <div>Sundays</div>
              <div>8:00 – 13:00</div>
              <div>Holidays</div>
              <div>8:00 – 16:00</div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase">Social</h3>
            <div className="flex flex-col gap-1 text-sm font-medium underline">
              <Link href="#">Instagram</Link>
              <Link href="#">X</Link>
              <Link href="#">LinkedIn</Link>
              <Link href="#">Spotify</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
