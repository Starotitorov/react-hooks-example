import React, { useState } from 'react';
import { Input } from 'reactstrap';
import List from './List';
import { usePosts } from './hooks';

export default function Posts() {
    const [searchString, setSearchString] = useState('');
    const { items, fetching } = usePosts(searchString);

    return (
        <div>
            <h1>Posts</h1>
            <Input
                placeholder="Search..."
                value={searchString}
                onChange={e => setSearchString(e.target.value)} />
            <h4>Results:</h4>
            <List items={items} fetching={fetching} />
        </div>
    );
}
