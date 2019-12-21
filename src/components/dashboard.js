import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

import Total from '../container/total'
import AddBuisness from '../container/addBuisness'






 
const Dashboard = (props) => {
    console.log('text',props)
    return (
        <Container maxWidth="lg" className="car-container">
            {/* <h4>Welcome, {props.user.username}</h4> */}
            <div className="flex-container">
                          
                {/* <Total /> */}
                <AddBuisness buisnessTotal={props.buisness.length} />
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
                {props.buisness.map((buisness, idx) => (
                    <TableRow key={buisness.id}>
                        {/* <TableCell component="th" scope="row">
                            {buisness.id}
                        </TableCell> */}
                        <TableCell>{buisness["name"]}</TableCell>
                        <TableCell>{buisness["description"]}</TableCell>
                        <TableCell>{buisness["hours"]}</TableCell>
                        <TableCell>{buisness["adress"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                onClick = {() => props.removeBuisness(idx)}// add onClick method here
                                className="delete" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Dashboard