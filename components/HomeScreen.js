import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        <View className="h-10"></View>
        <View>
          <Text className="text-3xl text-center text-orange-500">Details</Text>
        </View>

        <View
          className="border bg-white flex justify-center items-center py-5 m-5  border border-white rounded"
          style={styles.elevation}
        >
          <Text className="text-center font-semibold text-orange-600 text-xl">
            Name
          </Text>
          <Text className="mt-3 text-gray-600">
            Software designer||App tester
          </Text>
          <TouchableOpacity className="mt-4 bg-orange-600 px-10 py-2 rounded">
            <Text className="text-yellow-50 font-medium">View profile</Text>
          </TouchableOpacity>
        </View>
        <View
          className="border bg-white flex justify-center items-center py-5 m-5  border border-white rounded"
          style={styles.elevation}
        >
          <Text className="text-center font-semibold text-orange-600 text-xl">
            Name
          </Text>
          <Text className="mt-3 text-gray-600">
            Software designer||App tester
          </Text>
          <TouchableOpacity className="mt-4 bg-orange-600 px-10 py-2 rounded">
            <Text className="text-yellow-50 font-medium">View profile</Text>
          </TouchableOpacity>
        </View>
        <View
          className="border bg-white flex justify-center items-center py-5 m-5  border border-white rounded"
          style={styles.elevation}
        >
          <Text className="text-center font-semibold text-orange-600 text-xl">
            Name
          </Text>
          <Text className="mt-3 text-gray-600">
            Software designer||App tester
          </Text>
          <TouchableOpacity className="mt-4 bg-orange-600 px-10 py-2 rounded">
            <Text className="text-yellow-50 font-medium">View profile</Text>
          </TouchableOpacity>
        </View>
        <View
          className="border bg-white flex justify-center items-center py-5 m-5  border border-white rounded"
          style={styles.elevation}
        >
          <Text className="text-center font-semibold text-orange-600 text-xl">
            Name
          </Text>
          <Text className="mt-3 text-gray-600">
            Software designer||App tester
          </Text>
          <TouchableOpacity className="mt-4 bg-orange-600 px-10 py-2 rounded">
            <Text className="text-yellow-50 font-medium">View profile</Text>
          </TouchableOpacity>
        </View>
        <View
          className="border bg-white flex justify-center items-center py-5 m-5  border border-white rounded"
          style={styles.elevation}
        >
          <Text className="text-center font-semibold text-orange-600 text-xl">
            Name
          </Text>
          <Text className="mt-3 text-gray-600">
            Software designer||App tester
          </Text>
          <TouchableOpacity className="mt-4 bg-orange-600 px-10 py-2 rounded">
            <Text className="text-yellow-50 font-medium">View profile</Text>
          </TouchableOpacity>
        </View>


     
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  elevation: {
    shadowColor: "#52006A",
    elevation: 20,
  },
});
