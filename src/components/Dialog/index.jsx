import React, { useRef } from "react";
import './dialog.styles.css'

export function Dialog() {
    const dialogRef = useRef(null)

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={closeDialog}>Close</button>
                <p>This modal dialog has a groovy backdrog!</p>
            </dialog>
            <button onClick={openDialog}>teste</button>
        </>
    )
}