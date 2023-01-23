import '../styles/style.css';
import {getFloodDataset, getFloodDataset_precip} from './floodDataset';
import {fetchData, fetchNumOfCases, fetchNumOfDeaths, fetchPercentOfDeaths} from './dengueDataset'
// import fetchFloodData from './floodDataset';
fetchData();
fetchNumOfCases();
fetchNumOfDeaths();
fetchPercentOfDeaths();
getFloodDataset();
getFloodDataset_precip();

const accordions = document.getElementsByClassName('accordion');

const toggleAccordion = (e)=>{
	e.target.classList.toggle('accordion-open')
}

for(var i=0 ; i< accordions.length; i++){
	accordions[i].addEventListener('click', toggleAccordion)
}

// dengueDataset.innerHTML = JSON.stringify(fetchData());