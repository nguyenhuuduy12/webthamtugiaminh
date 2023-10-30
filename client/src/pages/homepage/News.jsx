import { Navigate } from "react-router-dom";
import React, { useState } from 'react';
export default function news() {
    return (
        <div className="card">
            <div className="p-5 flex flex-col">
                <div className="rounded-xl overflow-hidden">
                    <img src="../../../img/anh1.png" alt="" />
                </div>
                <h5 className="text-2xl md:text-xl font-medium mt-2">Day la dong tieu de</h5>
                <p className="text-slate-600 text-md mt-2">
                    Bạn đang muốn điều tra đối thủ cạnh tranh của mình để tìm hiểu về họ, quan hệ đối tác hoặc bí mật kinh doanh của họ. Điều này giúp bạn cạnh tranh hơn và thu được nhiều lợi ích trên thị trường
                </p>
                <time className="text-slate-500 text-right">2023-01-06 16:45</time>
            </div>
        </div>
    )
}

