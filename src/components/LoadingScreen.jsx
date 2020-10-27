import React from 'react';
import { string } from 'prop-types';
import { Box, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const animationDelay = '1000ms';
const animationDuration = '1200ms';

export const ANIMATION_TIMEOUT = 2000;

const useStyles = makeStyles({
  darkRed: {
    fill: '#c5221f',
    animation: `$xLeftIn ${animationDuration} ease ${animationDelay} forwards`,
  },
  blue: {
    fill: '#4285f4',
    animation: `$xLeftIn ${animationDuration} ease ${animationDelay} forwards`,
  },
  red: {
    fill: '#ea4335',
    animation: `$xTopIn ${animationDuration} ease ${animationDelay} forwards`,
  },
  yellow: {
    fill: '#fbbc04',
    animation: `$xRightIn ${animationDuration} ease ${animationDelay} forwards`,
  },
  green: {
    fill: '#34a853',
    animation: `$xRightIn ${animationDuration} ease ${animationDelay} forwards`,
  },
  '@keyframes xLeftIn': {
    to: { transform: 'translate3d(50px, 0, 0)' },
  },
  '@keyframes xRightIn': {
    to: { transform: 'translate3d(-50px, 0, 0)' },
  },
  '@keyframes xTopIn': {
    to: { transform: 'translate3d(0, 70px, 0)' },
  },
});

export default function LoadingScreen({ text }) {
  const classes = useStyles();

  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      zIndex={1400}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="background.default"
      className="LoadingScreen"
    >
      <Box align="center" width={300}>
        <Box pb={5}>
          <svg width="220" height="165" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="loadingScreenBaseLetterPath"
                d="M170 80.805L110 126 50 81.882V165H16c-8.837 0-16-7.163-16-16V22C0 9.85 9.85 0 22 0c6.145 0 11.701 2.52 15.693 6.581L109 61l73.673-54.783A21.928 21.928 0 01198 0c12.15 0 22 9.85 22 22v127c0 8.837-7.163 16-16 16h-34V80.805z"
              />
              <path
                id="loadingScreenBaseLetterTopPath"
                d="M170 80.805L110 126 50 81.882 0 43V22C0 9.85 9.85 0 22 0c6.145 0 11.701 2.52 15.693 6.581L109 61l73.673-54.783A21.928 21.928 0 01198 0c12.15 0 22 9.85 22 22v21l-50 37.805z"
              />
              <clipPath id="loadingScreenBaseLetterClip">
                <use xlinkHref="#loadingScreenBaseLetterPath" />
              </clipPath>
              <clipPath id="loadingScreenSVGTopClip">
                <use xlinkHref="#loadingScreenBaseLetterTopPath" />
              </clipPath>
            </defs>

            <use xlinkHref="#loadingScreenBaseLetterPath" fill="#f1f3f4" />

            <g clipPath="url(#loadingScreenBaseLetterClip)">
              <rect width="50" height="100%" x="-50" className={classes.blue} />
              <rect
                width="50"
                height="100%"
                x="220"
                className={classes.green}
              />
            </g>

            <g clipPath="url(#loadingScreenSVGTopClip)">
              <use
                xlinkHref="#loadingScreenBaseLetterTopPath"
                y="-70"
                className={classes.red}
              />
              <rect
                width="50"
                height="100%"
                x="-50"
                className={classes.darkRed}
              />
              <rect
                width="50"
                height="100%"
                x="220"
                className={classes.yellow}
              />
            </g>
          </svg>
        </Box>
        <LinearProgress variant="indeterminate" />
        <Box mt={2}>
          <Typography variant="h6" color="textSecondary">
            {text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

LoadingScreen.propTypes = {
  text: string,
};

LoadingScreen.defaultProps = {
  text: 'LOADING',
};
