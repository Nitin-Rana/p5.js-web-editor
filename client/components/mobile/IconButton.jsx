import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../common/Button';

const ButtonWrapper = styled(Button)`
width: 3rem;
> svg {
  width: 100%;
  height: 100%;
}
`;

const IconButton = (props) => {
  const { icon, ...otherProps } = props;
  const Icon = icon;

  return (<ButtonWrapper
    iconBefore={<Icon />}
    kind={Button.kinds.inline}
    focusable="false"
    {...otherProps}
  />);
};

IconButton.propTypes = {
  icon: PropTypes.func.isRequired
};

export default IconButton;
