import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarToggler,
	MDBIcon,
	MDBCollapse,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_MOVIE } from "../../store/constants";

//npm i antd @types/antd @ant-design/icons mdb-react-ui-kit react-bootstrap
//import 'mdb-react-ui-kit/dist/css/mdb.min.css'
//import 'antd/dist/antd.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header() {
	const [showBasic, setShowBasic] = useState(false);

	const [searchData, setsearchData] = useState<any>({});

	const state: any = useSelector((state: any) => state.movies);

	const dispatch = useDispatch();

	const onchangeSearch = (e: any) => {
		setsearchData(e.target.value);
		console.log(e.target.value);
	};

	let history = useHistory();

	const onSubmit = (e: any) => {
		console.log(searchData);

		dispatch({ type: SEARCH_MOVIE, payload: searchData });
		if (searchData.startsWith("tt")) {
			history.push(`/details?i=${searchData}`);
		} else {
			history.push(`/search?q=${searchData}`);
		}
	};
	return (
		<div>
			<MDBNavbar
				sticky={true}
				expand="lg"
				light
				bgColor="white"
				style={{ padding: "20px" }}
			>
				<MDBContainer fluid>
					<Link to="/home" className="link">
						Home
					</Link>
					<MDBNavbarToggler
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setShowBasic(!showBasic)}
					>
						<MDBIcon icon="bars" fas />
					</MDBNavbarToggler>

					<MDBCollapse navbar show={showBasic}>
						<div
							style={{
								display: "grid",
								width: "30%",
								margin: "5px auto",
								gridTemplateColumns: "65% 35%",
							}}
						>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-1 search-input"
								onChange={onchangeSearch}
							/>
							<Button
								type="button"
								onClick={onSubmit}
								style={{ margin: "auto" }}
							>
								Submit
							</Button>
						</div>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</div>
	);
}
