import axios from "axios";
import Chart from 'chart.js/auto'
const dataset = document.getElementById('dengueDataset');

const fetchData = async()=>{
	let res = await axios.get('http://127.0.0.1:8000/dengue/get_dataset');
	// res.forEach(e=> console.log(e));
	res = res.data
	const labels = res.map(
		e=>{
			return Object.keys(e)[0]
		}
	)
	const data = res.map(
		e=>{
			return Object.values(e)[0]
		}
	)
	
	new Chart(
		document.getElementById('dengueDataset'),
		{
			// options: {
			// },
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'cases',
						data: data,
						pointRadius: 0,
						borderColor: '#06b6d4',
						backgroundColor: '#06b6d4',
						cubicInterpolation: 'monotone'
					}
				]
			},
			options: {
				legend: {
					display: false
				},    
			}
		}
	);
	dataset.innerHTML = res
}

const fetchNumOfCases = async()=>{
	let res = await axios.get('http://127.0.0.1:8000/dengue/getNumOfCases')
	// numOfCases.innerHTML = JSON.stringify(data.data);
	res = res.data
	console.log(res);
	const labels = res.map(
		e=>{
			return e.region 
		}
	)
	const data = res.map(
		e=>{
			return e.cases 
		}
	)
	new Chart(
		document.getElementById('dengueNumOfCases_bar'),
		{
			type: 'bar',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'numberOfCases',
						data: data,
						backgroundColor: [
							'rgba(255, 99, 132)',
							'rgba(255, 159, 64)',
							'rgba(255, 205, 86)',
							'rgba(75, 192, 192)',
							'rgba(54, 162, 235)',
							'rgba(153, 102, 255)',
							'rgba(201, 203, 207)'
						]
					}
				],
				options: {
					interaction: {
            mode: 'x'
					},
					animations: {
						tension: {
							duration: 1000,
							easing: 'linear',
							from: 1,
							to: 0,
							loop: true
						}
					}
				}
			}
		}
	)
	new Chart(
		document.getElementById('dengueNumOfCases'),
		{
			type: 'pie',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'number Of Cases',
						data: data,
						backgroundColor: [
							'rgba(255, 99, 132)',
							'rgba(255, 159, 64)',
							'rgba(255, 205, 86)',
							'rgba(75, 192, 192)',
							'rgba(54, 162, 235)',
							'rgba(153, 102, 255)',
							'rgba(201, 203, 207)'
						]
					}
				],
				options:{
					animations: {
						tension: {
							duration: 1000,
							easing: 'linear',
							from: 1,
							to: 0,
							loop: true
						}
					},
				}
			}
		}
	);
}
const fetchNumOfDeaths = async()=>{
	let res = await axios.get('http://127.0.0.1:8000/dengue/getNumOfDeaths')
	res = res.data
	const labels = res.map(
		e=>{
			return e.region
		}
	)
	const data = res.map(
		e=>{
			return e.deaths
		}
	)
	
	new Chart(
		document.getElementById('dengueNumOfDeaths'),
		{
			type: 'bar',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'numberOfDeaths',
						data: data,
						backgroundColor: [
							'rgba(255, 99, 132)',
							'rgba(255, 159, 64)',
							'rgba(255, 205, 86)',
							'rgba(75, 192, 192)',
							'rgba(54, 162, 235)',
							'rgba(153, 102, 255)',
							'rgba(201, 203, 207)'
						]
					}
				],
				options: {
					interaction: {
            mode: 'x'
					},
					animations: {
						tension: {
							duration: 1000,
							easing: 'linear',
							from: 1,
							to: 0,
							loop: true
						}
					}
				}
			}
		}
	);
}
const fetchPercentOfDeaths = async()=>{
	let res = await axios.get('http://127.0.0.1:8000/dengue/getPercentOfDeaths')
	res = res.data
	const labels = res.map(
		e=>{
			return e.region
		}
	)
	const data = res.map(
		e=>{
			return e.percent
		}
	)
	
	new Chart(
		document.getElementById('denguePercentOfDeaths'),
		{
			type: 'bar',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'death percentage',
						data: data,
						backgroundColor: [
							'rgba(255, 99, 132)',
							'rgba(255, 159, 64)',
							'rgba(255, 205, 86)',
							'rgba(75, 192, 192)',
							'rgba(54, 162, 235)',
							'rgba(153, 102, 255)',
							'rgba(201, 203, 207)'
						]
					}
				],
				options: {
					interaction: {
            mode: 'x'
					},
					animations: {
						tension: {
							duration: 1000,
							easing: 'linear',
							from: 1,
							to: 0,
							loop: true
						}
					}
				}
			}
		}
	);
}
export {
	fetchData,
	fetchNumOfCases,
	fetchNumOfDeaths,
	fetchPercentOfDeaths
};