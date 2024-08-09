import React from "react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="bannerMain">
            <div className="bannerSlider z-10" style={{ "--quantity": 10 } as React.CSSProperties}>
                {/* Slider Items */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className="bannerItem"
                        style={{ "--position": index + 1 } as React.CSSProperties}
                    >
                        <div className="h-full w-full relative overflow-hidden rounded-lg">
                            <Image
                                className="object-cover"
                                src={`/images/slider/slider${index + 1}.jpg`}
                                fill={true}
                                alt="Slider Screenshot"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-4 flex flex-col items-start mx-auto">
                <a
                    className="hover:text-lightGreen text-slate-200 font-rigidSquare"
                    href="https://www.picozzimichele.com/"
                >
                    @picozzimichele
                </a>
                <p className="lg:text-8xl text-4xl font-rigidSquare font-bold text-headerDark">
                    CSS ONLY
                </p>
            </div>
        </div>
    );
}
