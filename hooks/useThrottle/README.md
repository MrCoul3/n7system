# useThrottle hook
> homepage: https://www.npmjs.com/package/n7-usethrottle;
```bash
npm i n7-usethrottle
```
## Usage example
```js
const throttleLoadMore = useThrottle(() => props.loadMore(dataLength), 500);
...
function handleScroll(e: React.UIEvent<HTMLElement>) {
    ...
    let scrollBottom =
        element.scrollHeight - element.offsetHeight - element.scrollTop;
    if (dataLength < countLimit) {
        if (Math.floor(scrollBottom) <= 0) {
            
            throttleLoadMore();
            
        }
    }
}
```
