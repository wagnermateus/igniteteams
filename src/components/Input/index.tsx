import { TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();
  return <Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
}
