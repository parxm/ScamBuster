/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CheckIcon, PlaneIcon } from "lucide-react";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <PlaneIcon className="h-6 w-6" />
          <span className="sr-only">Scam Awareness Platform</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          {/* Using anchor links for internal sections */}
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>

          {/* Navigate to Sign Up page on Login button click */}
          <Link href="/sign-up" passHref>
            <Button>
              Login{" "}
              <span className="ml-3">
                <CiLogin className="h-5 w-5" />
              </span>
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Stay Safe, Travel Smart with Scam Awareness
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Protect yourself from travel scams with up-to-date user
                    reports, personalized alerts, and a supportive community.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/sign-up"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="#learn-more"
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

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                    Key Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Travel Safely with Scam Awareness
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get up-to-date user-generated scam reports, personalized travel plan alerts, and engage with a supportive community to stay informed and protected.
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
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="#learn-more"
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

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
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
                      <AvatarImage />
                      <AvatarFallback>C4</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">Chacha 420</h4>
                      <p className="text-sm text-muted-foreground">
                        Frequent Traveler
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    "Scam Awareness has been a game-changer for my travels. The real-time scam reports and personalized alerts have saved me from several potentially costly situations."
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
                      <p className="text-sm text-muted-foreground">
                        Solo Traveler
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    "As a solo traveler, I've found the Scam Awareness community to be an invaluable resource. The support and insights have helped me navigate tricky situations with confidence."
                  </blockquote>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage />
                      <AvatarFallback>JH</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">John Harper</h4>
                      <p className="text-sm text-muted-foreground">
                        Business Traveler
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    "I've traveled for work for years, and I've never felt more secure than I do now with Scam Awareness. The alerts help me stay one step ahead!"
                  </blockquote>
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage />
                      <AvatarFallback>LT</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-sm font-semibold">Lisa Thompson</h4>
                      <p className="text-sm text-muted-foreground">
                        Family Traveler
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground">
                    "Traveling with my kids can be stressful, but Scam Awareness has given me peace of mind. I feel like I have a safety net while exploring new places."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="py-4 bg-muted">
        <div className="container px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Scam Awareness Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

