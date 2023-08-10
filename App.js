// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
const Increase =()=>{setdata(data+1)}
const Decrease =()=>{
  if(data>1)
  setdata(data-1)
}
  const[data,setdata]= useState(1)
  return (
    <View className="flex-1 justify-end bg-black">
      <View className='mx-auto'>
        <Text className='text-yellow-100 text-9xl'>{data}</Text>
      </View>
      <View className='h-60'></View>
      <TouchableOpacity onPress={Increase}>
      <Text className='text-white bg-green-400 mb-10 mx-8 text-2xl text-center rounded py-2'>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Decrease}>
      <Text className='text-white bg-green-400 mb-10 mx-8 text-2xl text-center rounded py-2 '>Decrease</Text>
      </TouchableOpacity> 
    </View>
  );
}

