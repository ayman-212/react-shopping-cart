import React from "react";

import Toolbar from "../../Components/Navigations/ToolBar/Toolbar";
import Footer from "../../Components/Footer/Footer"
import classes from "./Layout.module.css"

const layout = (props) => (
    <div className={classes.Layout}>
        <Toolbar />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
)

export default layout