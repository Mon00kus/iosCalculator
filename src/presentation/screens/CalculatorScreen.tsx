import { Text, View } from 'react-native';
import { globalStyles, colors } from '../../config/theme/app-theme';
import { CalculatorBotton } from '../components/CalculatorBotton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    buildNumber,
    toggleSing,
    clean, 
    deleteLastNumber,
    divideOper,
    multiplyOper,
    addOper,
    substractOper,
    moduleOper,
  } = useCalculator()
  return (
    <View style= { globalStyles.calculatorContainer }>      
      <View style= {{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text 
          adjustsFontSizeToFit
          numberOfLines={1}
          style= {globalStyles.mainResult}>{number}</Text>
        <Text 
          adjustsFontSizeToFit
          numberOfLines={1}
          style= {globalStyles.subResult}>{(prevNumber==='0')?' ':prevNumber}</Text>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={ clean } label="C"   color= {colors.lightGray} blackText/>
        <CalculatorBotton onPress={ toggleSing } label="+/-" color= {colors.lightGray} blackText/>
        <CalculatorBotton onPress={moduleOper} label="%"   color= {colors.lightGray} blackText/>
        <CalculatorBotton onPress={ divideOper } label="÷"   color= {colors.orange}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=> buildNumber('7')} label="7" color= {colors.darkGray}/>
        <CalculatorBotton onPress={()=> buildNumber('8')} label="8" color= {colors.darkGray}/>
        <CalculatorBotton onPress={()=> buildNumber('9')} label="9" color= {colors.darkGray}/>
        <CalculatorBotton onPress={multiplyOper} label="X" color= {colors.orange}/>
      </View>
          <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=> buildNumber('4')} label="4" color= {colors.darkGray}/>
        <CalculatorBotton onPress={()=> buildNumber('5')} label="5" color= {colors.darkGray}/>
        <CalculatorBotton onPress={()=> buildNumber('6')} label="6" color= {colors.darkGray}/>
        <CalculatorBotton onPress={substractOper} label="-" color= {colors.orange}/>
      </View>
          <View style={globalStyles.row}>
        <CalculatorBotton onPress={()=> buildNumber('1')} label="1" color= {colors.darkGray}/>
        <CalculatorBotton onPress={()=> buildNumber('2')} label="2" color= {colors.darkGray}/>
        <CalculatorBotton onPress={()=> buildNumber('3')} label="3" color= {colors.darkGray}/>
        <CalculatorBotton onPress={addOper} label="+" color= {colors.orange}/>
      </View>
          <View style={globalStyles.row}>
        {/* <CalculatorBotton onPress={()=> buildNumber('0')} label="0" color= {colors.darkGray} doubleSize />         */}
        <CalculatorBotton onPress={()=> buildNumber('0')} label="0" color= {colors.darkGray}/>
          <CalculatorBotton onPress={ deleteLastNumber } label="del" color= {colors.orange}/>
        <CalculatorBotton onPress={()=> buildNumber('.')} label="." color= {colors.darkGray}/>
        <CalculatorBotton onPress={()=> console.log('=')} label="=" color= {colors.orange}/>
      </View>
    </View>
  )
}