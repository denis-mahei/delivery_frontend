import { getShops } from "@/lib/api";
import ShopsList from "@/ui/shops-list";

export default async function Home () {
	const shops = await getShops();

	return (
		<>
			<ShopsList shops={shops}/>
		</>
	);
}
