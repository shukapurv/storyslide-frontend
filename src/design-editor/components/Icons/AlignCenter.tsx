import React from "react"

function AlignCenter({ size }: { size: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			viewBox="0 0 24 24">
			<path
				d="M11.25 13V11H7C6.46957 11 5.96086 10.7893 5.58579 10.4142C5.21071 10.0391 5 9.53043 5 9V8C5 6.9 5.9 6 7 6H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V9C19 9.53043 18.7893 10.0391 18.4142 10.4142C18.0391 10.7893 17.5304 11 17 11H12.75V13H14C14.5304 13 15.0391 13.2107 15.4142 13.5858C15.7893 13.9609 16 14.4696 16 15V16C16 16.5304 15.7893 17.0391 15.4142 17.4142C15.0391 17.7893 14.5304 18 14 18H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V18H10C9.46957 18 8.96086 17.7893 8.58579 17.4142C8.21071 17.0391 8 16.5304 8 16V15C8 13.9 8.9 13 10 13H11.25ZM7 7.5C6.86739 7.5 6.74021 7.55268 6.64645 7.64645C6.55268 7.74021 6.5 7.86739 6.5 8V9C6.5 9.28 6.72 9.5 7 9.5H17C17.1326 9.5 17.2598 9.44732 17.3536 9.35355C17.4473 9.25979 17.5 9.13261 17.5 9V8C17.5 7.86739 17.4473 7.74021 17.3536 7.64645C17.2598 7.55268 17.1326 7.5 17 7.5H7ZM10 14.5C9.86739 14.5 9.74021 14.5527 9.64645 14.6464C9.55268 14.7402 9.5 14.8674 9.5 15V16C9.5 16.28 9.72 16.5 10 16.5H14C14.1326 16.5 14.2598 16.4473 14.3536 16.3536C14.4473 16.2598 14.5 16.1326 14.5 16V15C14.5 14.8674 14.4473 14.7402 14.3536 14.6464C14.2598 14.5527 14.1326 14.5 14 14.5H10Z"
				fill="currentColor"
			/>
		</svg>
	)
}

export default AlignCenter
