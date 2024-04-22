import Input from './components/Input';
import Button from './components/Button';


import { Container, Content, Row } from "./styles";
import { useState } from 'react'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState('');

  const handleAdd = (contentToAdd) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${contentToAdd}`);
  }

  const handleAddNumber = (num) => {
    handleAdd(num);
  }

  const handleAddPoint = (point) => {
    if(! currentNumber.includes('.')){
      handleAdd(point);
    }
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleClearAfterOperation = () => {
    setFirstNumber('0');
    setOperation('');
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const result = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(result));
      handleClearAfterOperation();
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
      handleClearAfterOperation();
    }
  }

  const handleTimesNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('×');
    } else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      handleClearAfterOperation();
    }
  }

  const handleDivisionNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('÷');
    } else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      handleClearAfterOperation();
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');

      switch(operation){
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;
        
        case '×':
          handleTimesNumbers();
          break;

        case '÷':
          handleDivisionNumbers();
          break;
        
      default:
        break;
      }
    } 
  }

  return (
    <Container>
      <Content>
          <Row>
            <Button label='C' onClick={() => handleOnClear()}/>
            <Input value={currentNumber}/>
          </Row>
          <Row>
            <Button label='.' onClick={() => handleAddPoint('.')}/>
            <Button label='0' onClick={() => handleAddNumber('0')}/>
            <Button label='×' onClick={handleTimesNumbers}/>
            <Button label='÷' onClick={handleDivisionNumbers}/>
          </Row>
          <Row>
            <Button label='7' onClick={() => handleAddNumber('7')}/>
            <Button label='8' onClick={() => handleAddNumber('8')}/>
            <Button label='9' onClick={() => handleAddNumber('9')}/>
            <Button label='-' onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label='4' onClick={() => handleAddNumber('4')}/>
            <Button label='5' onClick={() => handleAddNumber('5')}/>
            <Button label='6' onClick={() => handleAddNumber('6')}/>
            <Button label='+' onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label='1' onClick={() => handleAddNumber('1')}/>
            <Button label='2' onClick={() => handleAddNumber('2')}/>
            <Button label='3' onClick={() => handleAddNumber('3')}/>
            <Button label='=' onClick={handleEquals}/>            
          </Row>
      </Content>
    </Container>
  );
}

export default App;
