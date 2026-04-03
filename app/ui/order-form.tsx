'use client';

import { useForm } from "react-hook-form";

type OrderFormValues = {
	name: string;
	email: string;
	phone: string;
	address: string;
}

type OrderFormProps = {
	onSubmitOrder: (data: OrderFormValues) => void | Promise<void>;
}

const OrderForm = ({onSubmitOrder}: OrderFormProps) => {
	const { register, handleSubmit, formState: { errors } } = useForm<OrderFormValues>();

	const onSubmit = (data: OrderFormValues) => {
		onSubmitOrder(data);
	}

	return (
		<form id='order-form' onSubmit={handleSubmit(onSubmit)} className="panel flex w-full flex-col gap-4 p-4 sm:p-6">
		  <h2 className="text-lg font-semibold text-zinc-100 sm:text-xl">Checkout details</h2>

		  <div className="flex flex-col gap-1">
			<label htmlFor="name" className="text-sm text-zinc-400">Name</label>
			<input
			  {...register("name", { required: "Name is required" })}
			  id="name"
			  type="text"
			  className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-zinc-300"
			/>
			{errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
		  </div>

		  <div className="flex flex-col gap-1">
			<label htmlFor="email" className="text-sm text-zinc-400">Email</label>
			<input
			  {...register("email", { required: "Email is required" })}
			  id="email"
			  type="email"
			  className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-zinc-300"
			/>
			{errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
		  </div>

		  <div className="flex flex-col gap-1">
			<label htmlFor="phone" className="text-sm text-zinc-400">Phone</label>
			<input
			  {...register("phone", { required: "Phone is required" })}
			  id="phone"
			  type="text"
			  className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-zinc-300"
			/>
			{errors.phone && <span className="text-red-500 text-xs">{errors.phone.message as string}</span>}
		  </div>

		  <div className="flex flex-col gap-1">
			<label htmlFor="address" className="text-sm text-zinc-400">Address</label>
			<input
			  {...register("address", { required: "Address is required" })}
			  id="address"
			  type="text"
			  className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-zinc-300"
			/>
			{errors.address && <span className="text-red-500 text-xs">{errors.address.message as string}</span>}
		  </div>

		</form>
	);
};

export default OrderForm;