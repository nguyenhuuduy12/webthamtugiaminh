import { useEffect, useState } from "react";
import Slider from "./Slider"
import News from "./news"

export default function IndexPage() {
    return (
        <div className="">
            <Slider />
            <h2 className="font-bold text-2xl text-center">NHỮNG BÀI VIẾT CHIA SẺ HAY</h2>
            <div className="flex items-center mx-auto bg-slate-400	">
                {/* grid */}
                <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 hover:cursor-pointer">
                    <News />
                    <News />
                    <News />
                    <News />
                    <News />
                </div>
                {/* grid en */}
            </div>

        </div>
    )

}