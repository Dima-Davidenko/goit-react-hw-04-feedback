import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Typography variant="h3" sx={{ mb: 3 }}>
        {title}
      </Typography>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
