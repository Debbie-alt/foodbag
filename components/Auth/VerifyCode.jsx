import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';

const VerifyCode = () => {
  const tailwind = useTailwind();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text !== '' && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={tailwind('flex-1 items-center justify-center px-6 bg-white')}>
      <Text style={tailwind('text-xl text-center text-black mb-2')}>
        Please enter the 6 digits code we sent to your email ****doe@gmail.com
      </Text>

      {/* 6-Digit Input Container */}
      <View style={tailwind('flex-row justify-between w-full my-6')}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputs.current[index] = el)}
            style={tailwind('w-12 h-14 bg-gray-100 rounded-lg text-center text-xl font-bold border-gray-300')}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            value={digit}
          />
        ))}
      </View>

      <TouchableOpacity 
        style={tailwind('bg-red-600 w-full py-4 rounded-full items-center mb-6')}
        onPress={() => console.log("Code submitted:", code.join(''))}
      >
        <Text style={tailwind('text-white text-lg font-semibold')}>Enter code</Text>
      </TouchableOpacity>

      <View style={tailwind('flex-row')}>
        <Text style={tailwind('text-black text-lg')}>Didn't receive a code? </Text>
        <TouchableOpacity>
          <Text style={tailwind('text-purple-600 text-lg')}>Send code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyCode;