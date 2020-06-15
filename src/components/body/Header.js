import React,{useState,useEffect} from "react";
import NumberFormat from 'react-number-format';	

const Header = () =>{

	const [allCovidData,setAllCovidData] = useState([]);

	let intervalID = null;

	const getData = () =>{
		alert("UPDATING DATA.....");
		fetch("https://corona.lmao.ninja/v2/all?yesterday",{
			method : "GET"
		})
		.then(data => data.json())
		.then(result => {
			// console.log(result)
			setAllCovidData(result)
			intervalID = setTimeout(getData.bind(this), 60000);
		})
	}

	useEffect( () =>{
		getData();
	},[])

	useEffect( () => {
		clearTimeout(intervalID);
	},[])

	return(
		<React.Fragment>
			<div className="container header-cont">
				<div className="last-updated">
					<small>Last Updated: {Date(allCovidData.updated)}</small>
					<small className="note">Note: The data will be updated every 60 seconds.</small>
				</div>
				<h3>Global Count</h3>
				<h3 className="total-cases">Total Cases <span><i className="fas fa-biohazard"></i> <NumberFormat value={allCovidData.cases} displayType={'text'} thousandSeparator={true} /></span></h3>
				<h3 className="total-deaths">Total Deaths <span><i class="fas fa-skull-crossbones"></i> <NumberFormat value={allCovidData.deaths} displayType={'text'} thousandSeparator={true} /></span></h3>
				<h3 className="total-recovered">Total Recovered <span><i class="fas fa-heart"></i> <NumberFormat value={allCovidData.recovered} displayType={'text'} thousandSeparator={true} /></span></h3>
			</div>
		</React.Fragment>
	)
}

export default Header;