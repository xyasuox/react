import React from 'react';

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button:React.FC<Props> = (props) => {
  return <button onClick={props.onClick}>ADD</button>
}