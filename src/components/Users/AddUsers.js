import React, {useState, useRef } from 'react';
import Card from "../UI/Card";
import classes from './AddUsers.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = ({ onAddUser }) => {
    const inputUserName = useRef()
    const inputUserAge = useRef()
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = inputUserName.current.value;
        const enteredAge = inputUserAge.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                msg: "Please enter valid name and age."
            })
            return;
        }
        if (parseFloat(enteredAge) < 1) {
            setError({
                title: "Invalid age",
                msg: "Please enter valid age."
            })
            return;
        }
        onAddUser(enteredName, enteredAge)
        inputUserName.current.value = ""
        inputUserAge.current.value = ""
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal title={error.title} msg={error.msg} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={inputUserName} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" ref={inputUserAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUsers;