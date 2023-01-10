import axios from 'axios';
import Plotly from 'plotly.js/dist/plotly'
const getFloodDataset = async ()=>{
	let dataset = await axios.get('http://127.0.0.1:8000/flood/getFloodDataset');	
	dataset = dataset.data
	const lats = dataset.lat;
	const lons = dataset.lon;
	const size = dataset.size.map(e=>{
		return e*4
	});
	var data = [{
    type: 'scattergeo',
    mode: 'markers',
		lat: lats,
		lon: lons,
    marker: {
        size: size,
				color: size,
				colorscale: [
						[0.000, "rgb(68, 1, 84)"],
						[0.111, "rgb(72, 40, 120)"],
						[0.222, "rgb(62, 74, 137)"],
						[0.333, "rgb(49, 104, 142)"],
						[0.444, "rgb(38, 130, 142)"],
						[0.556, "rgb(31, 158, 137)"],
						[0.667, "rgb(53, 183, 121)"],
						[0.778, "rgb(109, 205, 89)"],
						[0.889, "rgb(180, 222, 44)"],
						[1.000, "rgb(253, 231, 37)"]
				],
        cmin: 2*4,
        cmax: 8*4,
        colorbar: {
            title: 'flood rate',
            ticksuffix: 'level',
            showticksuffix: 'last'
        },
    },
    name: 'flood map'
	}];
	var layout = {
		'geo': {
				'scope': 'asia',
				'resolution': 60
		},
		autosize: true,
		margin: {
			l: 0,
			r: 0,
			b: 0,
			t: 0,
			pad: 0
		},
	};

	Plotly.newPlot('container', data, layout);
}


export default getFloodDataset