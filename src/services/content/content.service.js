import GhostContentAPI from "@tryghost/content-api";
//import { readingTime } from "@tryghost/helpers";
import moment from "moment";

const fetchArticles = () => {
	const articles = [];
	const podcasts = [];

	const api = new GhostContentAPI({
		host: "https://neustreet.ghost.io",
		key: "4c1664c7d206380527d3d59079",
		version: "v3",
	});

	// fetch 5 posts, including related tags and authors
	api.posts
		.browse({
			filter: "tag: [articles, podcast]",
			include: "tags,authors",
		})
		.then((posts) => {
			posts.forEach((post) => {
				const date = moment(post.published_at).format("MMMM Do, YYYY");

				const postHeader = {
					id: post.slug,
					title: post.title,
					date: date,
					subject: post.meta_title,
					image: post.feature_image,
					details: post.excerpt,
				};
				const postBody = { id: post.slug, details: post.html };

				if (post.tags.some((tag) => tag.name === "articles")) {
					articles.push({
						header: postHeader,
						body: postBody,
						author: post.primary_author,
						tag: post.primary_tag,
					});
				} else if (post.tags.some((tag) => tag.name === "podcast")) {
					podcasts.push({
						header: postHeader,
						body: postBody,
						author: post.primary_author,
						tag: post.primary_tag,
					});
				}
			});
		})
		.catch((err) => {
			console.error(err);
		});

	return { articles: articles, podcasts: podcasts };
};

export { fetchArticles };
