import React from "react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="bannerMain">
            <div className="bannerSlider" style={{ "--quantity": 4 } as React.CSSProperties}>
                <div className="bannerItem" style={{ "--position": 1 } as React.CSSProperties}>
                    <div className="h-full w-full relative overflow-hidden rounded-lg">
                        <Image
                            className="object-cover"
                            src="/images/projects/goatgaming.png"
                            fill={true}
                            alt="Slider Screenshot"
                        />
                    </div>
                </div>
                <div
                    className="bannerItem absolute inset-0"
                    style={{ "--position": 2 } as React.CSSProperties}
                >
                    <div className="h-full w-full relative overflow-hidden rounded-lg">
                        <Image
                            className="object-cover"
                            src="/images/projects/survivors.png"
                            fill={true}
                            alt="Slider Screenshot"
                        />
                    </div>
                </div>
                <div
                    className="bannerItem absolute inset-0"
                    style={{ "--position": 3 } as React.CSSProperties}
                >
                    <div className="h-full w-full relative overflow-hidden rounded-lg">
                        <Image
                            className="object-cover"
                            src="/images/projects/tilevania.png"
                            fill={true}
                            alt="Slider Screenshot"
                        />
                    </div>
                </div>
                <div
                    className="bannerItem absolute inset-0"
                    style={{ "--position": 4 } as React.CSSProperties}
                >
                    <div className="h-full w-full relative overflow-hidden rounded-lg">
                        <Image
                            className="object-cover"
                            src="/images/projects/miroir.png"
                            fill={true}
                            alt="Slider Screenshot"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
