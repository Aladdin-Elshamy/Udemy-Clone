import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationCourses() {
	const [page, setPage] = React.useState(1);
	const handleChange = (
		_event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
	};

	return (
		<Stack
			spacing={2}
			sx={{
				marginTop: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<Pagination count={10} page={page} onChange={handleChange} />
		</Stack>
	);
}
