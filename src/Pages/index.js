import { lazy } from "react";

const  HomePage =lazy(()=>import("./HomPage"));
const HealthBlog =lazy(()=>import("./HealthBlog"));
const ProductPage =lazy(()=>import("./ProductPage"));
const SignUp =lazy(()=>import("./SignUp"));
const ProductDetail =lazy(()=>import("./ProductDetail"));


export{
    HomePage,
    HealthBlog,
    ProductPage,
    SignUp,
    ProductDetail,

}