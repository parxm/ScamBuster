/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/toaster";
import { Toast } from "@/components/ui/toast";



interface ToastProps {
  title: string;
  description?: string;
}


const initialUserData = {
  username: "Parampreet Singh",
  name: "parxm",
  bio: "Full-stack developer ",
  profession: "Software Engineer",
  avatar: "/placeholder.svg?height=200&width=200",
};

export default function EditProfilePage() {
  const [userData, setUserData] = useState(initialUserData);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("userId", "user_id_here"); 
    formData.append("username", userData.username);
    formData.append("name", userData.name);
    formData.append("bio", userData.bio);
    formData.append("profession", userData.profession);
    
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await fetch("/api/editProfile", {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        Toast({
          title: "Profile Updated",
          description: "Your profile has been successfully updated.",
        });
        setUserData(data.user); // Update local user data with response
      } else {
        const errorData = await response.json();
        Toast({
          title: "Error",
          description: errorData.message || "An error occurred while updating your profile.",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Toast({
        title: "Error",
        description: "An error occurred while updating your profile.",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl">Edit Profile</CardTitle>
          <CardDescription>Update your profile information</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Profile Picture</h3>
                <input type="file" accept="image/*" onChange={handleFileChange} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                  placeholder="Your username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profession">Profession</Label>
              <Input
                id="profession"
                name="profession"
                value={userData.profession}
                onChange={handleInputChange}
                placeholder="Your profession"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={userData.bio}
                onChange={handleInputChange}
                placeholder="Tell us about yourself"
                rows={6}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline">Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>
      <Toaster />
    </div>
  );
}