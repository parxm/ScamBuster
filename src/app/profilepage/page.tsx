/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, LinkIcon } from "lucide-react"

// Mock data
const user = {
  name: "Parampreet Singh",
  username: "@param__",
  email: "getupparam@gmail.com",
  bio: "Full-stack developer | Open source enthusiast",
  location: "Ambala,Haryana",
  website: "https://parampreet.netlify.app",
  avatar: "/placeholder.svg?height=200&width=200",
}

const articles = [
  { id: 1, title: "Mastering React Hooks", date: "2023-05-15", likes: 89, comments: 23 },
  { id: 2, title: "Building Scalable APIs with Node.js and Express", date: "2023-06-02", likes: 132, comments: 37 },
  { id: 3, title: "Advanced CSS Techniques: Grid and Flexbox", date: "2023-06-20", likes: 75, comments: 19 },
]

const savedPosts = [
  { id: 1, title: "10 JavaScript Performance Tips", author: "Jane Doe", date: "2023-07-01" },
  { id: 2, title: "The Future of Web Development: WASM and Beyond", author: "John Smith", date: "2023-06-28" },
  { id: 3, title: "Mastering TypeScript: Advanced Types and Patterns", author: "Bob Wilson", date: "2023-06-25" },
]

const activityFeed = [
  { id: 1, action: "Published a new article", target: "Mastering React Hooks", date: "2023-07-05" },
  { id: 2, action: "Commented on", target: "The Future of AI in Web Development", date: "2023-07-03" },
  { id: 3, action: "Liked", target: "10 Must-Know Git Commands", date: "2023-07-02" },
]

export default function DetailedProfilePage() {
  const [activeTab, setActiveTab] = useState("articles")

  return (
    <div className=" my-16 container mx-auto p-4 max-w-4xl">
      <div className="relative mb-8">
        <Avatar className="absolute bottom-0 left-4 transform translate-y-1/2 h-32 w-32 border-4 border-background">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <CardDescription>{user.username}</CardDescription>
            </div>
            <Button>Edit Profile</Button>
          </div>
          <p className="mt-2">{user.bio}</p>
          <div className="flex items-center mt-2 space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center"><MapPinIcon className="mr-1 h-4 w-4" />{user.location}</span>
            <span className="flex items-center"><LinkIcon className="mr-1 h-4 w-4" /><a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></span>
            <span className="flex items-center"><CalendarIcon className="mr-1 h-4 w-4" />Joined June 2020</span>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="articles" onClick={() => setActiveTab("articles")}>Articles</TabsTrigger>
              <TabsTrigger value="saved" onClick={() => setActiveTab("saved")}>Saved</TabsTrigger>
              <TabsTrigger value="activity" onClick={() => setActiveTab("activity")}>Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="articles">
              <ul className="space-y-4 mt-4">
                {articles.map((article) => (
                  <li key={article.id} className="border-b pb-4">
                    <h3 className="font-semibold text-lg">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">Published on: {article.date}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <Badge variant="secondary">{article.likes} Likes</Badge>
                      <Badge variant="secondary">{article.comments} Comments</Badge>
                    </div>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="saved">
              <ul className="space-y-4 mt-4">
                {savedPosts.map((post) => (
                  <li key={post.id} className="border-b pb-4">
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">By: {post.author} • Saved on: {post.date}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="activity">
              <ul className="space-y-4 mt-4">
                {activityFeed.map((activity) => (
                  <li key={activity.id} className="border-b pb-4">
                    <p>
                      <span className="font-semibold">{activity.action}</span> {activity.target}
                    </p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}