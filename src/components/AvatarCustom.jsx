import React from 'react';
import { string } from 'prop-types';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { teal, deepPurple, blueGrey } from '@material-ui/core/colors';

const getColor = (str = '') => {
  switch (str.toUpperCase()) {
    case 'B':
      return [deepPurple['50'], deepPurple['300']];
    case 'J':
      return [teal['50'], teal['300']];
    default:
      return [blueGrey['50'], blueGrey['300']];
  }
};

const useStyles = (props) =>
  makeStyles(() => ({
    root: {
      backgroundColor: props.backgroundColor,
      color: props.color,
    },
  }));

export default function AvatarCustom({
  className,
  alt,
  src = '/broken-path/force-alt-first-letter',
  ...other
}) {
  const firstLetter = alt?.charAt(0);
  const [backgroundColor, color] = getColor(firstLetter);
  const classes = useStyles({ backgroundColor, color })();

  return (
    <Avatar
      alt={alt}
      src={src}
      className={[classes.root, className].join(' ')}
      {...other}
    />
  );
}

AvatarCustom.propTypes = {
  alt: string,
  src: string,
  className: string,
};
