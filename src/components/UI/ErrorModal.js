import React from 'react';
import Card from "./Card";
import Button from "./Button";
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';

const Backdrop = ({ onConfirm }) => {
    return (
        <div className={classes.backdrop} onClick={onConfirm} />
    )
}

const ModalOverlay = ({ title, msg, onConfirm }) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{title}</h2>
            </header>
            <div className={classes.content}>
                <p>
                    {msg}
                </p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}


const ErrorModal = ({ title, msg, onConfirm }) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onConfirm={onConfirm} title={title} msg={msg} />,
                document.getElementById('overlay-root')
            )}
        </>
    );
};

export default ErrorModal;