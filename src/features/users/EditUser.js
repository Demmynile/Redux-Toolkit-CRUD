import React from 'react'
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import {useState} from 'react'
import { useNavigate  , useParams} from "react-router-dom"
import { useSelector } from 'react-redux'

const EditUser = () => {
	const navigate = useNavigate()
	
	const params = useParams()
	console.log(params.id)

	const users = useSelector(store => store.users)
	console.log(users)


	const existingUser = users.filter(user => user.id === params.id)
	const {name , email} = existingUser[0]



	const [values , setValues] = useState({
		name : name,
		email : email
	})
	const handleEditUser = () => {
		setValues({name : '' , email : ''})
		navigate("/")
	}
	return (
		<div className = "mt-10 max-w-xl mx-auto">
         <TextField 
          label="Name"
		  value = {values.name}
		  onChange = {(e) => setValues({...values , name : e.target.value})}
		  inputProps={{type : 'text' , placeholder : 'Jhon Doe'}}
         />
         <br/>
         <TextField 
          label="Email"
		  value = {values.email}
		  onChange = {(e) => setValues({...values , email : e.target.value})}
		  inputProps={{type : 'email' , placeholder : 'johndoe@gmail.com'}}
         />

		 <Button onClick={handleEditUser}>Submit</Button>

		</div>
	)
}

export default EditUser