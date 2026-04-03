import { getAllProducts, getShops } from "@/app/lib/api";
import ShopsList from "@/app/ui/shops-list";
import { getCategoriesList } from "@/app/lib/api";


export default async function Home () {
	const shops = await getShops();
	const allProducts = await getAllProducts()
	const categoriesList = await getCategoriesList()

	return (
		<>
			<ShopsList shops={shops} categories={categoriesList} products={allProducts}/>
		</>
	);
}
