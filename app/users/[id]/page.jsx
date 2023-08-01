async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    console.log(data.data)
  return data.data
}
export default async function UserPage({ params }) {
  
    const user = await getUser(params.id);
  return (
    <div className="row">
        <div className="col-md-6 offset-md-3 ">
            <div className="card">
                <div className="card-header text-center">
                    <img src={user.avatar} alt={user.first_name} />
                </div>
                <div className="card-body text-center">
                    <h2>{user.id} {user.first_name} {user.last_name}</h2>
                    <p>{user.email}</p>
                </div>
             </div>
       </div>
    </div>
  )
}
