import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';


const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 700,
    maxWidth: 900,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, itemName, theme) {
  return {
    fontWeight:
      itemName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SingleSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fieldId = "select-" + props.label.replace(" ", "-");
  const fieldLabelId = fieldId + "-label";
  const fieldName = props.label.replace(" ", "_")

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id={fieldLabelId}>{capitalize(props.label)}</InputLabel>
        <Select
          labelId={fieldLabelId}
          id={fieldId}
          value={props.value}
          name={fieldName}
          onChange={props.handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {props.itemNames.map(name => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
