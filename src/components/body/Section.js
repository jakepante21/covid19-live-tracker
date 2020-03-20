import React,{useState,useEffect}from "react";
import NumberFormat from 'react-number-format';
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable } from 'mdbreact';	

const Section = () =>{

	let intervalID = null;

	const [countriesData,setCountriesData] = useState([]);
	const [data,setData] = useState({
		columns: [
			{
				label: "Country",
				field: "country",
				sort: "asc",
				width: 250
			},
			{
				label: "Confirmed Cases",
				field: "cases",
				sort: "desc",
				width: 120
			},
			{
				label: "Today Cases",
				field: "todayCases",
				sort: "asc",
				width: 120
			},
			{
				label: "Deaths",
				field: "deaths",
				sort: "asc",
				width: 120
			},
			{
				label: "Today Deaths",
				field: "todayDeaths",
				sort: "asc",
				width: 80
			},
			{
				label: "Recovered",
				field: "recovered",
				sort: "asc",
				width: 100
			},
			{
				label: "Active",
				field: "active",
				sort: "asc",
				width: 100
			},
			{
				label: "Critical",
				field: "critical",
				sort: "asc",
				width: 120
			}
		]
	});

	const getData = () =>{
		fetch("https://corona.lmao.ninja/countries",{
			method : "GET"
		})
		.then(data => data.json())
		.then(result => {
			setCountriesData(result)
			intervalID = setTimeout(getData.bind(this), 20000);
		})
	}

	useEffect( () =>{
		getData();
	},[])

	useEffect( () =>{
		setData({...data,rows : countriesData})
	},[countriesData])

	useEffect( () => {
		clearTimeout(intervalID);
	},[])

	return(
		<React.Fragment>
			<div className="container section-cont m-0">
				<div className="table-responsive">
					<MDBDataTable
						scrollX
						scrollY
						maxHeight="300px"
						striped
						bordered
						data={data}
						tbodyTextWhite={true}
						theadTextWhite={true}
						theadColor = "dark"
						pagesAmount= {4}
				    />
				</div>
			</div>
		</React.Fragment>
	)
}

export default Section;