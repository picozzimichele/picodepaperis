"use client";
import SocialLink from "@/components/header/SocialLink";
import Layout from "@/components/layout/Layout";
import GithubSvg from "@/public/svg/GithubSvg";
import LinkedinSvg from "@/public/svg/LinkedinSvg";

export default function Home() {
    return (
        <Layout>
            <div className="flex w-full h-full pt-10">
                <div className="flex flex-col gap-4">
                    <p className="dark:text-slate-200 text-4xl sm:text-5xl font-bold">Michele Picozzi</p>
                    <p className="max-w-md font-figtree">
                        Oh, hi! I did not see you there!<br></br> I am a <span className="dark:text-headerDark">Full Stack Developer</span> coding Smart
                        Contracts in <span className="dark:text-headerDark">Solidity</span> with a passion for{" "}
                        <span className="dark:text-headerDark">Design</span>, <span className="dark:text-headerDark">Front-End</span> and building{" "}
                        <span className="dark:text-headerDark">Games</span>.
                    </p>
                    <div className="flex sm:hidden gap-6 mt-2">
                        {" "}
                        <SocialLink svg={<GithubSvg />} link={"https://github.com/picozzimichele"} />
                        <SocialLink svg={<LinkedinSvg />} link={"https://www.linkedin.com/in/picozzimichele/"} />
                    </div>
                </div>
                <div className="flex absolute bottom-0 lg:-right-[5%] -right-[10%] h-[70%] pointer-events-none pl-10">
                    <svg className="svgpathryno" width="100%" height="100%" viewBox="0 0 216 119">
                        <g className="svggryno" stroke="#CCD6F6" strokeWidth="0.05" fill="currentColor" fillRule="nonzero">
                            <path d="M75.3874 118.745C75.0812 118.745 74.7802 118.666 74.5146 118.513C74.249 118.361 74.0282 118.141 73.8745 117.876C73.7208 117.611 73.6395 117.311 73.6389 117.004C73.6382 116.698 73.7183 116.397 73.8709 116.132L86.8781 93.3834C86.6025 90.4752 86.1511 87.5864 85.5262 84.7328C82.9986 89.5551 80.6698 94.3433 78.625 98.5522C75.4726 105.033 72.9848 110.145 71.0422 112.974C70.8863 113.201 70.679 113.387 70.4371 113.518C70.1953 113.65 69.9257 113.722 69.6506 113.729L51.1338 114.223C50.7986 114.237 50.4668 114.152 50.1798 113.978C49.8928 113.805 49.6636 113.55 49.5207 113.246C49.3739 112.946 49.3167 112.609 49.3559 112.277C49.3952 111.944 49.5293 111.63 49.7422 111.372L62.3859 96.0757C62.2837 95.0249 62.0905 92.9063 61.8747 89.9924C58.5917 94.5932 50.4182 104.687 40.8985 106.464C29.6578 108.543 19.9393 97.0811 17.8206 94.3717C2.45055 90.8899 0.0422274 75.7129 0.0195074 75.5595C-0.0363401 75.1893 0.0284713 74.8109 0.204357 74.4804C0.380243 74.1498 0.65786 73.8846 0.996134 73.7241C1.33441 73.5636 1.71537 73.5162 2.08267 73.589C2.44997 73.6617 2.78408 73.8508 3.03559 74.1282C9.28359 80.9442 18.5477 78.5813 22.5293 77.1045C18.9793 71.2711 20.0301 64.262 20.0813 63.9326C20.1385 63.5638 20.3125 63.223 20.5778 62.9605C20.843 62.6979 21.1855 62.5274 21.5549 62.474C21.9243 62.4206 22.3011 62.4871 22.6299 62.6638C22.9586 62.8405 23.222 63.1179 23.3813 63.4555C24.1652 65.1083 25.0569 66.108 26.0339 66.4375C27.7379 67.0055 30.1576 65.7616 32.7079 64.4381C33.9952 63.7356 35.3228 63.1097 36.6839 62.5637C39.2569 61.5981 39.6773 51.7717 38.4674 43.0699C31.9354 32.9936 38.3141 20.4067 38.5924 19.8671C38.7053 19.6495 38.8628 19.4581 39.0546 19.3054C39.2465 19.1527 39.4684 19.0422 39.7058 18.9811C39.9433 18.92 40.1909 18.9097 40.4327 18.9508C40.6744 18.9919 40.9047 19.0835 41.1086 19.2196C41.5403 19.5036 51.6905 26.3196 56.1038 32.9311C60.8523 40.0595 56.4333 49.9711 56.2402 50.4085C56.0488 50.8296 55.6981 51.1574 55.2651 51.3198C54.8321 51.4822 54.3523 51.466 53.9312 51.2747C53.5102 51.0834 53.1824 50.7327 53.0199 50.2996C52.8575 49.8666 52.8737 49.3868 53.065 48.9658C53.1048 48.8806 56.8706 40.3663 53.2014 34.8623C50.2023 30.3638 43.9316 25.5244 40.8928 23.3263C39.5182 26.9331 37.2349 35.0725 41.5801 41.4455C41.7293 41.6649 41.8264 41.9155 41.8641 42.1782C42.327 45.6031 42.5698 49.0541 42.5911 52.5101C42.5911 60.286 41.0575 64.6426 37.9051 65.824C36.6712 66.3224 35.4669 66.8914 34.2983 67.528C31.2141 69.1298 28.0219 70.7883 24.9036 69.7375C24.4114 69.5715 23.942 69.3444 23.5063 69.0616C23.7789 71.4643 24.5514 74.3781 26.5337 76.7183C26.7038 76.921 26.8256 77.1597 26.8898 77.4164C26.9539 77.6731 26.9588 77.941 26.9041 78.1999C26.8494 78.4588 26.7364 78.7018 26.5739 78.9106C26.4113 79.1194 26.2033 79.2884 25.9657 79.4049C25.3977 79.6776 14.3842 85.0849 5.10311 80.1263C6.38284 82.953 8.33059 85.4263 10.7786 87.333C13.2266 89.2398 16.1014 90.5228 19.1554 91.0716C19.5842 91.1569 19.9654 91.4002 20.2233 91.7532C20.3198 91.8839 29.9645 104.919 40.2566 103.011C50.9009 101.04 60.3354 86.0335 60.432 85.8801C60.5516 85.6869 60.7079 85.519 60.8921 85.386L61.5282 84.9315C61.0625 77.0647 60.6762 66.1875 61.1136 55.1513C62.2496 26.2742 68.2988 10.0691 79.0624 6.97355C99.6126 1.07203 110.064 7.14962 113.29 9.66586C117.686 6.9849 133.738 -2.1599 143.718 0.469941C153.289 2.98618 167.403 8.89906 170.982 10.4383C173.419 9.14761 176.212 8.68885 178.934 9.13194C184.733 10.0123 190.43 14.4143 195.866 22.1959C208.51 40.3379 210.509 55.2422 202.33 70.476C201.268 74.6962 199.393 85.9255 202.671 90.4355C202.896 90.7371 203.018 91.1038 203.018 91.4806C203.018 91.8574 202.896 92.2241 202.671 92.5257C202.625 92.5882 197.684 99.2054 200.592 106.084C201.16 107.174 203.398 111.94 201.489 114.899C200.842 115.905 199.478 117.075 196.638 116.91C189.959 116.541 175.168 116.91 175.015 116.91C174.695 116.918 174.379 116.839 174.101 116.679C173.824 116.52 173.595 116.288 173.441 116.007C173.287 115.727 173.212 115.41 173.227 115.09C173.241 114.77 173.342 114.461 173.521 114.195C177.497 108.276 181.831 101.574 182.501 100.131C182.433 99.2849 181.643 96.6153 180.945 94.2524C179.473 89.2654 177.537 82.6596 177.326 77.8259C173.629 77.7748 164.95 77.3942 156.509 75.1165C158.98 81.6883 162.848 95.9053 154.834 105.465C161.19 106.981 169.13 107.737 170.42 105.169C172.941 100.12 170.732 90.6627 170.709 90.5661C170.601 90.1142 170.678 89.638 170.921 89.2422C171.165 88.8465 171.555 88.5637 172.007 88.456C172.459 88.3483 172.935 88.4245 173.331 88.6679C173.727 88.9113 174.009 89.3019 174.117 89.7539C174.219 90.1912 176.65 100.546 173.549 106.731C170.221 113.394 154.186 109.003 151.005 108.049C150.706 107.96 150.436 107.792 150.223 107.563C150.011 107.334 149.864 107.052 149.798 106.747C149.731 106.442 149.748 106.124 149.847 105.828C149.946 105.531 150.122 105.266 150.358 105.061C161.121 95.7008 153.806 77.4169 152.187 73.759C145.382 71.3052 139.299 67.3292 137.084 60.9165C133.636 50.9254 135.607 40.2981 141.883 35.0782C145.462 32.1019 153.618 28.3247 168.045 36.4925C171.323 38.3499 174.293 40.264 174.861 43.2517C175.668 47.4379 171.783 52.2772 162.411 63.9667C160.604 66.2387 158.599 68.7208 156.39 71.5154C167.04 74.5655 178.883 74.3838 179.082 74.3838C179.326 74.3794 179.569 74.4279 179.794 74.5259C180.018 74.6239 180.219 74.7692 180.382 74.9518C180.55 75.129 180.678 75.3393 180.76 75.5692C180.841 75.7991 180.873 76.0435 180.854 76.2866C180.53 80.5182 182.717 87.9249 184.313 93.3266C185.807 98.3875 186.261 100.04 185.892 101.165C185.437 102.545 181.166 109.157 178.326 113.405C183.154 113.315 191.958 113.195 196.877 113.468C197.4 113.496 198.32 113.468 198.581 113.048C199.194 112.099 198.342 109.31 197.49 107.669L197.434 107.549C194.4 100.466 197.695 93.9173 199.234 91.4579C195.304 84.1875 198.893 70.067 199.058 69.4365C199.093 69.3002 199.145 69.1686 199.211 69.0446C206.8 55.0377 204.891 41.2126 193.054 24.2123C188.294 17.3963 183.279 13.3635 178.565 12.6024C174.691 11.9776 172.317 13.7384 172.214 13.7895C171.967 13.975 171.675 14.0925 171.368 14.1304C171.062 14.1683 170.75 14.1252 170.465 14.0054C170.295 13.9315 153.391 6.62139 142.832 3.84955C132.88 1.23107 114.25 13.1818 114.068 13.3011C113.725 13.524 113.315 13.6194 112.909 13.5706C112.503 13.5218 112.128 13.3319 111.847 13.0341C111.768 12.9489 102.623 3.84955 80.0394 10.3361C64.5898 14.7722 63.4481 56.168 64.8624 82.6823C66.5664 81.5463 68.668 80.2285 70.8661 78.9619C78.75 74.4179 83.2145 73.3387 85.3445 75.4687C85.6169 75.7451 85.8641 76.0455 86.0829 76.3661C92.7171 64.6539 100.328 54.2141 108.462 51.5672C110.056 51.0181 111.747 50.8083 113.426 50.9511C115.106 51.0939 116.737 51.5862 118.215 52.3965C121.623 54.2198 123.503 56.2987 123.895 58.7467C124.514 62.7227 121.026 66.3012 117.647 69.766C115.142 72.339 112.535 74.9916 112.307 77.15C111.529 84.1307 105.151 91.918 103.083 94.2411C103.975 98.2171 106.423 109.975 105.293 113.36C104.725 114.99 103.066 116.683 89.241 117.904C82.3511 118.517 75.5067 118.711 75.4386 118.711L75.3874 118.745ZM87.8834 80.2853C89.6499 85.5336 90.2861 92.5711 90.3713 93.6333C90.4015 93.985 90.3242 94.3375 90.1497 94.6443L78.4319 115.149C88.9967 114.706 100.141 113.513 102.004 112.099C102.481 109.907 101.112 101.398 99.4536 94.1672C99.3891 93.8884 99.3942 93.598 99.4685 93.3216C99.5428 93.0452 99.684 92.7914 99.8796 92.5825C99.9591 92.4973 108.03 83.8069 108.809 76.7978C109.183 73.4239 112.217 70.3339 115.119 67.3406C117.897 64.5006 120.765 61.547 120.418 59.2977C120.22 58.0254 118.919 56.7417 116.556 55.4864C115.491 54.9006 114.313 54.5471 113.101 54.4492C111.889 54.3513 110.67 54.5112 109.524 54.9184C102.021 57.3381 94.4268 68.4652 87.9062 80.2853H87.8834ZM65.0555 86.7208C65.2998 90.4071 65.5894 93.7015 65.8791 96.4392C65.9034 96.6703 65.8812 96.9039 65.8139 97.1263C65.7466 97.3487 65.6355 97.5554 65.4872 97.7343L54.8258 110.634L68.5941 110.264C70.3549 107.475 72.7235 102.596 75.4101 97.03C78.0059 91.6964 80.8913 85.7608 84.021 79.99C83.7423 79.2458 83.3304 78.5587 82.8055 77.9622C82.6669 77.9146 82.5197 77.8971 82.3738 77.9111C81.431 77.9111 78.7273 78.3939 72.0874 82.2733C69.4178 83.8467 66.8334 85.545 65.101 86.7208H65.0555ZM152.136 35.0327C149.21 34.9438 146.349 35.9049 144.07 37.7421C138.884 42.0532 137.351 51.1071 140.338 59.7578C142.099 64.8698 147.041 68.1812 152.834 70.3453C155.373 67.1304 157.645 64.2961 159.65 61.7742C167.545 51.9251 171.896 46.5007 171.396 43.8992C171.13 42.519 169.238 41.2012 166.284 39.5143C161.059 36.5493 156.259 35.0498 152.198 35.0498L152.136 35.0327Z" />
                            <path d="M212.872 55.6341H212.69C208.998 55.4126 205.874 45.1772 206.101 41.5761C206.118 41.2705 206.215 40.9746 206.383 40.7184C206.55 40.4621 206.782 40.2545 207.055 40.1164C204.082 36.6087 200.784 33.3891 197.206 30.5001C196.844 30.2124 196.611 29.7925 196.558 29.3329C196.505 28.8733 196.637 28.4115 196.925 28.0492C197.213 27.6869 197.633 27.4537 198.092 27.401C198.552 27.3483 199.014 27.4803 199.376 27.7681C201.12 29.1483 216.416 41.542 215.78 50.9992C215.575 54.0778 214.599 55.6341 212.872 55.6341ZM209.725 43.7061C210.204 46.2343 211.066 48.6746 212.281 50.9424V50.7891C212.406 48.6875 211.367 46.211 209.719 43.6891L209.725 43.7061Z" />
                        </g>
                    </svg>
                </div>
            </div>
        </Layout>
    );
}
