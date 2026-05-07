import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { initDb } from "./storage/localDb";

export default function App() {
  useEffect(() => {
    initDb();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ObraCheck MVP pronto para evoluir ✅</Text>
      <Text>Checklist offline com suporte a fotos e marcações.</Text>
    </SafeAreaView>
  );
}
