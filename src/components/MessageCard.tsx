'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { Message } from '@/model/User'
import { useToast } from './ui/use-toast'
import { ApiResponse } from '@/types/ApiResponse'
import axios from 'axios'

type MessageCardProps = {
  message: Message
  onMessageDelete: (messageId: string) => void
}

const MessageCard = ({ message, onMessageDelete }: MessageCardProps) => {
  const { toast } = useToast()
  const handleDeleteConfirm = async () => {
    const response = await axios.delete<ApiResponse>(
      `/api/delete-message/${message._id}`
    )
    toast({
      title: response.data.message,
    })
    onMessageDelete(message._id as string)
  }

  const formattedDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    }

    return new Date(date).toLocaleString('en-US', options)
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{message.content}</CardTitle>
          <CardDescription>{formattedDate(message.createdAt)}</CardDescription>
          <AlertDialog>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  message.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteConfirm}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
            <AlertDialogTrigger asChild>
              <Button variant='destructive'>Delete</Button>
            </AlertDialogTrigger>
          </AlertDialog>
        </CardHeader>
      </Card>
    </div>
  )
}

export default MessageCard
