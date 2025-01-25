import { transformPost } from '../transformers';

export const getPosts = (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3005/posts?title=${searchPhrase}&_page=${page}&_per_page=${limit}`,
	)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => {
			return {
				posts: loadedPosts.data && loadedPosts.data.map(transformPost),
				links: loadedPosts.pages,
			};
		});
