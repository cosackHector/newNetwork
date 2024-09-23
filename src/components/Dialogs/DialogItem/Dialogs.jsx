import React from "react";
import styles from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";


const  Dialogs = ({dialogsData}) => {
return (
    <div className={styles.dialog}>
        {dialogsData
            .map((dialog, i) => 
                <Dialog 
                    key={i} 
                    name={dialog.name} 
                    id={dialog.id}/> )}
    </div>
)};

export default Dialogs;
