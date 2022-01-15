import { AppBar, Collapse } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react'

export default function Cookie() {
  const [open, setOpen] = useState(true);
  
  return (
    <AppBar>
      <Collapse in={open}>
        <Alert>
          JobPlus uses cookies. By continuing you are agreeing to our use of cookies.
        </Alert>
      </Collapse>
    </AppBar>
  )
}
