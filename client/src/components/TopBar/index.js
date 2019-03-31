import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './index.scss';

const TopBar = (props) => {
  const { page } = props;
  return (
    <AppBar position="static" color="default" className="gj-topbar">
      <div className="gj-topbar-content">
        <p>{page}</p>
      </div>
    </AppBar>
  );
}

export default TopBar;