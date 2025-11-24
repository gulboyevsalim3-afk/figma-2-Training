import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
      <div className="flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          {/* Logo Mark */}
          <div className="flex items-center -space-x-4">
            <div className="h-6 w-6 rounded-full bg-black md:h-8 md:w-8" />
            <div className="h-8 w-8 rounded-full bg-black md:h-10 md:w-10" />
            <div className="h-6 w-6 rounded-full bg-black md:h-8 md:w-8" />
          </div>
          <span className="text-xl font-bold tracking-tight md:text-2xl">PrimalTraining</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <Link href="/about" className="hover:underline">
            ABOUT
          </Link>
          <Button className="bg-primal-blue text-xs tracking-wider text-black hover:bg-primal-blue/90 rounded-none px-6 py-5 font-semibold">
            RESERVE YOUR SPOT
          </Button>
        </nav>

        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
