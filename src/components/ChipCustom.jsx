import React from 'react';
import { string } from 'prop-types';
import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { getTagColor } from '/src/utils';

const useStyles = (props) =>
  makeStyles((theme) => ({
    root: {
      fontSize: '.7rem',
      backgroundColor: props.background,
      color: props.color,
      border: 0,
    },
    sizeSmall: {
      height: theme.spacing(2.25),
    },
    labelSmall: {
      padding: theme.spacing(0.75),
    },
  }));

export default function ChipCustom({ className, ...other }) {
  const { background, color } = getTagColor(other.label);
  const classes = useStyles({ background, color })();

  return (
    <Chip classes={classes} className={[className].join(' ')} {...other} />
  );
}

ChipCustom.propTypes = {
  className: string,
};
