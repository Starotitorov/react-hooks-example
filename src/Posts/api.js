export const fetchPosts = async ({ searchString: q, onFinish, onError }) => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?${new URLSearchParams({ q })}`
        );
        const posts = await response.json();

        onFinish(posts);
    } catch (e) {
        onError(e);
    }
};
