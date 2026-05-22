import axios from "axios";
import type { Category, Data, Shop } from "@/app/lib/definitions";

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
})

export const getShops = async () => {
	const res = await api.get<Shop[]>("/shops");
	return res.data
}

export const getAllProducts = async () => {
	const res = await api.get<Data>("/products");
	return res.data
}

export const order = async ( data: unknown ) => {
	const res = await api.post("/orders", data);
	return res.data
}

export const getCategoriesList = async () => {
	const res = await api.get<Category[]>('/products/category');
	return res.data
}

export const getProducts = async (params: {
	shopId?: number
	categoryId?: number
	sort?: string
	order?: string
	page?: number
}) => {
	const res = await api.get<Data>('/products', { params })
	return res.data
}