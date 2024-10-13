'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

// Define the IUser interface
interface IUser {
  name: string;
  email: string;
  password: string;
}

// Define the form data type
interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>();
  const [responseMessage, setResponseMessage] = useState<string>('');

  // Define the submit handler with the correct type
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (formData) => {
    const userData: IUser = { ...formData };

    try {
      const response = await fetch('/api/users/createProfile', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage(result.message);
      } else {
        setResponseMessage(result.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
    <Card className="my-32 w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        <CardDescription>Create your account to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {responseMessage && <p className={`text-${responseMessage.includes('success') ? 'green' : 'red'}-500`}>{responseMessage}</p>}
          
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500">{(errors.name.message as string)}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid',
                },
              })}
              placeholder="abc@zyz.com"
            />
            {errors.email && <p className="text-red-500">{(errors.email.message as string)}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              {...register('password', { required: 'Password is required' })}
              type="password"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500">{(errors.password.message as string)}</p>}
          </div>

          <Button
            type="button"
            className="w-full"
            onClick={handleSubmit(onSubmit)}  // Properly call handleSubmit with onSubmit
          >
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account? <a href="#" className="text-primary hover:underline">Log in</a>
        </p>
      </CardFooter>
    </Card>
  );
}
