import { getPreferenceValues, LaunchProps, showHUD } from "@raycast/api";

export default async function Command(props: LaunchProps<{ arguments: Arguments.QuickAction }>) {
  const { greeting } = getPreferenceValues<Preferences.QuickAction>();
  const text = props.arguments.text?.trim() || "Marvin";
  await showHUD(`${greeting}, ${text}! 👋`);
}
