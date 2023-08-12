import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface WrapperProps {
  variant?: "small" | "regular";
  children?: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => {
  return (
    <Box
      mt={8}
      margin="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};
