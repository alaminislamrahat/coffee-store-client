import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee ,setCoffees,coffees}) => {
    const { _id, name, supplier, category, photo, price, taste, detail, resturant } = coffee;


    const handleDelete = _id => {
        console.log(_id);

        // sweet allert 
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

                fetch(`https://coffee-store-server-rho-lovat.vercel.app/coffee/${_id}`,
                    {
                        method: "DELETE"
                    }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainning = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainning);
                        }
                    })
            }
        });

    }

    return (
        <div className="card card-side bg-base-100 shadow-xl border my-3">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body w-full grid grid-cols-2 items-center">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Returant : {resturant}</p>
                    <p>category : {category}</p>
                    <p>Price : {price}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn btn-circle btn-outline btn-info">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-circle btn-outline btn-success">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-circle btn-outline btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;