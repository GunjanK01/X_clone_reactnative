import { Stack } from "expo-router";
import "../global.css";
import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache'


export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack > 
        <Stack.Screen name="(auth)" options={{headerShown: false}} /> //here the name in "()" dosent appear at header but if its just "" then it appears at header
      </Stack>
    </ClerkProvider>
  );
}
