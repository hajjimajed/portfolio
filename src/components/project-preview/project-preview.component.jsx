import './project-preview.styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/right-arrow.svg'

const ProjectPreview = () => {
    return (
        <div className='project-preview-container'>
            <div className='project-image'>
                <img src="https://www.datocms-assets.com/57452/1642288573-stilllife-16x9.jpg?fm=webp" alt="" />
            </div>

            <div className='project-infos'>
                <div className='line-filling'></div>
                <div className='infos'>
                    <Link>
                        <h1>artista-cube portfolio</h1>
                    </Link>
                    <div className='utils'>
                        <h2>react</h2>
                        <h2>firebase</h2>
                        <h2>sass</h2>
                    </div>
                </div>
                <div className='live-view'>
                    <Link className='live-view-link'>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M2330 5109 c-305 -29 -646 -126 -910 -259 -426 -215 -798 -559 -1046
-966 -88 -146 -131 -232 -197 -399 -293 -740 -214 -1591 215 -2303 295 -490
763 -890 1273 -1087 93 -36 146 -54 277 -91 17 -5 18 20 18 419 l0 424 -42 -8
c-177 -34 -396 33 -524 160 -33 33 -83 92 -110 133 -27 40 -69 95 -94 122 -46
50 -126 96 -167 96 -13 0 -23 6 -23 13 -1 6 -7 74 -13 150 l-13 137 46 0 c60
0 147 -23 213 -56 114 -58 197 -140 305 -300 45 -68 84 -104 146 -136 49 -26
165 -31 238 -9 46 13 47 15 58 65 14 69 58 159 114 237 25 35 46 66 46 70 0 3
-42 14 -92 23 -109 21 -307 85 -393 128 -220 111 -381 265 -489 469 -144 272
-164 606 -54 919 40 111 69 168 136 264 l55 80 -17 70 c-39 160 -31 356 21
519 23 75 25 78 51 73 15 -3 54 -8 87 -12 109 -12 228 -62 427 -181 125 -74
111 -72 288 -34 280 60 594 53 906 -22 l62 -15 93 55 c225 133 362 187 521
207 l47 6 25 -78 c51 -161 59 -357 20 -517 l-16 -70 57 -90 c156 -246 208
-409 208 -650 0 -433 -226 -795 -618 -993 -86 -43 -284 -107 -392 -128 -51 -9
-93 -20 -93 -23 0 -4 23 -38 51 -76 29 -39 62 -93 76 -122 50 -108 53 -145 53
-756 0 -536 1 -568 18 -563 131 37 184 55 277 91 582 224 1087 694 1377 1279
338 681 378 1436 112 2108 -67 170 -109 256 -198 402 -213 350 -512 649 -862
862 -146 88 -232 131 -400 197 -359 142 -775 202 -1154 166z"/>
                            </g>
                        </svg>
                    </Link>
                    <Link className='live-view-link'>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M3039 5104 c-64 -19 -141 -90 -169 -156 -48 -113 -20 -240 72 -323
84 -76 79 -75 677 -75 l526 0 -1192 -1192 c-1318 -1319 -1243 -1236 -1243
-1368 0 -206 213 -341 400 -254 48 22 213 182 1248 1217 l1192 1192 0 -526 c0
-598 -1 -593 75 -677 115 -128 305 -127 420 0 79 88 76 36 73 1064 l-3 909
-22 41 c-34 63 -66 97 -125 129 l-53 30 -915 2 c-772 2 -922 0 -961 -13z"/>
                                <path d="M705 4539 c-267 -50 -495 -221 -618 -466 -15 -28 -39 -91 -54 -140
l-28 -88 -3 -1525 c-2 -1045 1 -1547 8 -1594 29 -187 103 -329 245 -471 142
-142 284 -216 471 -245 47 -7 549 -10 1594 -8 l1525 3 88 28 c325 101 548 353
606 681 7 38 11 294 11 692 0 608 -1 635 -20 686 -40 107 -149 181 -266 180
-110 -1 -198 -55 -252 -157 l-27 -50 -5 -645 -5 -645 -23 -47 c-13 -26 -44
-65 -68 -87 -87 -76 33 -71 -1604 -71 -1664 0 -1531 -7 -1623 83 -95 92 -87
-53 -87 1622 0 1642 -5 1522 71 1609 22 24 61 55 87 68 l47 23 640 5 640 5 52
24 c138 62 204 231 144 367 -30 68 -94 130 -159 154 -51 19 -77 20 -695 19
-353 -1 -664 -5 -692 -10z"/>
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectPreview;