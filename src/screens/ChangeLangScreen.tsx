import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Button } from "react-native";
import './../i18n/i18n';

const ChangeLangScreen = ({ navigation }: { navigation: any }) => {
  const {t, i18n} = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  }
  
  return (
    <View>
      <Text>{t('hello')}</Text>
      <Button
        title={t('english')}
        onPress={() => changeLang('en') }
      />
      <Button
        title={t('vietnamese')}
        onPress={() => changeLang('vi') }
      />
    </View>
  );
};

export default ChangeLangScreen;
