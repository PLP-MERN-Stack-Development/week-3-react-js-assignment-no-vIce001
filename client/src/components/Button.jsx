import { Button as UIButton } from "./ui/button";

export default function Button({ variant = "primary", ...props }) {
  // Map your variants to UI button variants if needed
  let uiVariant = variant;
  if (variant === "danger") uiVariant = "destructive";
  return <UIButton variant={uiVariant} {...props} />;
}