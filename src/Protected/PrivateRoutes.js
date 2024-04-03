import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
    //Tạo 1 biến auth để lấy dữ liệu từ localStorage xác thực người dùng đăng nhập hay chưa
    let auth = { 'token': JSON.parse(localStorage.getItem('auth')) };


    return (
        // Nếu auth.token trả về null, undefine thì link tới trang đăng nhập
        auth.token ? <Outlet /> : <Navigate to='/login' />
    );
}