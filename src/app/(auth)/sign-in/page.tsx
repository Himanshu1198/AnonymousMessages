'use client'
import { useToast } from '@/components/ui/use-toast'
import { SignInSchema } from '@/schemas/signInSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { Boxes } from '@/components/ui/background-boxes'

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  })

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    setIsSubmitting(true)
    try {
      const result = await signIn('credentials', {
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      })

      if (result?.error) {
        toast({
          title: 'Login Failed',
          description:
            result.error === 'CredentialsSignin'
              ? 'Incorrect username or password'
              : result.error.replace(/'/g, '&apos;'),
          variant: 'destructive',
        })
      } else {
        toast({
          title: 'Logged In',
          description: 'Successfully logged in',
        })
        router.replace('/dashboard')
      }
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: 'An unexpected error occurred. Please try again later.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white'>
      <div className='absolute inset-0 z-0'>
        <Boxes className='absolute inset-0 w-full h-screen' />
        <div className='absolute inset-0 bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
      </div>
      <div
        className='w-full max-w-md p-8 space-y-8 dark:bg-gray-800 dark:text-white mx-4 z-10 relative shadow-2xl rounded-2xl'
        style={{
          WebkitBoxShadow: '10px 10px 84px 0px rgba(0,0,0,0.75)',
          MozBoxShadow: '10px 10px 84px 0px rgba(0,0,0,0.75)',
          boxShadow: '10px 10px 84px 0px rgba(0,0,0,0.75)',
        }}
      >
        <div className='text-center'>Sign In</div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              name='identifier'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Username</FormLabel>
                  <FormControl>
                    <Input placeholder='email/username' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='password'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='Password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </Form>
        <div className='text-center m-4'>
          <p>
            Dont have an account?
            <Link
              href={'/sign-up'}
              className='text-blue-600 hover:text-blue-800'
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
