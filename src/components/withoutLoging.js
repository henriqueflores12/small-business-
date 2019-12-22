import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import smallBusiness from "./business.json";
import { Link } from "react-router-dom";
import Map from "./Map";
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
          {smallBusiness.map(business => (
            <TableRow key={business.id}>
              {/* <TableCell component="th" scope="row">
                            {business.id}
                        </TableCell> */}

              <TableCell>{business["name"]}</TableCell>

              <TableCell>{business["description"]}</TableCell>
              <TableCell>{business["hours"]}</TableCell>
              <Link
                to={{
                  pathname: "/map",
                  state: business
                }}
              >
                <TableCell>{business["address"]}</TableCell>
              </Link>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Dashboard;
