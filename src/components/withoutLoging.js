import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import smallBuisness from "./buisness.json";
import { Link } from "react-router-dom";
import Map1 from "../components/map1";
const Dashboard = props => {
  return (
    <Container maxWidth="lg" className="car-container">
      {/* Change NAME to props.user.username */}
      {/* <h4>Welcome, {props.jipa.username}</h4> */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>description</TableCell>
            <TableCell>hours</TableCell>
            <TableCell>address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Change cars to props.cars and remove the cars.json import above */}
          {smallBuisness.map(buisness => (
            <TableRow key={buisness.id}>
              {/* <TableCell component="th" scope="row">
                            {buisness.id}
                        </TableCell> */}

              <TableCell>{buisness["name"]}</TableCell>

              <TableCell>{buisness["description"]}</TableCell>
              <TableCell>{buisness["hours"]}</TableCell>
              <Link to={{
                pathname: '/Map1', state: buisness}}>
                <TableCell>{buisness["address"]}</TableCell>

              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Dashboard;
