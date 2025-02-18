import { View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { useAuth } from "@/AuthProvider";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => signOut()}>
        <ButtonText>Sign Out</ButtonText>
      </Button>
    </View>
  );
}
