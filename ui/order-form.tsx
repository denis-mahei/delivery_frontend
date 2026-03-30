'use client';

import { useForm } from "react-hook-form";

const OrderForm = ({onSubmitOrder}) => {
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data: any) => {
		onSubmitOrder(data);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 bg-gold rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
		  <h2 className="text-white text-lg font-semibold">Checkout</h2>

		  <div className="flex flex-col gap-1">
			<label htmlFor="name" className="text-zinc-400 text-sm">Name</label>
			<input
			  {...register("name", { required: "Name is required" })}
			  id="name"
			  type="text"
			  className="bg-white border border-zinc-700 rounded-md px-3 py-2 text-black outline-none focus:ring-2 focus:ring-white"
			/>
			{errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
		  </div>

		  <div className="flex flex-col gap-1">
			<label htmlFor="email" className="text-zinc-400 text-sm">Email</label>
			<input
			  {...register("email", { required: "Email is required" })}
			  id="email"
			  type="email"
			  className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white outline-none focus:ring-2 focus:ring-white"
			/>
			{errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
		  </div>

		  <div className="flex flex-col gap-1">
			<label htmlFor="phone" className="text-zinc-400 text-sm">Phone</label>
			<input
			  {...register("phone", { required: "Phone is required" })}
			  id="phone"
			  type="text"
			  className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white outline-none focus:ring-2 focus:ring-white"
			/>
			{errors.phone && <span className="text-red-500 text-xs">{errors.phone.message as string}</span>}
		  </div>

		  <div className="flex flex-col gap-1">
			<label htmlFor="address" className="text-zinc-400 text-sm">Address</label>
			<input
			  {...register("address", { required: "Address is required" })}
			  id="address"
			  type="text"
			  className="bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-white outline-none focus:ring-2 focus:ring-white"
			/>
			{errors.address && <span className="text-red-500 text-xs">{errors.address.message as string}</span>}
		  </div>

		  <button
			type="submit"
			className="mt-2 bg-white text-black rounded-full py-2 font-medium hover:bg-gray-200 transition"
		  >
			Place order
		  </button>
		</form>
	);
};

export default OrderForm;