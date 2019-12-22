import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import Total from "../container/total";
import AddBusiness from "../container/AddBusiness";

const Dashboard = props => {
  console.log("text", props);
  return (
    <Container maxWidth="lg" className="car-container">
      {/* <h4>Welcome, {props.user.username}</h4> */}
      <div className="flex-container">
        {/* <Total /> */}
        <AddBusiness businessTotal={props.business.length} />
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>description</TableCell>
            <TableCell>hours</TableCell>
            <TableCell>adress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.business.map((business, idx) => (
            <TableRow key={business.id}>
              {/* <TableCell component="th" scope="row">
                            {business.id}
                        </TableCell> */}
              <TableCell>{business["name"]}</TableCell>
              <TableCell>{business["description"]}</TableCell>
              <TableCell>{business["hours"]}</TableCell>
              <TableCell>{business["adress"]}</TableCell>
              <TableCell>
                <DeleteIcon
                  onClick={() => props.removeBusiness(idx)} // add onClick method here
                  className="delete"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Dashboard;
