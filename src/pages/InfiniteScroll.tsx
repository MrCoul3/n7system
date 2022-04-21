import React, {useEffect, useState} from 'react';
import {InfiniteList} from "../../N7InfiniteList/src";



const InfiniteScroll = () => {
    const INF_SCROLL_STEP = 5;
    const [dataLength, setDataLength] = useState<number>(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, [])

    return (
        <div>
            {/*<InfiniteList countLimit={10} dataLength={} loadMore={} />*/}
        </div>
    );
};

export default InfiniteScroll;