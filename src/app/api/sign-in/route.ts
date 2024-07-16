import dbConnect from '@/lib/dbConnect'
import UserModel from '@/model/User'
import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

export async function POST(request: Request) {
  await dbConnect()

  try {
    const { identifier, password } = await request.json()

    const user = await UserModel.findOne({
      email: identifier,
      isVerified: true,
    })
    if (!user) {
      return Response.json(
        {
          success: false,
          message: 'User not found',
        },
        { status: 404 }
      )
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.password)
    if (!isPasswordCorrect) {
      return Response.json(
        {
          success: false,
          message: 'Incorrect password',
        },
        { status: 400 }
      )
    }
    return Response.json(
      {
        success: true,
        message: 'Signed In',
      },
      { status: 200 }
    )
  } catch (error) {
    console.log('Error signing in user')
    return Response.json(
      {
        success: false,
        message: 'Error signing in user',
      },
      {
        status: 500,
      }
    )
  }
}
