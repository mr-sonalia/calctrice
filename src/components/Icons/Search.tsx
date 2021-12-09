interface Icon {
	color: string;
}

const Search = (props: Icon) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="search"
			role="img"
			width="20px"
			height="20px"
			viewBox="0 0 24 24"
			aria-labelledby="searchIconTitle"
			stroke={props.color}
			strokeWidth="1.2857142857142858"
			strokeLinecap="round"
			strokeLinejoin="round"
			fill="none"
			color={props.color}>
			{" "}
			<path d="M14.4121122,14.4121122 L20,20" />
			<circle cx="10" cy="10" r="6" />
		</svg>
	);
};

export default Search;
