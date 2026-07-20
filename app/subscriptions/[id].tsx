import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>SubscriptionDetails : {id}</Text>
      <Link rel="stylesheet" href="/">
        GO Back
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
