import { useLoaderData } from "react-router-dom";
import Headers from "./Headers";
import { useState } from "react";
import Swal from "sweetalert2";


const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-rho-lovat.vercel.app/user/${id}`,{
                    method : 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainning = users.filter(user => user._id !== id);
                            setUsers(remainning)
                        }
                    })

                // 
            }
        });
    }

    return (
        <div>
            <Headers />
            <h2>users {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Created At</th>
                            <th>LastLogged At</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>

                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn">X</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;