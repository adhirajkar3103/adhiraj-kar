import ThemeSwitch from "../ThemeSwitch";

const Navbar = () => {
  return (
    <div className="flex justify-between p-10 items-center">
        <div className="w-1/3 flex justify-start gap-5">
            <a className="text-md md:text-xl" href="#experiences">Experience</a>
            <a className="text-md md:text-xl" href="#projects">Projects</a>
        </div>
        <div className="justify-center w-1/3 hidden md:block">
        <div className="w-full flex justify-center">
          <svg width="200" height="60" viewBox="0 0 377.7 93.6" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000" stroke-width="0" fill="#c27d06"><path d="M 305.4 64.9 L 309.4 64.5 A 1.474 1.474 0 0 1 309.74 64.536 Q 310.3 64.669 310.3 65.3 Q 310.129 66.837 307.953 68.52 A 15.877 15.877 0 0 1 307.15 69.1 A 11.639 11.639 0 0 1 301.378 71.061 A 14.475 14.475 0 0 1 300.3 71.1 A 4.773 4.773 0 0 1 297.577 70.142 Q 294.631 68.098 291.5 61.7 Q 288.063 54.911 284.551 46.128 A 279.629 279.629 0 0 1 283.4 43.2 A 18.47 18.47 0 0 1 277.594 45.268 A 17.64 17.64 0 0 1 277.4 45.3 Q 273.179 64.773 257.18 65.567 A 27.869 27.869 0 0 1 255.8 65.6 Q 251.3 65.6 247.5 63.5 A 7.662 7.662 0 0 1 245.166 61.579 Q 243.941 60.036 243.74 57.873 A 9.429 9.429 0 0 1 243.7 57 Q 243.7 54.3 245.1 52.55 A 4.482 4.482 0 0 1 248.347 50.821 A 5.919 5.919 0 0 1 248.85 50.8 A 7.582 7.582 0 0 1 249.619 50.836 Q 250.387 50.915 250.782 51.168 A 0.83 0.83 0 0 1 251.2 51.9 Q 251.2 52.4 250.6 53.85 A 7.795 7.795 0 0 0 250.048 55.935 A 7.05 7.05 0 0 0 250 56.75 Q 250 58.146 251.576 59.728 A 10.449 10.449 0 0 0 251.7 59.85 A 5.332 5.332 0 0 0 253.746 61.062 Q 255.047 61.5 256.8 61.5 Q 260.2 61.5 262.7 59.95 Q 265.2 58.4 266.7 55.4 Q 268.2 52.4 269.15 49.3 A 27.043 27.043 0 0 0 269.785 46.764 Q 270.25 44.475 270.5 41.6 A 116.76 116.76 0 0 0 270.979 35.442 Q 271.145 32.289 271.186 28.779 A 201.115 201.115 0 0 0 271.2 26.4 Q 271.2 17.8 271.4 12.6 Q 258.6 14.8 258.6 23.6 A 9.688 9.688 0 0 1 258.498 25.055 Q 258.378 25.843 258.118 26.484 A 4.509 4.509 0 0 1 257.55 27.5 A 3.815 3.815 0 0 1 256.686 28.353 A 3.048 3.048 0 0 1 254.9 28.9 A 3.782 3.782 0 0 1 253.659 28.713 Q 251.971 28.128 251.903 25.707 A 7.358 7.358 0 0 1 251.9 25.5 A 11.885 11.885 0 0 1 255.674 16.762 A 17.463 17.463 0 0 1 257.3 15.35 Q 261.869 11.839 269.017 9.866 A 54.693 54.693 0 0 1 271.7 9.2 A 11.764 11.764 0 0 1 273.352 4.845 A 11.174 11.174 0 0 1 275.25 2.6 Q 277.801 0.273 279.871 0.029 A 4.085 4.085 0 0 1 280.35 0 A 6.576 6.576 0 0 1 281.881 0.169 A 4.538 4.538 0 0 1 283.95 1.25 A 4.141 4.141 0 0 1 285.251 3.827 A 5.843 5.843 0 0 1 285.3 4.6 Q 285.3 8.922 280.009 10.91 A 18.275 18.275 0 0 1 278.5 11.4 L 278.9 30 A 84.681 84.681 0 0 1 278.64 36.772 A 68.746 68.746 0 0 1 278.2 40.8 A 12.512 12.512 0 0 0 281.997 38.771 Q 284.935 36.541 287.805 32.295 A 45.768 45.768 0 0 0 288.2 31.7 A 57.315 57.315 0 0 0 292.211 24.371 Q 293.948 20.609 295.456 16.174 A 108.491 108.491 0 0 0 296.6 12.6 A 21.839 21.839 0 0 1 298.013 8.984 Q 300.75 3.6 305.7 3.6 Q 308.173 3.6 308.381 6.368 A 7.104 7.104 0 0 1 308.4 6.9 Q 308.4 9.438 305.885 11.661 A 14.429 14.429 0 0 1 304.4 12.8 Q 303.215 13.59 302.841 14.006 A 0.929 0.929 0 0 0 302.7 14.2 Q 296.54 28.338 291.19 35.613 A 36.325 36.325 0 0 1 288.4 39 Q 293.593 49.633 297.189 55.917 A 109.874 109.874 0 0 0 298.65 58.4 Q 302.098 64.074 304.67 64.795 A 2.699 2.699 0 0 0 305.4 64.9 Z M 96.9 56.2 L 97 59.3 A 7.322 7.322 0 0 1 96.944 60.252 Q 96.7 62.1 95.4 62.1 Q 93 62.1 90.8 61.45 Q 89.319 61.013 88.835 60.348 A 1.162 1.162 0 0 1 88.6 59.65 A 14.516 14.516 0 0 1 88.619 59.022 Q 88.688 57.555 89.001 53.599 A 813.384 813.384 0 0 1 89.15 51.75 Q 89.571 46.582 89.67 43.378 A 58.215 58.215 0 0 0 89.7 41.6 L 89.7 35.8 A 112.513 112.513 0 0 1 90.135 25.49 Q 91.691 8.669 98.8 3.2 A 8.627 8.627 0 0 1 100.523 2.164 A 6.299 6.299 0 0 1 103.1 1.6 A 1.117 1.117 0 0 1 103.756 1.837 Q 104.4 2.302 105.043 3.677 A 12.382 12.382 0 0 1 105.1 3.8 A 9.939 9.939 0 0 1 105.748 5.802 Q 106.1 7.422 106.1 9.5 A 45.145 45.145 0 0 1 104.259 22.508 A 41.776 41.776 0 0 1 103.2 25.6 A 78.575 78.575 0 0 1 101.378 29.946 Q 99.395 34.279 97.367 37.011 A 23.153 23.153 0 0 1 97.3 37.1 Q 97.202 39.555 97.2 44.709 A 554.785 554.785 0 0 0 97.2 44.9 Q 97.578 44.334 100.983 38.78 A 3548.242 3548.242 0 0 0 101.4 38.1 A 118.491 118.491 0 0 1 103.228 35.206 Q 105.863 31.175 107.85 29 Q 110.5 26.1 112.6 26.1 Q 114.7 26.1 116.35 27.5 A 4.746 4.746 0 0 1 117.521 28.94 A 4.424 4.424 0 0 1 118 31 A 56.837 56.837 0 0 1 117.941 33.46 Q 117.818 36.263 117.443 40.17 A 254.718 254.718 0 0 1 117.05 43.95 A 479.444 479.444 0 0 0 116.727 46.935 Q 116.137 52.567 116.102 54.519 A 12.954 12.954 0 0 0 116.1 54.75 A 13.21 13.21 0 0 0 116.115 55.398 Q 116.189 56.908 116.643 56.995 A 0.302 0.302 0 0 0 116.7 57 Q 118.4 56.9 121.4 52.75 A 46.048 46.048 0 0 0 123.829 48.99 Q 125.598 45.96 127.35 42.1 A 142.796 142.796 0 0 1 128.052 40.577 Q 130.381 35.6 130.95 35.6 A 0.746 0.746 0 0 1 131.234 35.65 Q 131.558 35.783 131.595 36.268 A 1.729 1.729 0 0 1 131.6 36.4 A 8.302 8.302 0 0 1 131.419 38.006 Q 130.9 40.601 128.895 44.886 A 73.486 73.486 0 0 1 128.7 45.3 Q 120.8 62.1 115.4 62.1 A 15.187 15.187 0 0 1 113.2 61.952 Q 112.081 61.787 111.178 61.442 A 6.228 6.228 0 0 1 109.5 60.5 A 1.503 1.503 0 0 1 109.194 60.01 Q 108.8 59.063 108.8 56.85 Q 108.8 54.134 109.266 48.279 A 342.365 342.365 0 0 1 109.35 47.25 Q 109.899 40.608 109.9 37.307 A 66.106 66.106 0 0 0 109.9 37.3 Q 109.9 34 108.75 34 A 1.141 1.141 0 0 0 108.158 34.262 Q 106.842 35.196 103.696 39.476 A 130.48 130.48 0 0 0 102.7 40.85 A 130.323 130.323 0 0 0 101.024 43.245 Q 97.771 48.016 97.504 49.574 A 2.025 2.025 0 0 0 97.5 49.6 A 42.41 42.41 0 0 0 96.992 53.717 A 34.593 34.593 0 0 0 96.9 56.2 Z M 29.9 41.5 L 13.5 42.7 Q 11.6 47.9 10.1 53.1 Q 8.696 57.966 8.168 59.329 A 7.313 7.313 0 0 1 8.1 59.5 A 3.85 3.85 0 0 1 5.803 61.633 Q 4.58 62.1 2.8 62.1 Q 0 62.1 0 59.7 Q 0 57.375 3.567 52.984 A 45.1 45.1 0 0 1 3.8 52.7 Q 4.395 51.935 7.306 45.455 A 547.465 547.465 0 0 0 8.4 43 A 38.755 38.755 0 0 1 6.191 43.097 A 34.539 34.539 0 0 1 5.7 43.1 A 5.946 5.946 0 0 1 4.385 42.968 Q 2.563 42.553 2.26 40.836 A 4.242 4.242 0 0 1 2.2 40.1 Q 2.2 37.4 5 37.4 A 2.721 2.721 0 0 1 5.133 37.408 Q 5.888 37.463 10.7 37.9 Q 12.2 34.4 13.9 31 Q 25.4 6.947 30.581 4.009 A 2.718 2.718 0 0 1 31.9 3.6 A 1.915 1.915 0 0 1 33.308 5.015 Q 35.384 9.489 36.512 28.106 A 500.462 500.462 0 0 1 37 37.9 L 37.9 37.9 Q 38.486 37.9 38.581 38.6 A 2.224 2.224 0 0 1 38.6 38.9 A 1.36 1.36 0 0 1 38.248 39.799 Q 37.891 40.219 37.172 40.566 A 5.886 5.886 0 0 1 37.1 40.6 Q 37.7 57 38.7 57 A 2.309 2.309 0 0 0 39.774 56.69 Q 41.32 55.865 43.5 52.85 Q 46.5 48.7 49.45 42.15 Q 52.349 35.714 53.027 35.602 A 0.143 0.143 0 0 1 53.05 35.6 A 0.746 0.746 0 0 1 53.334 35.65 Q 53.658 35.783 53.695 36.268 A 1.729 1.729 0 0 1 53.7 36.4 A 8.302 8.302 0 0 1 53.519 38.006 Q 53 40.601 50.995 44.886 A 73.486 73.486 0 0 1 50.8 45.3 Q 42.9 62.1 37.4 62.1 A 20.991 20.991 0 0 1 35.14 61.987 Q 32.83 61.736 31.427 60.926 A 5.024 5.024 0 0 1 30.8 60.5 A 1.839 1.839 0 0 1 30.517 59.683 Q 29.94 56.695 29.903 43.378 A 674.032 674.032 0 0 1 29.9 41.5 Z M 77.7 62.1 Q 74.3 62.1 72.4 60.6 Q 71.694 59.894 71.611 57.163 A 25.176 25.176 0 0 1 71.6 56.4 Q 71.6 53 71.9 47.5 Q 69.2 54.7 66.4 58.4 A 10.152 10.152 0 0 1 64.096 60.655 A 8.145 8.145 0 0 1 59.35 62.1 A 8.637 8.637 0 0 1 52.932 59.293 A 12.407 12.407 0 0 1 52.15 58.4 Q 49.388 54.936 49.212 47.616 A 42.216 42.216 0 0 1 49.2 46.6 A 24.375 24.375 0 0 1 51.045 37.056 A 23.251 23.251 0 0 1 53.75 32.3 A 15.861 15.861 0 0 1 57.917 28.286 Q 61.3 26.104 65.683 26.1 A 17.522 17.522 0 0 1 65.7 26.1 A 10.494 10.494 0 0 1 69.434 26.822 Q 70.819 27.347 72.245 28.254 A 20.435 20.435 0 0 1 73.2 28.9 A 593.143 593.143 0 0 1 73.595 24.291 Q 74.706 11.938 75.666 8.178 A 6.368 6.368 0 0 1 76.1 6.9 Q 76.68 5.838 78.798 3.843 A 46.498 46.498 0 0 1 78.95 3.7 A 14.535 14.535 0 0 1 79.996 2.806 Q 81.092 1.963 81.977 1.709 A 2.627 2.627 0 0 1 82.7 1.6 Q 84.2 1.6 84.2 6.3 A 51.089 51.089 0 0 1 84.035 10.521 Q 83.794 13.425 83.2 15.8 A 5571.821 5571.821 0 0 0 82.258 19.399 Q 80.369 26.625 79.8 28.9 Q 78.728 37.169 78.477 47.665 A 277.489 277.489 0 0 0 78.4 54.3 A 19.016 19.016 0 0 0 78.415 55.078 Q 78.494 57 79 57 Q 80.667 56.908 83.364 53.384 A 33.95 33.95 0 0 0 83.8 52.8 A 42.889 42.889 0 0 0 86.043 49.381 Q 87.208 47.42 88.364 45.086 A 87.905 87.905 0 0 0 89.75 42.15 Q 92.649 35.714 93.327 35.602 A 0.143 0.143 0 0 1 93.35 35.6 A 0.746 0.746 0 0 1 93.634 35.65 Q 93.958 35.783 93.995 36.268 A 1.729 1.729 0 0 1 94 36.4 A 8.302 8.302 0 0 1 93.819 38.006 Q 93.3 40.601 91.295 44.886 A 73.486 73.486 0 0 1 91.1 45.3 Q 83.2 62.1 77.7 62.1 Z M 208.907 51.644 A 11386.589 11386.589 0 0 0 208.6 57.8 A 50.225 50.225 0 0 1 208.015 58.455 Q 206.927 59.656 204.962 61.716 A 505.301 505.301 0 0 1 203.25 63.5 A 331.408 331.408 0 0 0 202.436 64.348 Q 200.005 66.889 198.281 68.806 A 98.339 98.339 0 0 0 197.05 70.2 Q 195.776 71.673 194.565 73.595 A 41.764 41.764 0 0 0 192.75 76.8 Q 190.7 80.8 190.7 85.15 A 10.533 10.533 0 0 0 190.896 87.24 A 6.63 6.63 0 0 0 193.65 91.55 A 13.2 13.2 0 0 0 193.789 91.645 A 10.882 10.882 0 0 0 200 93.6 Q 202.62 93.6 204.705 93.019 A 9.923 9.923 0 0 0 210.85 88.45 Q 213.9 83.3 214.4 70.6 A 1234.775 1234.775 0 0 1 214.485 68.812 Q 214.644 65.492 214.941 59.561 A 13376.143 13376.143 0 0 1 215.2 54.4 A 900.719 900.719 0 0 0 218.344 50.433 Q 223.159 44.318 225.886 40.593 A 98.166 98.166 0 0 0 227.8 37.9 Q 228.2 37.2 228.2 36.6 A 1.473 1.473 0 0 0 228.157 36.23 Q 227.994 35.6 227.2 35.6 A 0.805 0.805 0 0 0 226.994 35.628 Q 226.701 35.706 226.363 35.996 A 3.892 3.892 0 0 0 226.05 36.3 A 7.244 7.244 0 0 0 225.845 36.538 Q 224.662 37.949 217.907 46.483 A 5482.585 5482.585 0 0 0 215.6 49.4 Q 215.8 44.6 216.7 37 A 14.19 14.19 0 0 0 218.021 33.569 A 17.457 17.457 0 0 0 218.5 29.4 A 21.708 21.708 0 0 0 218.484 28.548 Q 218.401 26.446 217.887 25.626 A 0.969 0.969 0 0 0 217.05 25.1 Q 215.6 25.1 212.9 27.35 A 31.017 31.017 0 0 0 212.195 27.955 Q 210.179 29.74 210.05 30.6 Q 209.919 31.475 208.907 51.644 Z M 194.6 61.952 A 15.187 15.187 0 0 0 196.8 62.1 Q 202.2 62.1 210.1 45.3 A 73.486 73.486 0 0 0 210.295 44.886 Q 212.3 40.601 212.819 38.006 A 8.302 8.302 0 0 0 213 36.4 A 1.729 1.729 0 0 0 212.995 36.268 Q 212.958 35.783 212.634 35.65 A 0.746 0.746 0 0 0 212.35 35.6 Q 211.781 35.6 209.452 40.577 A 142.796 142.796 0 0 0 208.75 42.1 Q 206.998 45.96 205.229 48.99 A 46.048 46.048 0 0 1 202.8 52.75 Q 199.8 56.9 198.1 57 Q 197.594 57 197.515 55.078 A 19.016 19.016 0 0 1 197.5 54.3 A 360.34 360.34 0 0 1 197.519 50.467 Q 197.631 39.965 198.4 38 A 6.304 6.304 0 0 0 198.663 37.443 Q 199.205 36.144 199.65 33.8 Q 200.08 31.535 200.174 30.429 A 6.385 6.385 0 0 0 200.2 29.9 A 18.206 18.206 0 0 0 200.195 29.465 Q 200.115 26.1 198.75 26.1 A 2.921 2.921 0 0 0 198.421 26.119 Q 197.073 26.272 195.25 27.65 A 30.318 30.318 0 0 0 194.736 28.047 Q 193.656 28.901 192.985 29.607 A 7.006 7.006 0 0 0 192.4 30.3 A 26.399 26.399 0 0 0 191.597 29.492 Q 189.484 27.457 187.603 26.643 A 6.045 6.045 0 0 0 185.2 26.1 A 17.522 17.522 0 0 0 185.183 26.1 Q 180.8 26.104 177.417 28.286 A 15.861 15.861 0 0 0 173.25 32.3 Q 168.7 38.5 168.7 46.55 A 41.82 41.82 0 0 0 168.705 47.194 Q 168.821 54.752 171.7 58.35 A 12.311 12.311 0 0 0 173.351 60.066 Q 175.729 62.079 178.638 62.1 A 8.512 8.512 0 0 0 178.7 62.1 A 8.223 8.223 0 0 0 182.541 61.211 A 8.55 8.55 0 0 0 185.25 58.95 A 17.049 17.049 0 0 0 185.624 58.47 Q 187.213 56.358 188.82 52.95 A 66.239 66.239 0 0 0 190.4 49.3 A 335.754 335.754 0 0 0 190.317 51.443 Q 190.2 54.768 190.2 56.95 A 21.083 21.083 0 0 0 190.205 57.411 Q 190.243 59.17 190.586 59.996 A 1.536 1.536 0 0 0 190.9 60.5 A 6.228 6.228 0 0 0 192.578 61.442 Q 193.481 61.787 194.6 61.952 Z M 334.9 61.952 A 15.187 15.187 0 0 0 337.1 62.1 Q 342.5 62.1 350.4 45.3 A 73.486 73.486 0 0 0 350.595 44.886 Q 352.6 40.601 353.119 38.006 A 8.302 8.302 0 0 0 353.3 36.4 A 1.729 1.729 0 0 0 353.295 36.268 Q 353.258 35.783 352.934 35.65 A 0.746 0.746 0 0 0 352.65 35.6 Q 352.081 35.6 349.752 40.577 A 142.796 142.796 0 0 0 349.05 42.1 Q 347.298 45.96 345.529 48.99 A 46.048 46.048 0 0 1 343.1 52.75 Q 340.1 56.9 338.4 57 Q 337.894 57 337.815 55.078 A 19.016 19.016 0 0 1 337.8 54.3 A 360.34 360.34 0 0 1 337.819 50.467 Q 337.931 39.965 338.7 38 A 6.304 6.304 0 0 0 338.963 37.443 Q 339.505 36.144 339.95 33.8 Q 340.38 31.535 340.474 30.429 A 6.385 6.385 0 0 0 340.5 29.9 A 18.206 18.206 0 0 0 340.495 29.465 Q 340.415 26.1 339.05 26.1 A 2.921 2.921 0 0 0 338.721 26.119 Q 337.373 26.272 335.55 27.65 A 30.318 30.318 0 0 0 335.036 28.047 Q 333.956 28.901 333.285 29.607 A 7.006 7.006 0 0 0 332.7 30.3 A 26.399 26.399 0 0 0 331.897 29.492 Q 329.784 27.457 327.903 26.643 A 6.045 6.045 0 0 0 325.5 26.1 A 17.522 17.522 0 0 0 325.483 26.1 Q 321.1 26.104 317.717 28.286 A 15.861 15.861 0 0 0 313.55 32.3 Q 309 38.5 309 46.55 A 41.82 41.82 0 0 0 309.005 47.194 Q 309.121 54.752 312 58.35 A 12.311 12.311 0 0 0 313.651 60.066 Q 316.029 62.079 318.938 62.1 A 8.512 8.512 0 0 0 319 62.1 A 8.223 8.223 0 0 0 322.841 61.211 A 8.55 8.55 0 0 0 325.55 58.95 A 17.049 17.049 0 0 0 325.924 58.47 Q 327.513 56.358 329.12 52.95 A 66.239 66.239 0 0 0 330.7 49.3 A 335.754 335.754 0 0 0 330.617 51.443 Q 330.5 54.768 330.5 56.95 A 21.083 21.083 0 0 0 330.505 57.411 Q 330.543 59.17 330.886 59.996 A 1.536 1.536 0 0 0 331.2 60.5 A 6.228 6.228 0 0 0 332.878 61.442 Q 333.781 61.787 334.9 61.952 Z M 151.9 35.5 L 157.4 34.9 Q 158.2 34.9 158.8 35.8 A 3.583 3.583 0 0 1 159.293 36.874 A 3.219 3.219 0 0 1 159.4 37.7 A 9.179 9.179 0 0 1 159.377 38.244 Q 159.278 39.788 158.75 44.5 A 148.079 148.079 0 0 0 158.407 47.886 Q 158.143 50.86 158.106 52.98 A 38.318 38.318 0 0 0 158.1 53.65 A 29.268 29.268 0 0 0 158.115 54.615 Q 158.179 56.562 158.528 56.92 A 0.237 0.237 0 0 0 158.7 57 Q 160.4 56.9 163.4 52.75 A 46.048 46.048 0 0 0 165.829 48.99 Q 167.598 45.96 169.35 42.1 A 142.796 142.796 0 0 1 170.052 40.577 Q 172.381 35.6 172.95 35.6 A 0.746 0.746 0 0 1 173.234 35.65 Q 173.558 35.783 173.595 36.268 A 1.729 1.729 0 0 1 173.6 36.4 A 8.302 8.302 0 0 1 173.419 38.006 Q 172.9 40.601 170.895 44.886 A 73.486 73.486 0 0 1 170.7 45.3 Q 162.8 62.1 157.4 62.1 A 15.187 15.187 0 0 1 155.2 61.952 Q 154.081 61.787 153.178 61.442 A 6.228 6.228 0 0 1 151.5 60.5 A 0.458 0.458 0 0 1 151.446 60.434 Q 150.893 59.624 150.814 53.88 A 150.12 150.12 0 0 1 150.8 51.8 Q 150.8 45.136 151.98 40.068 A 33.293 33.293 0 0 1 152.5 38.1 Q 148.727 38.1 146.436 36.535 A 7.077 7.077 0 0 1 144.4 34.4 A 7.816 7.816 0 0 1 143.205 30.398 A 9.418 9.418 0 0 1 143.2 30.1 A 9.742 9.742 0 0 1 143.435 27.916 A 7.654 7.654 0 0 1 144.2 25.9 A 4.101 4.101 0 0 1 144.908 24.951 A 2.945 2.945 0 0 1 147.05 24.1 Q 148.9 24.1 150.45 26.05 Q 152 28 152 30.4 A 8.808 8.808 0 0 1 151.338 33.7 A 11.405 11.405 0 0 1 150.6 35.2 A 1.207 1.207 0 0 0 150.932 35.37 Q 151.308 35.5 151.9 35.5 Z M 356 35.5 L 361.5 34.9 Q 362.3 34.9 362.9 35.8 A 3.583 3.583 0 0 1 363.393 36.874 A 3.219 3.219 0 0 1 363.5 37.7 A 9.179 9.179 0 0 1 363.477 38.244 Q 363.378 39.788 362.85 44.5 A 148.079 148.079 0 0 0 362.507 47.886 Q 362.243 50.86 362.206 52.98 A 38.318 38.318 0 0 0 362.2 53.65 A 29.268 29.268 0 0 0 362.215 54.615 Q 362.279 56.562 362.628 56.92 A 0.237 0.237 0 0 0 362.8 57 Q 364.5 56.9 367.5 52.75 A 46.048 46.048 0 0 0 369.929 48.99 Q 371.698 45.96 373.45 42.1 A 142.796 142.796 0 0 1 374.152 40.577 Q 376.481 35.6 377.05 35.6 A 0.746 0.746 0 0 1 377.334 35.65 Q 377.658 35.783 377.695 36.268 A 1.729 1.729 0 0 1 377.7 36.4 A 8.302 8.302 0 0 1 377.519 38.006 Q 377 40.601 374.995 44.886 A 73.486 73.486 0 0 1 374.8 45.3 Q 366.9 62.1 361.5 62.1 A 15.187 15.187 0 0 1 359.3 61.952 Q 358.181 61.787 357.278 61.442 A 6.228 6.228 0 0 1 355.6 60.5 A 0.458 0.458 0 0 1 355.546 60.434 Q 354.993 59.624 354.914 53.88 A 150.12 150.12 0 0 1 354.9 51.8 Q 354.9 45.136 356.08 40.068 A 33.293 33.293 0 0 1 356.6 38.1 Q 352.827 38.1 350.536 36.535 A 7.077 7.077 0 0 1 348.5 34.4 A 7.816 7.816 0 0 1 347.305 30.398 A 9.418 9.418 0 0 1 347.3 30.1 A 9.742 9.742 0 0 1 347.535 27.916 A 7.654 7.654 0 0 1 348.3 25.9 A 4.101 4.101 0 0 1 349.008 24.951 A 2.945 2.945 0 0 1 351.15 24.1 Q 353 24.1 354.55 26.05 Q 356.1 28 356.1 30.4 A 8.808 8.808 0 0 1 355.438 33.7 A 11.405 11.405 0 0 1 354.7 35.2 A 1.207 1.207 0 0 0 355.032 35.37 Q 355.408 35.5 356 35.5 Z M 130.1 61.952 A 15.187 15.187 0 0 0 132.3 62.1 Q 137.7 62.1 145.6 45.3 A 73.486 73.486 0 0 0 145.795 44.886 Q 147.8 40.601 148.319 38.006 A 8.302 8.302 0 0 0 148.5 36.4 A 1.729 1.729 0 0 0 148.495 36.268 Q 148.458 35.783 148.134 35.65 A 0.746 0.746 0 0 0 147.85 35.6 Q 147.281 35.6 144.952 40.577 A 142.796 142.796 0 0 0 144.25 42.1 Q 142.498 45.96 140.729 48.99 A 46.048 46.048 0 0 1 138.3 52.75 Q 135.3 56.9 133.6 57 Q 133.094 57 133.015 55.078 A 19.016 19.016 0 0 1 133 54.3 Q 133 40.3 134.3 37 A 6.304 6.304 0 0 0 134.563 36.443 Q 135.105 35.144 135.55 32.8 Q 135.98 30.535 136.074 29.429 A 6.385 6.385 0 0 0 136.1 28.9 A 18.206 18.206 0 0 0 136.095 28.465 Q 136.015 25.1 134.65 25.1 A 2.772 2.772 0 0 0 133.749 25.272 Q 132.473 25.715 130.6 27.3 A 65.144 65.144 0 0 0 129.708 28.068 Q 128.391 29.224 127.819 29.883 A 3.493 3.493 0 0 0 127.5 30.3 A 0.416 0.416 0 0 0 127.491 30.315 Q 126.994 31.189 126.35 41.15 Q 125.7 51.2 125.7 55.5 A 51.959 51.959 0 0 0 125.7 55.611 Q 125.707 58.879 126.127 60.022 A 1.321 1.321 0 0 0 126.4 60.5 A 6.228 6.228 0 0 0 128.078 61.442 Q 128.981 61.787 130.1 61.952 Z M 15 38.4 A 2212.681 2212.681 0 0 0 19.089 38.397 Q 26.993 38.382 29.698 38.306 A 63.066 63.066 0 0 0 29.9 38.3 A 56.99 56.99 0 0 1 29.85 37.352 Q 29.783 35.876 29.716 33.318 A 496.634 496.634 0 0 1 29.7 32.7 Q 29.6 28.7 29.5 25.75 Q 29.4 22.8 29.3 19.6 Q 28.9 12.7 28.1 12.7 Q 27 12.7 23.6 19.2 A 235.164 235.164 0 0 0 21.994 22.325 Q 19.725 26.825 18.3 30.2 Q 15.7 36.7 15 38.4 Z M 60.294 33.106 A 20 20 0 0 0 59.7 34 Q 57 38.3 57 43.95 A 36.402 36.402 0 0 0 57.171 47.592 Q 57.498 50.838 58.45 53.2 Q 59.9 56.8 62.1 56.8 A 3.511 3.511 0 0 0 64.431 55.675 Q 67.927 52.415 72.106 39.703 A 161.165 161.165 0 0 0 72.4 38.8 A 529.175 529.175 0 0 0 72.57 36.896 Q 72.856 33.622 72.894 32.573 A 7.669 7.669 0 0 0 72.9 32.3 A 9.803 9.803 0 0 0 68.623 30.097 Q 67.116 29.725 65.342 29.702 A 18.193 18.193 0 0 0 65.1 29.7 Q 62.697 29.7 60.294 33.106 Z M 179.341 33.385 A 21.738 21.738 0 0 0 178.65 34.25 A 15.482 15.482 0 0 0 175.519 43.134 A 19.329 19.329 0 0 0 175.5 44 Q 175.5 49.6 177.15 53.2 A 9.793 9.793 0 0 0 178.026 54.754 Q 179.465 56.8 181.5 56.8 Q 184.612 56.8 190.48 42.129 A 187.756 187.756 0 0 0 191.2 40.3 Q 191.292 39.563 191.427 37.851 A 185.821 185.821 0 0 0 191.45 37.55 Q 191.6 35.6 191.7 34.6 A 6.579 6.579 0 0 0 190.746 33.325 Q 189.886 32.411 188.55 31.55 Q 186.3 30.1 184.6 30.1 Q 182.109 30.1 179.341 33.385 Z M 319.641 33.385 A 21.738 21.738 0 0 0 318.95 34.25 A 15.482 15.482 0 0 0 315.819 43.134 A 19.329 19.329 0 0 0 315.8 44 Q 315.8 49.6 317.45 53.2 A 9.793 9.793 0 0 0 318.326 54.754 Q 319.765 56.8 321.8 56.8 Q 324.912 56.8 330.78 42.129 A 187.756 187.756 0 0 0 331.5 40.3 Q 331.592 39.563 331.727 37.851 A 185.821 185.821 0 0 0 331.75 37.55 Q 331.9 35.6 332 34.6 A 6.579 6.579 0 0 0 331.046 33.325 Q 330.186 32.411 328.85 31.55 Q 326.6 30.1 324.9 30.1 Q 322.409 30.1 319.641 33.385 Z M 207.8 72.3 L 208.3 62.5 A 87.357 87.357 0 0 0 203.583 67.997 Q 199.269 73.508 197.74 77.822 A 13.181 13.181 0 0 0 196.9 82.2 A 15.845 15.845 0 0 0 197.065 84.558 Q 197.345 86.417 198.1 87.8 Q 199.3 90 201.4 90 Q 203.902 90 205.243 87.86 A 7.429 7.429 0 0 0 205.9 86.5 Q 207.065 83.364 207.668 74.447 A 187.442 187.442 0 0 0 207.8 72.3 Z M 103.4 11.7 Q 103.4 7.5 102.3 7.5 Q 100.681 7.5 99.143 16.481 A 121.832 121.832 0 0 0 98.8 18.6 A 110.577 110.577 0 0 0 98.108 24.126 Q 97.821 26.966 97.622 30.144 A 194.308 194.308 0 0 0 97.5 32.3 A 83.667 83.667 0 0 0 100.58 25.09 Q 103.306 17.694 103.397 12.085 A 23.746 23.746 0 0 0 103.4 11.7 Z M 131.3 9.6 A 6.981 6.981 0 0 0 131.203 9.668 Q 129.4 10.947 129.4 12.7 A 33.88 33.88 0 0 0 129.435 14.283 Q 129.573 17.238 130.27 18.342 A 1.206 1.206 0 0 0 131.3 19 Q 134.2 19 135.8 16.75 A 8.353 8.353 0 0 0 137.025 14.204 A 10.082 10.082 0 0 0 137.4 11.4 Q 137.4 9.039 135.833 8.476 A 3.347 3.347 0 0 0 134.7 8.3 Q 133.2 8.3 131.3 9.6 Z M 213.6 9.6 A 6.981 6.981 0 0 0 213.503 9.668 Q 211.7 10.947 211.7 12.7 A 33.88 33.88 0 0 0 211.735 14.283 Q 211.873 17.238 212.57 18.342 A 1.206 1.206 0 0 0 213.6 19 Q 216.5 19 218.1 16.75 A 8.353 8.353 0 0 0 219.325 14.204 A 10.082 10.082 0 0 0 219.7 11.4 Q 219.7 9.039 218.133 8.476 A 3.347 3.347 0 0 0 217 8.3 Q 215.5 8.3 213.6 9.6 Z M 281.2 3.4 A 1.817 1.817 0 0 0 279.68 4.246 Q 278.883 5.351 278.6 7.9 A 12.545 12.545 0 0 0 279.914 7.424 Q 281.216 6.861 281.777 6.152 A 1.821 1.821 0 0 0 282.2 5 Q 282.2 3.4 281.2 3.4 Z" vector-effect="non-scaling-stroke"/></g></svg>
        </div>
      </div>        
      <div className="w-1/3 flex justify-end">
            <ThemeSwitch />
        </div>       
    </div>
  )
}

export default Navbar;