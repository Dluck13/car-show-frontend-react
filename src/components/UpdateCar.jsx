import { Box, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/base"
import {Dialog} from "@mui/material"
import { SERVER_URL } from "./Constants"


const UpdateCar = ({data, updateCar}) => {
    const [open, setOpen] = useState(false)
    const [car, setCar] = useState({
        make: data.make,
        model: data.model,
        color: data.color,
        registration: data.registration,
        year: data.year,
        price: data.price

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

    const handleSave = async ()=>{
        await updateCar(car, SERVER_URL+'cars/'+data.id)
        handleClickClose()

    }

  return (
    <div>

        <Box>
            <Button onClick={handleClickOpen}  variant="contained">Update Car</Button>
        </Box>

        <Dialog open={open} onClose={handleClickClose}>
            <DialogTitle>Update Car</DialogTitle>
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

export default UpdateCar
