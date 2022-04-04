# N7InfiniteList component

> homepage: https://www.npmjs.com/package/n7-react-infinitelist;
## Install
```bash
npm i n7-react-infinitelist
```
## Usage example
###MainPage.tsx
```js
import React, {useEffect, useState} from "react";
import { observer } from "mobx-react";
import { useStore } from "../hooks/useStore";
import { InfiniteList } from "../components/InfiniteList/InfiniteList";

export const MainPage = observer(() => {
  const store = useStore();
  const INF_SCROLL_STEP = 5;
  const [dataLength, setDataLength] = useState<number>(0);

  useEffect(() => {
    store.fetchData.fetchJsonRpc(INF_SCROLL_STEP);
  }, []);

  useEffect(() => {
    setDataLength(store.fetchData.usersData.length)
  }, [store.fetchData.usersData]);

  return (
    <div className="MainPage">
      <div style={{ height: "300px" }}>
        <InfiniteList
          loadMore={(dataLength) => {
            store.fetchData.fetchJsonRpc(INF_SCROLL_STEP, dataLength);
          }}
          countLimit={21}
          dataLength={dataLength}
        >
          {store.fetchData.usersData.map((user) => {
            return (
              <div key={user._id} style={{ height: "50px" }}>
                {user.name}
              </div>
            );
          })}
        </InfiniteList>
      </div>
    </div>
  );
});
```
### Store.ts
```js
usersData: IUsersData[] = [];
  setUsersData(value: IUsersData[]) {
    this.usersData = [...this.usersData, ...value]
  }
  async fetchJsonRpc(limit: number, offset?: number, ) {
    try {
      const response = fetch("/jsonrpc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "get_users",
          params: {
            offset: offset ? offset : 0,
            limit: limit,
          },
        }),
      });
      response
        .then((data) => data.json())
        .then((data) => {
          console.log(data.result);
          if (data.result) {
            this.setUsersData(data.result)
          }
        });
    } catch (e) {}
  }
```
