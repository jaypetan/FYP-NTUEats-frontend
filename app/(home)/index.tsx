import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import SignInScreen from '../(auth)/sign-in'
import { Text, View } from 'react-native'
import { SignOutButton } from '@/app/components/SignOutButton'

import { UserProfile } from '@clerk/clerk-expo/web'
export default function Page() {
  const { user } = useUser()

  return (
    <View>
      {/* if signed in */}
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <SignOutButton />
      </SignedIn>

      {/* if signed out */}
      <SignedOut>
        <SignInScreen />
      </SignedOut>
    </View>
  )
}