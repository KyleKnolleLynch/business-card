import axios, { AxiosRequestConfig } from 'axios'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function EditProfile({ profile, setEditing }) {
  const { register, handleSubmit } = useForm({ defaultValues: profile })
  const router = useRouter()

  const onSubmitForm = async (values) => {
    const config: AxiosRequestConfig = {
      url: '/api/editprofile',
      data: values,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await axios(config)

    if (res.status === 200) {
      router.reload()
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Edit your profile</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input
          type="text"
          name="name"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your name"
          {...register('name', { required: true })}
        />
        <input
          type="text"
          name="slug"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your unique profile URL"
          {...register('slug', { required: true })}
        />
        <textarea
          className="w-full bg-gray-100 text-gray-900 rounded-md pl-2 mt-3"
          placeholder="A little bit about you"
          rows={4}
          {...register('bio', { required: true })}
        />
        <input
          type="text"
          name="phone"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your phone number"
          {...register('phone')}
        />
        <input
          type="text"
          name="twitter"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your twitter link"
          {...register('twitter')}
        />
        <input
          type="text"
          name="instagram"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your instagram link"
          {...register('instagram')}
        />
        <input
          type="text"
          name="facebook"
          className="w-full bg-gray-100 text-gray-900 rounded-md h-12 pl-2 mt-3"
          placeholder="Enter your facebook link"
          {...register('facebook')}
        />
        <button
          type="submit"
          className="bg-yellow-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-yellow-500">
          Edit Profile
        </button>
      </form>
      <button onClick={() => setEditing(false)} className="bg-yellow-900 text-white rounded-md py-2 px-4 mt-4 hover:bg-yellow-800">Cancel</button>
    </div>
  )
}
