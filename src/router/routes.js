import Landing from "pages/Landing.vue";
import Journal from "pages/Journal.vue";
import PrivacyPolicy from "pages/PrivacyPolicy.vue";
import PokemonSaveWorld from "pages/PokemonSaveWorld.vue";

const routes = [
	{
		path: "/",
		component: () => import("layouts/Main.vue"),
		children: [
			{ path: "/", component: Landing },
			// { path: '/content:issue', component: Journal}
			// { path: '/issue01/1', component: () => import('components/neusletter/Issue1.vue') }
		],
	},
	{
		path: "/content",
		component: () => import("layouts/Content.vue"),
		children: [{ path: "/content/:id", component: Journal, props: true }],
	},
	{
		path: "/PrivacyPolicy",
		component: () => import("layouts/Content.vue"),
		children: [{ path: "/PrivacyPolicy", component: PrivacyPolicy }],
	},
	{
		path: "/pokemonsaveworld",
		component: () => import("layouts/Plane.vue"),
		children: [{ path: "/PokemonSavesTheWorld", component: PokemonSaveWorld }],
	},
	{
		path: "/nftdrop/:id",
		component: () => import("src/layouts/NFTDrop.vue"),
	},
	// Always leave this as last one,
	// but you can also remove it
	{
		path: "*",
		component: () => import("pages/Landing.vue"),
	},
];

export default routes;
