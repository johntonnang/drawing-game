import { NavLink } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <div className="flex flex-col h-screen items-center w-full justify-center text-white">
        <div className="flex w-full items-center justify-center absolute top-16">
          <h1 className="font-gloria text-8xl drop-shadow-[0_20px_5px_rgba(0,0,0,0.25)]">
            DoodleTime
          </h1>
        </div>
        <div className="bg-blue h-[15.625rem] flex flex-col items-center justify-center rounded-2xl w-[21.875rem] gap-8">
          <div className="rounded-2xl flex w-[18.75rem] h-[4.6875rem] bg-green items-center justify-center">
            <NavLink to="/create" className="text-2xl font-gloria">
              Create game
            </NavLink>
          </div>
          <div className="rounded-2xl flex items-center justify-center w-[18.75rem] h-[4.6875rem] bg-orange">
            <NavLink to="/join" className="text-2xl font-gloria">
              Join game
            </NavLink>
          </div>
        </div>
        <div className="bg-blue w-full h-64 absolute bottom-0 opacity-50"></div>
        <div className="flex items-center justify-center gap-36 absolute bottom-0 w-full">
          <div className="relative w-[350px] bg-blue h-56 rounded-t-2xl">
            <div className="absolute top-3 left-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="34"
                viewBox="0 0 23 34"
                fill="none"
              >
                <g clip-path="url(#clip0_43_2145)">
                  <path
                    d="M17.9031 1.86471C15.7934 0.668517 13.4068 0.0761142 10.995 0.149949C8.89802 0.0848278 6.80966 0.451745 4.85447 1.22886C3.04235 1.96528 1.7155 2.96214 0.799338 4.27622C0.488427 4.746 0.275677 5.27624 0.174346 5.83381C0.0523764 6.46058 0.274536 6.91791 0.784195 7.08862C1.3747 7.28621 1.74814 6.89833 2.06404 6.44992L2.1766 6.28971C2.52735 5.78772 2.89007 5.26882 3.34746 4.92312C4.05283 4.39456 4.82356 3.96361 5.6395 3.64145C7.38645 2.95148 9.31878 2.73004 11.7205 2.94543C13.3839 3.0946 14.7886 3.48603 16.0149 4.142C17.7675 5.0794 18.8846 6.26888 19.4302 7.77841C20.2026 9.91721 19.7766 11.6332 18.1638 12.879C17.2435 13.5562 16.2813 14.1719 15.2832 14.722L15.2365 14.7491C14.7542 15.0289 14.2413 15.279 13.7453 15.521C13.3968 15.691 13.0361 15.867 12.6867 16.0527C10.2865 17.3281 8.63624 19.0124 7.64167 21.2016C7.38807 21.7351 7.20808 22.3017 7.10678 22.8856C7.03459 23.332 7.05353 23.7888 7.16234 24.2274C7.27116 24.6659 7.46748 25.0767 7.73908 25.4342C8.00933 25.7994 8.28758 25.878 8.4735 25.8792H8.47894C8.60964 25.8739 8.7373 25.8375 8.85176 25.7727C8.9662 25.7081 9.06423 25.617 9.13804 25.5066C9.28144 25.319 9.42729 25.1328 9.57365 24.9468C9.95925 24.454 10.3578 23.9446 10.7082 23.4104C11.8031 21.7392 13.2922 20.3748 15.3943 19.1162C16.694 18.362 17.955 17.5402 19.1725 16.654C20.0266 16.0168 20.7938 15.2662 21.4536 14.4219C22.8364 12.6299 23.2938 10.5842 22.8129 8.34142C22.2168 5.56784 20.565 3.38919 17.9031 1.86471Z"
                    fill="#E1F404"
                  />
                  <path
                    d="M7.91624 33.8235C8.06523 33.8461 8.21567 33.8575 8.36631 33.8573C9.09586 33.8484 9.80389 33.6038 10.3892 33.1588C10.9744 32.7138 11.4069 32.0909 11.6246 31.3796C11.756 30.8393 11.7641 30.2756 11.6482 29.7316C11.5323 29.1877 11.2956 28.6783 10.9562 28.2429C10.6983 27.8843 10.3589 27.5954 9.96733 27.401C9.57576 27.2065 9.14371 27.1123 8.7085 27.1264C8.13019 27.1283 8.03544 27.1693 7.08442 27.7373C6.42355 28.1124 5.90712 28.706 5.61995 29.4204C5.33278 30.1349 5.29187 30.928 5.50399 31.6694C5.85857 32.9094 6.6704 33.6341 7.91624 33.8235ZM8.31126 29.0884C8.36354 29.1596 8.41576 29.2265 8.46629 29.2926C8.61878 29.467 8.7438 29.6646 8.83688 29.8784C8.94369 30.1777 8.96615 30.5015 8.90172 30.8131C8.84561 30.9653 8.73486 31.09 8.59195 31.1617C8.40209 31.287 8.17457 31.339 7.95053 31.308C7.83535 31.2765 7.485 31.1802 7.50888 30.4788C7.53449 29.7289 7.76919 29.3163 8.31144 29.0872L8.31126 29.0884Z"
                    fill="#E1F404"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_43_2145">
                    <rect width="23" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex w-full items-center justify-center font-gloria text-2xl mt-4 uppercase">
              <h1>About</h1>
            </div>
            <div className="flex w-full m-4 items-center justify-center font-gloria text-md">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="relative w-[350px] bg-blue h-56 rounded-t-2xl">
            <div className="flex w-full items-center justify-center font-gloria text-2xl mt-4 uppercase">
              <div className="absolute top-3 left-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="34"
                  viewBox="0 0 37 34"
                  fill="none"
                >
                  <g clip-path="url(#clip0_44_2)">
                    <path
                      d="M1.31311 33.8583C0.554641 33.8508 0.157065 33.4857 0.142597 32.8572C0.140382 32.6798 0.164239 32.5028 0.213511 32.3315C0.769588 30.347 1.35824 28.3702 1.88208 26.3778C2.10999 25.4115 2.60696 24.5201 3.32166 23.7957C5.27076 21.8642 7.18809 19.9038 9.16 17.9937C14.3473 12.9692 19.7874 8.19656 25.3704 3.56766C26.5825 2.56266 27.7752 1.53522 29.0154 0.561843C29.7534 -0.0171974 30.036 -0.00397086 30.7813 0.596894C31.8445 1.45432 32.8689 2.3551 33.9001 3.24756C34.4552 3.72786 34.9874 4.23179 35.534 4.72086C36.2417 5.35409 36.2401 6.03066 35.5655 6.70249C34.4919 7.77149 33.4467 8.86526 32.3717 9.93263C31.9848 10.3169 31.5382 10.6466 31.1334 11.0153C24.7995 16.7838 18.4667 22.5534 12.1351 28.3241C11.1299 29.2395 10.1234 30.1544 9.09316 31.0445C8.82615 31.2585 8.52004 31.4245 8.18987 31.5345C6.20941 32.2546 4.2238 32.9619 2.23307 33.6563C1.93204 33.7448 1.62458 33.8123 1.31311 33.8583ZM6.82246 27.662L28.1555 8.28654C27.689 7.87334 27.2448 7.47959 26.7225 7.01666C19.3955 13.2158 12.73 20.014 5.80311 26.6238L6.82246 27.662ZM8.80648 29.5887C15.9274 23.0857 23.0751 16.7807 29.9015 10.1849L29.2775 9.43364C21.9147 15.7009 14.9115 22.1842 7.73582 28.463L8.80648 29.5887ZM4.83953 25.7913C11.6468 19.0146 18.479 12.4529 25.6452 6.1337L24.9094 5.51592C17.6416 11.656 10.7381 18.1109 4.12245 24.872C4.29324 25.0734 4.4129 25.2066 4.52282 25.3471C4.61954 25.4696 4.70446 25.5999 4.84018 25.7913H4.83953ZM34.2206 5.9331C33.0334 4.4999 30.487 2.14262 29.7342 1.76951L26.372 4.53585L31.4672 8.7869C32.4009 7.82005 33.2989 6.88896 34.2212 5.9331H34.2206ZM3.13139 25.7427C2.86923 27.0172 2.63236 28.1278 2.42147 29.2428C2.39556 29.413 2.43932 29.5861 2.54384 29.7267C3.02805 30.2978 3.54196 30.8466 4.06455 31.4246L7.19737 30.2927L3.13139 25.7427Z"
                      fill="#F45B04"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_44_2">
                      <rect width="36.1702" height="34" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h1>How to play</h1>
            </div>
            <div className="flex w-full m-4 items-center justify-center font-gloria text-md">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
