import Head from 'next/head'
import { useState } from 'react'
import { signIn, signOut, getSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'
import CreateProfile from '../components/CreateProfile'
import DisplayProfile from '../components/DisplayProfile'
import EditProfile from '../components/EditProfile'

export default function Home({ session, profile }) {
  const [editing, setEditing] = useState(false)
  return (
    <div className="">
      <Head>
        <title>Business Card Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {!session && (
          <div className='p-2'>
            Not signed in <br />
            <button onClick={() => signIn()} className='bg-indigo-600 text-white py-1 px-3 rounded-md hover:bg-indigo-500 mt-1'>Sign in</button>
          </div>
        )}
        {session && (
          <div className='p-2'>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()} className='bg-indigo-600 text-white py-1 px-3 rounded-md hover:bg-indigo-500 mt-1 mb-3'>Sign out</button>
            {!profile && <CreateProfile />}
            {profile && !editing && (
              <div className="flex flex-col justify-center">
                <DisplayProfile profile={profile} />
                <button
                  onClick={() => setEditing(true)}
                  className="max-w-sm bg-yellow-600 text-white rounded-md py-2 px-4 mt-4 mx-auto hover:bg-yellow-500">
                  Edit Profile
                </button>
              </div>
            )}
            {profile && editing && <EditProfile profile={profile} setEditing={setEditing} />}
          </div>
        )}
      </>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const prisma = new PrismaClient()
  const session = await getSession(context)

  if (!session) {
    return {
      props: {
        session: null,
      },
    }
  }

  const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
    select: {
      name: true,
      email: true,
      bio: true,
      slug: true,
      phone: true,
      facebook: true,
      instagram: true,
      twitter: true,
    },
  })

  console.log('profile:', profile)

  return {
    props: {
      session,
      profile,
    },
  }
}
