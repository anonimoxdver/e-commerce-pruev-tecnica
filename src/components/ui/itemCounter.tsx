import type { FC } from 'react';

interface Props {
  currentValue: number;
  maxValue: number 
  title: string
  uptadedQuantity: ( newValue: number) => void;
}

export const ItemCounter:FC<Props> = ({ currentValue , maxValue, uptadedQuantity, title}) => {

  const addOrRemove = ( value: number ) => {
    if ( value === -1 ) {
      if ( currentValue === 1 ) return;

      return uptadedQuantity( currentValue - 1);
    }

    if ( currentValue >= maxValue ) return;

    uptadedQuantity( currentValue + 1 )    
  }

  return (
    <div className="custom-number-input h-10 w-32 mb-12">
        <label form="custom-input-number" className="w-full text-gray-700 text-xs font-normal">
          {title}
        </label>
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button onClick={ () => addOrRemove(-1)}  className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
        <span className="m-auto text-2xl font-thin">−</span>
        </button>
    <p className='font-semibold text-4xl'>{  currentValue } </p>
     
       
        <button onClick={ () => addOrRemove(+1)}  className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
        </div>
      </div>
  )
}



    


