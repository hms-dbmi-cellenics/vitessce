/* eslint-disable */
import React, { useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from '../shared-plot-options/styles';
import OptionsContainer from '../shared-plot-options/OptionsContainer';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { getNextScope } from '../../utils';
import { COORDINATION_TYPE_NAMES } from '../../app/names';


function ScopeSelect(props) {
  const {
    label,
    value,
    options,
    onValueChange,
  } = props;

  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow>
      <TableCell className={classes.labelCell} htmlFor="cell-color-encoding-select">
        {label}
      </TableCell>
      <TableCell className={classes.inputCell}>
        <div>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} classes={{ text: classes.menuSelectButtonText }}>
            {value}<ArrowDropDownIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option) => (
              <MenuItem key={option} onClick={() => {
                onValueChange(option, false);
                handleClose();
              }}>{option}</MenuItem>
            ))}
            <MenuItem onClick={() => {
              onValueChange(getNextScope(options), true);
              handleClose();
            }}>+ Add new scope</MenuItem>
          </Menu>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default function ScatterplotCoordinations(props) {
  const {
    types,
    currentScopes,
    potentialScopes,
    onChangeScope,
  } = props;

  const classes = useStyles();
  
  return (
    <Box className={classes.tabBox}>
      <h5>Edit coordination scopes</h5>
      <OptionsContainer>
        {types.map((cType) => (
          <ScopeSelect
            key={cType}
            label={COORDINATION_TYPE_NAMES[cType]}
            value={currentScopes[cType]}
            options={potentialScopes[cType]}
            onValueChange={(nextScopeName, requiresNewScope) => onChangeScope(cType, nextScopeName, requiresNewScope)}
          />
        ))}
      </OptionsContainer>
    </Box>
  );
}
