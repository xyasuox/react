import React from 'react';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input:React.FC<Props> =(props)=>{
  return (
    <>
      <input type="text" value={props.value} onChange={props.onChange}/>
    </>
  )
}