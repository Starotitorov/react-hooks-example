import {useEffect, useState} from 'react';
import { fetchPosts } from './api';
import useDebounce from '../useDebounce';

export function usePosts(searchString) {
    const [items, setItems] = useState([]);
    const [fetching, setFetching] = useState(true);
    const debouncedSearchString = useDebounce(searchString, 500);

    useEffect(() => {
        setFetching(true);

        fetchPosts({
            searchString: debouncedSearchString,
            onFinish: posts => {
                setItems(posts);

                setFetching(false);
            },
            onError: () => setFetching(false)
        });
    }, [debouncedSearchString]);

    return {
        fetching,
        items
    }
}
