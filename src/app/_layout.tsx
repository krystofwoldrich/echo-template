/**
 * TEMPORARY PLACEHOLDER — delete this file when building the app.
 * Replace with real screens and choose the best navigation layout (e.g. tabs, stack, drawer) for the requested app.
 */
import { ThemeProvider } from "@/components/theme-provider";
import { Stack, useNavigationContainerRef } from "expo-router";
import { useEffect } from "react";
import * as Sentry from "@sentry/react-native";

const navigationIntegration = Sentry.reactNavigationIntegration();

Sentry.init({
  // Replace with your DSN from https://sentry.io/
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  integrations: [navigationIntegration],
  // Set to a lower value (e.g. 0.2) in production to reduce overhead
  tracesSampleRate: 1.0,
});

function Layout() {
  const ref = useNavigationContainerRef();

  useEffect(() => {
    if (ref) {
      navigationIntegration.registerNavigationContainer(ref);
    }
  }, [ref]);

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}

export default Sentry.wrap(Layout);
