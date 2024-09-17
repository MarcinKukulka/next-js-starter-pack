import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Rocket } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="mr-2 size-6" />
          <span className="font-bold">NextJS Starter Pack</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="flex items-center gap-2 text-sm font-medium  underline-offset-4 hover:underline"
            href="https://github.com/MarcinKukulka/next-js-starter-pack"
            target="_blank"
          >
            <GitHubLogoIcon className="size-4" /> Github
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to NextJS Starter Pack
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Jumpstart your Next.js project with our feature-packed,
                  customizable starter template.
                </p>
              </div>
              <div className="space-x-4">
                <Button>
                  Get Started <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="size-10" />
                <h2 className="text-xl font-bold">Lightning Fast</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Optimized for speed and performance right out of the box.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Code className="size-10" />
                <h2 className="text-xl font-bold">Developer Friendly</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Built with TypeScript and modern best practices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Rocket className="size-10" />
                <h2 className="text-xl font-bold">Ready to Launch</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Everything you need to deploy your app with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} NextJS Starter Pack. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
