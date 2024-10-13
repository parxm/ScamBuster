/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CgProfile } from "react-icons/cg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  ThumbsUp,
  Share2,
  AlertTriangle,
  BookOpen,
  MapPin,
  Users,
  Shield,
  TrendingUp,
  Activity,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome to ScamBust</h1>
        <p className="text-xl text-muted-foreground">
          Stay informed, travel safely
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Featured Scam Alert</CardTitle>
            <CardDescription>
              High-priority warning for travelers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
              <h3 className="font-bold">
                New Scam Alert: "Free Wi-Fi" Hotspot Hack in Major Airports
              </h3>
              <p className="mt-2">
                Scammers are setting up fake "Free Airport Wi-Fi" hotspots to
                steal personal data. Always verify the official airport Wi-Fi
                name with staff before connecting.
              </p>
            </div>
            <Button>Learn How to Protect Yourself</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ScamBust Statistics</CardTitle>
            <CardDescription>Our impact in numbers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">5,234</p>
                <p className="text-sm text-muted-foreground">Scams Reported</p>
              </div>
              <div>
                <p className="text-3xl font-bold">18,756</p>
                <p className="text-sm text-muted-foreground">
                  Travelers Protected
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">127</p>
                <p className="text-sm text-muted-foreground">
                  Countries Covered
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">$2.3M</p>
                <p className="text-sm text-muted-foreground">
                  Estimated Savings
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Scams</CardTitle>
            <CardDescription>
              Stay updated on the latest reported scams
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                {
                  title: "Fake Taxi Scam in Bangkok",
                  recency: "2h ago",
                  frequency: "High",
                },
                {
                  title: "Pickpocket Ring in Barcelona",
                  recency: "1d ago",
                  frequency: "Medium",
                },
                {
                  title: "Counterfeit Currency in Bali",
                  recency: "3d ago",
                  frequency: "Low",
                },
                {
                  title: "Fake Tour Guide Scam in Rome",
                  recency: "4d ago",
                  frequency: "Medium",
                },
                {
                  title: "Overcharged Tuk-Tuk Rides in Phnom Penh",
                  recency: "5d ago",
                  frequency: "High",
                },
              ].map((scam, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{scam.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {scam.recency}
                    </p>
                  </div>
                  <Badge
                    variant={
                      scam.frequency === "High"
                        ? "destructive"
                        : scam.frequency === "Medium"
                        ? "outline"
                        : "secondary"
                    }
                  >
                    {scam.frequency}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Scams
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Travel Plans</CardTitle>
            <CardDescription>
              Get alerts for your upcoming destinations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="text-muted-foreground" />
                <Input placeholder="Enter your destination" />
              </div>
              <Button className="w-full">Add Destination</Button>
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-medium">Active Alerts:</p>
              <div className="flex items-center space-x-2 text-sm">
                <Bell className="text-warning" />
                <span>3 new alerts for your trip to Paris</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Bell className="text-warning" />
                <span>1 new alert for your trip to Tokyo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Educational Content</CardTitle>
            <CardDescription>Learn how to protect yourself</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                "10 Most Common Travel Scams and How to Avoid Them",
                "What to Do If You've Been Scammed Abroad",
                "Understanding Local Customs to Avoid Misunderstandings",
                "Digital Security Tips for Travelers",
                "How to Spot Fake Reviews and Scam Websites",
                "Currency Exchange Scams: What to Watch Out For",
              ].map((article, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <BookOpen className="text-muted-foreground" />
                  <Link href="#" className="text-sm hover:underline">
                    {article}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Explore All Articles
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Community Reports</CardTitle>
            <CardDescription>
              Recent experiences shared by travelers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              {[
                {
                  user: "TravelExplorer",
                  avatar: <CgProfile />,
                  content:
                    "Watch out for the 'free bracelet' scam near the Eiffel Tower. They'll try to tie a bracelet to your wrist and demand payment.",
                  location: "Paris, France",
                  likes: 24,
                  comments: 5,
                },
                {
                  user: "Wanderlust22",
                  avatar: <CgProfile />,
                  content:
                    "Be cautious of friendly locals offering to be your guide in Marrakech. Some may lead you to overpriced shops and demand commission.",
                  location: "Marrakech, Morocco",
                  likes: 18,
                  comments: 3,
                },
                {
                  user: "GlobeTrotter",
                  avatar: <CgProfile />,
                  content:
                    "In Bali, be wary of money changers offering 'no commission' exchanges. They often use sleight of hand to short-change you.",
                  location: "Bali, Indonesia",
                  likes: 31,
                  comments: 7,
                },
                {
                  user: "CityHopper",
                  avatar: <CgProfile />,
                  content:
                    "Beware of 'helpful' strangers at train stations in Italy. They might offer to help with ticket machines but then demand a fee.",
                  location: "Rome, Italy",
                  likes: 15,
                  comments: 2,
                },
              ].map((report, index) => (
                <li
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={report.avatar} alt={report.user} />
                      <AvatarFallback>
                        {report.user.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="font-medium">{report.user}</p>
                      <p className="text-sm text-muted-foreground">
                        {report.location}
                      </p>
                      <p className="text-sm">{report.content}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <button className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{report.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Report Similar</span>
                        </button>
                        <button className="flex items-center space-x-1">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Share Your Experience</Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Trending Scam Hotspots</CardTitle>
            <CardDescription>
              Areas with increasing scam reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                {
                  city: "Bangkok, Thailand",
                  trend: "↑ 15%",
                  scamType: "Tuk-tuk overcharging",
                },
                {
                  city: "Barcelona, Spain",
                  trend: "↑ 8%",
                  scamType: "Pickpocketing on public transport",
                },
                {
                  city: "Marrakech, Morocco",
                  trend: "↑ 12%",
                  scamType: "Fake guide services",
                },
                {
                  city: "Rio de Janeiro, Brazil",
                  trend: "↑ 10%",
                  scamType: "Fake police officers",
                },
                {
                  city: "Prague, Czech Republic",
                  trend: "↑ 7%",
                  scamType: "Currency exchange fraud",
                },
              ].map((hotspot, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{hotspot.city}</p>
                    <p className="text-sm text-muted-foreground">
                      {hotspot.scamType}
                    </p>
                  </div>
                  <Badge variant="destructive">{hotspot.trend}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Activity</CardTitle>
            <CardDescription>Recent interactions on ScamBust</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Activity className="text-muted-foreground" />
                <span className="text-sm">
                  You reported a new scam in Venice, Italy
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <ThumbsUp className="text-muted-foreground" />
                <span className="text-sm">
                  You liked a report about taxi scams in New York
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Share2 className="text-muted-foreground" />
                <span className="text-sm">
                  You shared an alert about pickpockets in Paris
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="text-muted-foreground" />
                <span className="text-sm">
                  You completed the "Travel Safety 101" course
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="text-muted-foreground" />
                <span className="text-sm">
                  You joined the "Southeast Asia Travelers" group
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Full Activity Log
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
