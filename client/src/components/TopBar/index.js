import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const TopBar = (props) => {
  const { page } = props;
  return (
    <AppBar position="static" color="default" className="gj-topbar">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {page}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;