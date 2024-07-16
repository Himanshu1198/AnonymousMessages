'use client'
import React from 'react'
import { useToast } from '@/components/ui/use-toast'
import { VerifySchema } from '@/schemas/verifySchema'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { ApiResponse } from '@/types/ApiResponse'
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

const VerifyAccount = () => {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof VerifySchema>>({
    resolver: zodResolver(VerifySchema),
  })

  const onSubmit = async (data: z.infer<typeof VerifySchema>) => {
    try {
      const response = await axios.post('/api/verify-code', {
        username: params.username,
        code: data.code,
      })
      toast({
        title: 'Success',
        description: response.data.message,
      })
      router.replace(`/sign-in`)
    } catch (error) {
      console.log('Error in verification of user', error)
      const axiosError = error as AxiosError<ApiResponse>
      let errorMessage = axiosError.response?.data.message
      toast({
        title: 'Verification failed',
        description: errorMessage,
        variant: 'destructive',
      })
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white'>
      <div className='w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-md mx-4'>
        <div className='text-center'>Verify Account</div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              name='code'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Enter 6 digit verification code'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className=''>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default VerifyAccount
