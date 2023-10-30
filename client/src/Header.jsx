import React, { useState } from 'react';
export default function Header() {
    const Links = [
        { name: "Trang chủ", link: "/" },
        { name: "Giới thiệu", link: "/" },
        { name: "Dịch vụ", link: "/" },
        { name: "Bảng giá thuê thám tử", link: "/" },
        { name: "Tư vấn", link: "/" },
        { name: "Liên Hệ", link: "/" },
        { name: "Tin Tức", link: "https://www.google.com/" },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div className="p-6 mx-auto">
            <nav className="flex flex-row justify-between items-center relative ">
                <div className="logo basis-2/6 text-center text-2xl font-semibold cursor-pointer ">
                    <a href="/">Thamtugiaminh.com</a>
                </div>
                <ul id="duy-top-menu" className={`basis-3/6  2xl:flex 2xl:items-center 2xl:justify-end 2xl:gap-5 uppercase text-sm text-gray-500 font-medium ${open ? 'duy-topmenu-expanded' : "hidden"}`}>
                    {
                        Links.map((link) => (
                            <li className="duy-top-menu-item">
                                <a href={link.link} className="">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <ul className=" basis-1/6 hidden 2xl:flex 2xl:justify-center items-center ml-16 uppercase text-sm text-gray-500 font-medium">
                    <li className="duy-top-menu-item">
                        <a href="#" className="flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duy-icon ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <span className="ml-1.5">Tìm kiếm</span>
                        </a>
                    </li>
                </ul>
                <div className="basis-1/6 2xl:hidden flex items-center cursor-pointer justify-end" onClick={() => setOpen(!open)}>
                    {open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duy-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg> : <svg id="duy-toggle-top-menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="duy-icon" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>}
                </div>
            </nav>
        </div>
    )
}