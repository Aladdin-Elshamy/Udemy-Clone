import FilterListIcon from '@mui/icons-material/FilterList';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Filterbox = () => {
	return (
		<div className="mt-6 flex">
			<div className="flex justify-start items-center cursor-pointer border border-black px-6 w-fit hover:bg-gray-100 mr-3">
				<FilterListIcon />
				<p className="ml-2 font-medium capitalize">filter</p>
			</div>

			<div className="w-52">
				<FormControl fullWidth className='hover:bg-gray-100'>
					<InputLabel id="demo-simple-select-label">
						<div>
							<p className="font-medium text-sm">Sort by</p>
							<p className="font-bold text-black">Most popular</p>
						</div>
					</InputLabel>
					<Select
						className="border border-black  "
						sx={{
							height: 65,
							borderRadius: '0px',
						}}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="select"
					>
						<MenuItem>Most Popular</MenuItem>
						<MenuItem>Highest Rated</MenuItem>
						<MenuItem>Newest</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>
	);
};

export default Filterbox;
