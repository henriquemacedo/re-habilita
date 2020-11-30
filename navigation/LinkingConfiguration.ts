import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Games: {
            screens: {
              GamesScreen: "games",
              GameAttentionScreen: "attention",
              GameLanguageScreen: "language",
              GameRecognitionScreen: "recognition",
              GameMovementScreen: "movement",
            },
          },
          Patients: {
            screens: {
              PatientsScreen: "patients",
              PatientScreen: "patient",
            },
          },
          Settings: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
