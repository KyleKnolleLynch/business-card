export default function DisplayProfile({ profile }) {
  console.log(profile)
  return (
    <div className="text-gray-800 text-lg text-left max-w-2xl mx-auto mt-10">
      <div className='mb-10'>
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p>{profile.bio}</p>
      </div>

      <ul>
        <li>{profile.email}</li>
        <li>{profile.phone}</li>
        <li>{profile.twitter}</li>
        <li>{profile.instagram}</li>
        <li>{profile.facebook}</li>
      </ul>
    </div>
  )
}
