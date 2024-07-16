'use client'
import React, { useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError, AxiosResponse } from 'axios'
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
import { messageSchema } from '@/schemas/messageSchema'
import { Loader2 } from 'lucide-react'
import { log } from 'console'

const page = () => {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()
  const username = params.username

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)

  const [sentence1, setSentence1] = useState()
  const [sentence2, setSentence2] = useState()
  const [sentence3, setSentence3] = useState()

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  })

  const getSuggestions = async () => {
    setLoading(true)
    try {
      const response = await axios.post<ApiResponse>('/api/suggest-messages')
      if (!response) {
        toast({
          title: 'Error in getting suggestions',
          variant: 'destructive',
        })
      }
      const res = response.data.message.candidates[0].content.parts[0].text
      const sentences = res.split('||')
      setSentence1(sentences[0].replace(/\n/g, ''))
      setSentence2(sentences[1].replace(/\n/g, ''))
      setSentence3(sentences[2].replace(/\n/g, ''))
    } catch (error) {
      toast({
        title: 'Error in getting suggestions',
        variant: 'destructive',
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    getSuggestions()
  }, [])

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    setIsSubmitting(true)
    console.log(data)
    try {
      const response = await axios.post<ApiResponse>('/api/send-message', {
        username: username,
        content: data.content,
      })
      toast({
        title: response.data.message,
      })
    } catch (error) {
      console.log('Error in sending message::', error)
      const axiosError = error as AxiosError<ApiResponse>
      let errorMessage = axiosError.response?.data.message
      toast({
        title: 'Error in sending message',
        description: errorMessage,
        variant: 'destructive',
      })
    }
    setIsSubmitting(false)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 my-10 mx-20 border p-5 rounded-md'
        >
          <FormField
            name='content'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Type something...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex justify-end items-end'>
            <Button type='submit' disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                </>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </form>
        <div className='flex flex-col gap-3 items-center justify-center mx-20 md:mx-10 sm:mx-3'>
          <Button
            className='text-wrap h-fit w-full dark:bg-gray-800 dark:text-white'
            onClick={() => {
              form.setValue('content', JSON.stringify(sentence1))
            }}
          >
            {JSON.stringify(sentence1) || <>Loading...</>}
          </Button>
          <Button
            className='text-wrap h-fit w-full dark:bg-gray-800 dark:text-white'
            onClick={() => {
              form.setValue('content', JSON.stringify(sentence2))
            }}
          >
            {JSON.stringify(sentence2) || <>Loading...</>}
          </Button>
          <Button
            className='text-wrap h-fit w-full dark:bg-gray-800 dark:text-white'
            onClick={() => {
              form.setValue('content', JSON.stringify(sentence3))
            }}
          >
            {JSON.stringify(sentence3) || <>Loading...</>}
          </Button>
        </div>
        <div className='flex items-center justify-center my-10'>
          <Button onClick={getSuggestions}>
            {loading ? <>Refreshing...</> : 'Refresh Suggestions'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default page
