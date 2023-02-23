import React from "react"

function FlipVertical({ size }: { size: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			viewBox="0 0 24 24">
			<path
				d="M20.9199 10.0164L6.10067 3.28064C5.75796 3.12492 5.38166 3.05768 5.00623 3.08506C4.6308 3.11245 4.26824 3.23359 3.95175 3.43739C3.63527 3.64119 3.37497 3.92114 3.1947 4.2516C3.01444 4.58206 2.91996 4.95246 2.91992 5.32889V11.2494H20.1354L20.9199 11.2441V10.0164ZM4.41992 9.74939V5.32889C4.41983 5.20334 4.45126 5.07977 4.51133 4.96952C4.5714 4.85927 4.65818 4.76587 4.76372 4.69787C4.86927 4.62987 4.99019 4.58945 5.11541 4.58033C5.24063 4.5712 5.36614 4.59366 5.48042 4.64564L16.7079 9.74939H4.41992Z"
				fill="currentColor"
			/>
			<path
				d="M6.10067 20.718L20.4489 14.1968L20.9199 13.9688V12.7493H2.91992V18.6698C2.91996 19.0462 3.01444 19.4166 3.1947 19.7471C3.37497 20.0775 3.63527 20.3575 3.95175 20.5613C4.26824 20.7651 4.6308 20.8862 5.00623 20.9136C5.38166 20.941 5.75796 20.8737 6.10067 20.718Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default FlipVertical
