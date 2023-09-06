import { Box, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/base"
import {Dialog} from "@mui/material"


const AddCar = (props) => {
    const [open, setOpen] = useState(false)
    const [car, setCar] = useState({
        make: '',
        model: '',
        color: '',
        registration: '',
        year: '',
        price: ''

    })

    const handleClickOpen=()=>{
        setOpen(true)
    }

    const handleClickClose= ()=>{
        setOpen(false)
    }

    const handleChange=(event)=>{
    setCar({...car, [event.target.name]: event.target.value})

    }

    const handleSave = ()=>{
        props.addCar(car)
        handleClickClose()

    }

  return (
    <div>

        <Box>
            <Button onClick={handleClickOpen}  variant="contained">Add Car 🏎️</Button>
        </Box>

        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle>New Car</DialogTitle>
            <DialogContent>
                <input placeholder="Make" name="make" value={car.make} onChange={handleChange}/><br />
                <input placeholder="Model" name="model" value={car.model} onChange={handleChange}/><br />
                <input placeholder="Color" name="color" value={car.color} onChange={handleChange}/><br />
                <input placeholder="Registration" name="registration" value={car.registration} onChange={handleChange}/><br />
                <input placeholder="Year" name="year" value={car.year} onChange={handleChange}/><br />
                <input placeholder="Price" name="price" value={car.price} onChange={handleChange}/><br />
                <DialogActions>
                    <Button onClick={handleClickClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>

                </DialogActions>

            </DialogContent>
        </Dialog>

      
    </div>
  )
}

export default AddCar
