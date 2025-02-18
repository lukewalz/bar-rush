import { router } from "expo-router";
import { View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { useAuth } from "@/AuthProvider";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { FormControl } from "@/components/ui/form-control";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";

export default function SignIn() {
  const { loading, signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <FormControl className="p-4 m-4 border rounded-lg border-outline-300 bg-neutral-50">
      <VStack space="xl">
        <Heading>Login</Heading>
        <VStack space="xs">
          <Text className="text-typography-500">Email</Text>
          <Input className="min-w-[250px]">
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack space="xs">
          <Text className="text-typography-500">Password</Text>
          <Input className="text-center">
            <InputField type={showPassword ? "text" : "password"} />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
        </VStack>
        <Button
          className="ml-auto"
          onPress={() => {
            signIn("lukewalz1@gmail.com", "Test12345").then(() =>
              router.push("/")
            );
          }}
        >
          <ButtonText className="text-typography-0">Login</ButtonText>
        </Button>
      </VStack>
    </FormControl>
  );
}
