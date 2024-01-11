import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isloading: true,
		hasErrors: null
	});
	const getFetch = async () => {
		setState({
			...state,
			isloading: true
		});

		const resp = await fetch(url);
		const data = await resp.json();

		setState({
			data,
			isloading: false,
			hasErrors: null
		});
	};

	useEffect(() => {
		getFetch();
	}, [url]);

	return {
		data: state.data,
		isloading: state.isloading,
		hasErrors: state.hasErrors
	};
};
