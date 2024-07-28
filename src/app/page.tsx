import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import dbConnect from "@/lib/dbConnect";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CheckIcon, PlaneIcon } from "lucide-react";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import ".//globals.css";


export default async function Home() {
 await dbConnect();
 return (
  <div className="flex flex-col min-h-[100dvh]">
<header className="px-4 lg:px-6 h-14 flex items-center">
  <Link href="#" className="flex items-center justify-center" prefetch={false}>
    <PlaneIcon className="h-6 w-6" />
    <span className="sr-only">Scam Awareness Platform</span>
  </Link>
  <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
      Features
    </Link>
    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
      Testimonials
    </Link>
    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
      About
    </Link>
    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
      Contact
    </Link>
    
    <Button>
      Login <span className="ml-3"><CiLogin className="h-5 w-5" /></span>
    </Button>
 
  </nav>
</header>


    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Stay Safe, Travel Smart with Scam Awareness
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Protect yourself from travel scams with up-to-date user reports, personalized alerts, and a
                  supportive community.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/scamaware4.jpeg"
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Travel Safely with Scam Awareness</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get up-to-date user-generated scam reports, personalized travel plan alerts, and engage with a
                  supportive community to stay informed and protected.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Crowdsourced scam reports from fellow travelers
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Personalized scam alerts based on your travel plans
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Interactive community discussions and support
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/scamaware3.jpeg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Travelers Worldwide
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our users about how Scam Awareness has helped them travel with confidence.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage/>
                    <AvatarFallback>C4</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold">Chacha 420</h4>
                    <p className="text-sm text-muted-foreground">Frequent Traveler</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground">
                  "Scam Awareness has been a game-changer for my travels. The real-time scam reports and
                  personalized alerts have saved me from several potentially costly situations."
                </blockquote>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold">Sarah Miller</h4>
                    <p className="text-sm text-muted-foreground">Solo Traveler</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground">
                  "As a solo traveler, I've found the Scam Awareness community to be an invaluable resource. The
                  support and advice I've received have helped me navigate tricky situations with confidence."
                </blockquote>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold">Tom Wilson</h4>
                    <p className="text-sm text-muted-foreground">Family Traveler</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground">
                  "As a parent, I 'm grateful for the peace of mind that Scam Awareness provides. The app's
                  features have helped me keep my family safe and secure during our travels."
                </blockquote>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage  />
                    <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold">Lisa Martinez</h4>
                    <p className="text-sm text-muted-foreground">Business Traveler</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-muted-foreground">
                  "As a frequent business traveler, I've found Scam Awareness to be an essential tool. The
                  real-time alerts and community insights have helped me avoid costly mistakes and focus on my
                  work."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join the Scam Awareness Community
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up today to start protecting yourself and your loved ones from travel scams.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" style={{ maxWidth: 'lg', flex: 1 }} />              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <Link href="#" className="underline underline-offset-2" prefetch={false}>
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2024 Scam Awareness Platform. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Privacy
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </footer>
  </div>
  );
}
