async function UserInfo({ userId }: { userId: string }) {
  const user = await fetch(`https://dummyjson.com/users/${userId}`)
  .then(res => res.json())
 
  return (
    <div className="flex flex-col">
      <div className="text-black">{`${user.firstName} ${user.lastName}`}</div>
      <div className="text-black">{`@${user.username}`}</div>
    </div>
  )
}
export default UserInfo;