import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
})

export const getShops = async () => {
	const res = await api.get("/shops");
	return res.data
}

export const getProductsByShop = async (shopId: number) => {
	const res = await api.get(`/shops/${shopId}`)
	return res.data
}

export const order = async (data) => {
	const res = await api.post("/orders", data);
	return res.data
}
