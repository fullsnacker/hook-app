import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
	const { data, isloading, hasErrors } = useFetch(
		'https://api.breakingbadquotes.xyz/v1/quotes/5'
	);

	console.log(data, isloading, hasErrors);

	return (
		<>
			<h1>Breaking Bad Quotes</h1>
		</>
	);
};
