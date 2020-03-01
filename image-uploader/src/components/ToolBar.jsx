import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircleRounded, GetAppRounded, PublishRounded } from '@material-ui/icons';
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: { marginRight: theme.spacing(2) },
  root: { flexGrow: 1 },
  title: { flexGrow: 1 }
}));

function ToolBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Files
          </Typography>
          <Button color="inherit" className={classes.button}>
            <AddCircleRounded />New Folder
          </Button>
          <Button color="inherit" className={classes.button}>
            <PublishRounded />Upload Files
          </Button>
          <Button color="inherit" className={classes.button}>
            <GetAppRounded />Download All
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ToolBar;
