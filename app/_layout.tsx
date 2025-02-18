import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebaseConfig";
import { AuthProvider } from "@/AuthProvider";

export default function RootLayout() {
  const app = initializeApp(firebaseConfig);

  return (
    <AuthProvider app={app}>
      <GluestackUIProvider>
        <Stack />
      </GluestackUIProvider>
    </AuthProvider>
  );
}
