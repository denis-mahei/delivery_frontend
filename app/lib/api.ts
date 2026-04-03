import axios from "axios";
import type { Category, Product, Shop } from "@/app/lib/definitions";

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
})

export const getShops = async () => {
	const res = await api.get<Shop[]>("/shops");
	return res.data
}

export const getAllProducts = async () => {
	const res = await api.get<Product[]>("/products");
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

export const getProductsByCategory = async (categoryId: number) => {
	const res = await api.get(`/products?categoryId=${categoryId}`)
	return res.data
}

export const getProductsByShop = async (shopId: number) => {
	const res = await api.get(`/products?shopId=${shopId}`)
	return res.data
}

export const sortByParams = async ( page = 1, limit = 4, sort = 'price', order = 'asc' ) => {
	return api.get(`/products?page=${page}&limit=${limit}&sort=${sort}&order=${order}`)
}

export const getProducts = async (params: {
	shopId?: number
	categoryId?: number
	sort?: string
	order?: string
	page?: number
}) => {
	const res = await api.get('/products', { params })
	return res.data
}