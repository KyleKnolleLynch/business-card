import { getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function (req, res) {
  try {
    const { name, bio, phone, twitter, instagram, facebook, slug } = req.body

    const session = await getSession({ req })

    if (!session) {
      return res.status(401)
    }

    const profile = await prisma.profile.create({
      data: {
        name,
        bio,
        phone,
        email: session.user.email,
        twitter,
        instagram,
        facebook,
        slug,
        user: { connect: { email: session.user.email } },
      },
    })

    return res.status(200).json(profile)
    console.log(profile)
  } catch (error) {
    return res.status(500).send(error)
  }
}
