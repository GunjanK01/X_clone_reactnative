import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';

const TRENDING_TOPICS = [
  { topic: "#ReactNative", tweets: "125K" },
  { topic: "#TypeScript", tweets: "89K" },
  { topic: "#WebDevelopment", tweets: "234K" },
  { topic: "#AI", tweets: "567K" },
  { topic: "#TechNews", tweets: "98K" },
  { topic: "#MobileApps", tweets: "45K" },
  { topic: "#JavaScript", tweets: "300K" },
  { topic: "#SoftwareEngineering", tweets: "200K" },
  { topic: "#OpenSource", tweets: "75K" },
  { topic: "#CloudComputing", tweets: "120K" },
  { topic: "#DevOps", tweets: "80K" },
];

const SearchScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>

        //header
      <View className='px-4 py-3 border-b border-gray-200'>
        <View className='flex-row iterms-center bg-gray-100 rounded-full px-4 py-3'>
          <Feather name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search Twitter"
            className="flex-1 ml-2 text-base"
            placeholderTextColor="#657786">

          </TextInput>
        </View>

      </View>

      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
         <View className="p-4">
          <Text className="text-xl font-bold text-gray-900 mb-4">Trending for you</Text>
          {TRENDING_TOPICS.map((item, index) => (
            <TouchableOpacity key={index} className="py-3 border-b border-gray-100">
              <Text className="text-gray-500 text-sm">Trending in Technology</Text>
              <Text className="font-bold text-gray-900 text-lg">{item.topic}</Text>
              <Text className="text-gray-500 text-sm">{item.tweets} Tweets</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SearchScreen