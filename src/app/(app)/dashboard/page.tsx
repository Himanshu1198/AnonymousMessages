'use client'
import MessageCard from '@/components/MessageCard'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/components/ui/use-toast'
import { Message } from '@/model/User'
import { AcceptMessagesSchema } from '@/schemas/acceptMessageSchema'
import { ApiResponse } from '@/types/ApiResponse'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { Loader2, RefreshCcw } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSwtichLoading, setIsSwitchLoading] = useState(false)

  const { toast } = useToast()

  const handleDeleteMessage = (messageId: string) => {
    setMessages(messages.filter((message) => message._id !== messageId))
  }

  const { data: session } = useSession()
  const { username } = session?.user || {}

  const form = useForm({
    resolver: zodResolver(AcceptMessagesSchema),
  })

  const { register, watch, setValue } = form

  const acceptMessages = watch('acceptMessages')

  const fetchAcceptMessages = useCallback(async () => {
    setIsSwitchLoading(true)
    try {
      const response = await axios.get<ApiResponse>('/api/accept-messages')
      setValue('acceptMessages', response.data.isAcceptingMessages)
    } catch (error) {
      console.log(error)

      const axiosError = error as AxiosError<ApiResponse>
      toast({
        title: 'Error',
        description:
          axiosError.response?.data.message ||
          'Failed to fetch message settings',
        variant: 'destructive',
      })
    } finally {
      setIsSwitchLoading(false)
    }
  }, [setValue])

  const fetchMessages = useCallback(
    async (refresh: boolean = false) => {
      setIsLoading(true)
      setIsSwitchLoading(false)
      try {
        const response = await axios.get<ApiResponse>('/api/get-messages')
        setMessages(response.data.messages || [])
        if (refresh) {
          toast({
            title: 'Refreshed Messages',
            description: 'Showing latest messages',
          })
        }
      } catch (error) {
        console.log(error)
        const axiosError = error as AxiosError<ApiResponse>
        toast({
          title: 'Error',
          description:
            axiosError.response?.data.message || 'Failed to fetch messages',
          variant: 'destructive',
        })
      } finally {
        setIsLoading(false)
      }
    },
    [setIsLoading, setMessages]
  )

  useEffect(() => {
    if (!session || !session.user) return
    fetchMessages()
    fetchAcceptMessages()
  }, [session, setValue, fetchAcceptMessages, fetchMessages])

  const handleSwitchChange = async () => {
    try {
      const response = await axios.post<ApiResponse>('/api/accept-messages', {
        acceptMessages: !acceptMessages,
      })
      setValue('acceptMessages', acceptMessages)
      toast({
        title: response.data.message,
      })
      fetchAcceptMessages()
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>
      toast({
        title: 'Error',
        description:
          axiosError.response?.data.message ||
          'Failed to fetch message settings',
        variant: 'destructive',
      })
    }
  }

  const baseUrl = `${window.location.protocol}//${window.location.host}`
  const profileUrl = `${baseUrl}/u/${username}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl)
    toast({
      title: 'URL copied',
      description: 'Profile URL has been copied to clipboard',
    })
  }

  if (!session || !session.user) {
    return <div>PLease Login</div>
  }

  return (
    <div className='my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded w-auto max-w-6xl'>
      <div className='flex justify-center items-center'>
        <TypewriterEffectSmooth
          words={[
            { text: 'Welcome,', className: 'text-black ' },
            { text: username, className: 'text-black ' },
          ]}
          className='custom-class text-3xl'
          cursorClassName='custom-cursor-class h-10'
        />
      </div>
      {/* <h1 className='text-4xl font-bold mb-4 text-center'>User Dashboard</h1> */}
      <div className='mb-4'>
        <h2 className='text-lg font-semibold mb-2 text-center'>
          Copy your unique link
        </h2>
        <div className='flex items-center'>
          <input
            type='text'
            value={profileUrl}
            disabled
            className='input input-bordered w-full p-2 mr-2'
          />
          <Button onClick={copyToClipboard}>Copy</Button>
        </div>
      </div>
      <div className='mb-4'>
        <Switch
          {...register('acceptMessages')}
          checked={acceptMessages}
          onCheckedChange={handleSwitchChange}
          disabled={isSwtichLoading}
        />
        <span className='ml-2'>
          Accept Messages: {acceptMessages ? 'Yes' : 'No'}
        </span>
      </div>
      <Separator />
      <Button
        className='mt-4 mx-auto'
        variant='outline'
        onClick={(e) => {
          e.preventDefault()
          fetchMessages(true)
        }}
      >
        {isLoading ? (
          <Loader2 className='h-4 w-4 animate-spin' />
        ) : (
          <RefreshCcw className='h-4 w-4' />
        )}
      </Button>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <MessageCard
              key={message._id as string}
              message={message}
              onMessageDelete={handleDeleteMessage}
            />
          ))
        ) : (
          <p className='col-span-2 text-center'>No Messages to display.</p>
        )}
      </div>
    </div>
  )
}

export default Page
