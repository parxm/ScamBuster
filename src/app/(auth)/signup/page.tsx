"use client"
import React from 'react'
import "@/app/globals.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/router'
import { Input } from '@/components/ui/input'
import {useForm} from 'react-hook-form'
import { SignUpSchema } from '@/schemas/SignUpSchema'
import Link from 'next/link'
import * as z from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form';
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { Loader2 } from 'lucide-react'




export default function signupform(){
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const debouncedUsername = useDebounce(username, 300);

  const router = useRouter();
  const { toast } = useToast();

  useEffect(()=>{
    if(debouncedUsername){
      setIsCheckingUsername(true)
      setUsernameMessage('')
      try {
        const response = await axios.get()
        
      } catch (error) {
        
      }

    }


  },[debouncedUsername])

  const onsubmit=()=>{
    console.log("hello")

  }
    return (
        <Card className="flex-col items-center justify-center w-full max-w-md mx-auto mt-20">
        <CardHeader>
          <CardTitle>Join the Fight Against Scams</CardTitle>
          <CardDescription>
            ScamBuster is on a mission to raise awareness and educate people about the latest scams. Sign up to stay
            informed and help us protect our community.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-6">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      setUsername(e.target.value);
                    }}
                  />
                  {isCheckingUsername && <Loader2 className="animate-spin" />}
                  {!isCheckingUsername && usernameMessage && (
                    <p
                      className={`text-sm ${
                        usernameMessage === 'Username is unique'
                          ? 'text-green-500'
                          : 'text-red-500'
                      }`}
                    >
                      {usernameMessage}
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} name="email" />
                  <p className='text-muted text-gray-400 text-sm'>We will send you a verification code</p>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...field} name="password" />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='w-full' disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
        </Form>
        </CardContent>
      </Card>
    )
    


}

function useDebounce(username: string, arg1: number) {
  throw new Error('Function not implemented.')
}

