import { useRef, useState } from 'react';

enum Operator {
  add,
  substract,
  multiply,
  divide, 
  module
}

export const useCalculator = () => {

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  
    const lastOperation = useRef<Operator>();

    const clean = () => {
      setNumber('0');
      setPrevNumber('0');
    }

    const deleteLastNumber = () => {
      let currentSign = '';
      let temporalNumber = number;

      // Check if the number is negative
      if (number.includes('-')) {
        currentSign = '-';
        temporalNumber = number.substring(1); // Remove the negative sign for processing
      }

      // If there's only one character remaining (or two if it's '-0'),
      // or if the length is 1 and it's not a negative sign
      if (temporalNumber.length === 1 || (temporalNumber.length === 2 && currentSign === '-')) {
        return setNumber('0'); // Set to '0'
      }

      // If there are more characters, delete the last one and re-apply the sign if needed
      setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    const toggleSing = () =>{
      if (number.includes('-')){
        return setNumber(number.replace('-',''));
      }
      setNumber( '-' + number);
    }

    const buildNumber = (numberString: string) => {
    // If a decimal point already exists, don't add another one
    if (number.includes('.') && numberString === '.') {
      return;
    }

    // Handle initial '0' and subsequent numbers
    if (number === '0' || number === '-0') {
      // If the new number is a decimal point, allow '0.'
      if (numberString === '.') {
        setNumber(number + numberString);
        return;
      }
      // If the new number is '0' and there's no decimal, prevent adding more zeros (e.g., '00', '000')
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      // If the new number is not '0' and there's no decimal, replace the '0' (e.g., '0' becomes '5')
      if (numberString !== '0' && !number.includes('.')) {
        setNumber(numberString);
        return;
      }
    }

    // Allow adding '0' after a decimal point (e.g., '0.0', '123.00')
    if (number.includes('.') && numberString === '0') {
      setNumber(number + numberString);
      return;
    }

    // For all other cases, just append the numberString
    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')){
      setPrevNumber(number.slice(0,-1));
    }else{
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOper = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  }
  const multiplyOper = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  }
  const substractOper = () => {
    setLastNumber();
    lastOperation.current = Operator.substract;
  }
  const addOper = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  }
  const moduleOper = () => {
    setLastNumber();
    lastOperation.current = Operator.module;
  }

  return {
    //properties
    number,   
    //methods
    buildNumber,
    toggleSing,
    clean,
    deleteLastNumber,
    prevNumber,
    divideOper,
    multiplyOper,
    addOper,
    substractOper,
    moduleOper,
  }
}