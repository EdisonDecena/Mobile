import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import { BellIcon, MagnifyingGlassIcon, ShoppingCartIcon } from 'react-native-heroicons/outline';
import { MapPinIcon } from 'react-native-heroicons/solid';
import FruitCard from '../components/fruitCard';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
  const navigation = useNavigation();

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />

      <Image
        source={require('../assets/images/juicebackground.jpg')}
        style={{ height: height * 0.2 }}
        className="w-full absolute -top-5 opacity-10"
      />
      <SafeAreaView className={ios ? '-mb-8' : ''}>
        {/* Logo, Shopping Cart */}
        <View className="mx-4 flex-row justify-between items-center">
          <Image
            source={require('../assets/images/logo.png')}
            className="h-[70px] w-[80px] "
          />

          <View className="flex-row items-center space-x-1">
            <MapPinIcon size="40" color={themeColors.bgLight} />
            <Text className="font-semibold text-base">Dagupan</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <ShoppingCartIcon size="40" color="black" />
          </TouchableOpacity>
        </View>
        {/* search bar */}
        <View className="mx-5 shadow" style={{ marginTop: height * 0.06 }}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              style={{ flex: 1, padding: 4, fontWeight: 'bold', color: 'gray' }}
            />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight, padding: 8 }}
            >
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive
                      ? 'black' 
                      : 'rgba(0,0,0,0.07)',
                  }}
                  className="p-4 px-5 mr-2 rounded-full shadow"
                >
                  <Text className={'font-semibold ' + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>

      {/* juice */}
      <View
        className={`overflow-visible flex justify-center flex-1 ${
          ios ? 'mt-10' : ''
        }`}
      >
        <View>
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            renderItem={({ item }) => <FruitCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width * 0.63}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View>
      </View>
    </View>
  );
}
