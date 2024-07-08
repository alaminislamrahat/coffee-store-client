import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Headers from "./Headers";


const UpdateCofee = () => {

    const coffee = useLoaderData();
    const { _id, name, supplier, category, photo, price, taste, detail, resturant } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const name = form.name.value;
        const taste = form.taste.value;
        const detail = form.detail.value;
        const resturant = form.resturant.value;
        const user = {name,supplier,category,photo,price,taste,detail,resturant}
        console.log(user);

        // sent data to server site 
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
           if(data.modifiedCount > 0){
            Swal.fire({
                title: 'success!',
                text: 'User added successfully',
                icon: 'Success',
                confirmButtonText: 'Cool'
              })
           }
        })
    }

    return (
        <div className="bg-slate-200 max-w-6xl mx-auto  pb-40 ">
            <Headers></Headers>
            <h1 className="text-6xl text-slate-600 font-bold my-10 text-center pt-4">Update coffee : {name}</h1>
            <form onSubmit={handleUpdateCoffee} className="">
                <div className="flex gap-6 justify-center items-center">
                    <div className="flex flex-col gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input type="text" name="name" defaultValue={name} className="grow " placeholder="Daisy" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Supplier
                            <input type="text" defaultValue={supplier} className="grow" name="supplier" placeholder="Supplier" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Category
                            <input type="text" className="grow" defaultValue={category} name="category" placeholder="Category" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Photo Url
                            <input type="text" className="grow" defaultValue={photo} name="photo" placeholder="Photo Url" />
                        </label>

                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                            price
                            <input type="text" className="grow" defaultValue={price} name="price" placeholder="price" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            taste
                            <input type="text" className="grow" defaultValue={taste} name="taste" placeholder="taste" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Detail
                            <input type="text" className="grow" defaultValue={detail} name="detail" placeholder="Detail" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Resturant
                            <input type="text" className="grow" defaultValue={resturant} name="resturant" placeholder=" Resturant" />
                        </label>

                    </div>

                </div>
                <button className="btn btn-active  px-48 w-40 ml-96 mt-9 text-white text-xl font-bold">Default</button>

            </form>
        </div>
    );
};

export default UpdateCofee;