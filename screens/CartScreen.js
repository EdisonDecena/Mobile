import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { themeColors } from '../theme';
import FruitCard from '../components/fruitCard';
import { cartItems } from '../constants';

export default function CartScreen() {
  const navigation = useNavigation(); // Use useNavigation from @react-navigation/native

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'orange' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 5 }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ border: '1px solid gray', borderRadius: 15 }}>
          <ChevronLeftIcon size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <Text style={{ color: themeColors.text, fontSize: 24, paddingVertical: 10 }}>Your <Text style={{ fontWeight: 'bold' }}>cart</Text></Text>
        <View>
          {cartItems.map((item, index) => <FruitCard fruit={item} key={index} />)}
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingVertical: 10 }}>
          <Text style={{ fontSize: 20 }}>Total price: <Text style={{ fontWeight: 'bold', color: 'yellow' }}>YOUR_TOTAL_PRICE</Text></Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 7 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Payment')} // Navigate to the Payment screen
          style={{
            backgroundColor: 'orange',
            opacity: 0.8,
            shadowColor: 'orange',
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 15 },
            shadowOpacity: 0.4,
          }}
          className="p-3 flex-1 rounded-xl">
          <Text style={{ fontSize: 20, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
