import {
  Button,
  Column,
  Host,
  ModalBottomSheet,
  ModalBottomSheetRef,
} from "@expo/ui/jetpack-compose";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const [visible, setVisible] = useState(false);
  const sheetRef = useRef<ModalBottomSheetRef>(null);

  const hideSheet = async () => {
    await sheetRef.current?.hide();
    setVisible(false);
  };

  return (
    <View>
      <Text>profile</Text>

      <Host matchContents>
        <Column>
          <Button onClick={() => setVisible(true)}>
            <Text>Open Bottom Sheet</Text>
          </Button>

          {visible && (
            <ModalBottomSheet
              ref={sheetRef}
              onDismissRequest={() => setVisible(false)}
            >
              <Text>Hello from the Bottom Sheet</Text>
              <Button onClick={hideSheet}>
                <Text>Close</Text>
              </Button>
            </ModalBottomSheet>
          )}
        </Column>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({});
