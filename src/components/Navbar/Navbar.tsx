import React from "react";
import {Layout} from "antd";
import style from './style.module.css';
import {useHistory} from "react-router-dom";
import {RouteNames} from "../../routes";
const Navbar = () => {
    const router = useHistory();

    return (
    <Layout.Header className={style.navbar} >
        <div onClick={() => router.push(RouteNames.MAIN)}><span className={style.n7}>N7</span ><span className={style.logo} >System Assistant</span></div>
    </Layout.Header>
  );
};

export default Navbar;
