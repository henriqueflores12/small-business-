import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'
import Map1 from '../components/map1'
import {Link} from "react-router-dom";


class AddBiz extends Component {
    state = {
        open: false,
        name: '',
        description: '',
        hours: '',
        adress: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.buisnessTotal + 1
        delete payload.open
        console.log("THE BUISNESS", payload)
        // add this.props.addCar function here
        console.log(this.props)
        this.props.add_Buisness(payload)
        // also add this.setState to close the dialog
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',
                hours: '',
                adress: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
                    {/* <h1>Add buisness:</h1> */}
                    <Button color="secondary"
                        variant="contained"
                        className="add-buisness"
                        onClick={this.toggleDialog}
                    >
                        Add buisness
                    </Button>
                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New buisness</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="description" 
                                    placeholder="description" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="hours" 
                                    placeholder="hours" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="adress" 
                                    placeholder="adress" 
                                    value={this.state.adress} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Map1/>
                                <Button variant="contained" color="secondary" type="submit">save</Button>
                                
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
                
            </Fragment>
        )
    }
}

export default AddBiz