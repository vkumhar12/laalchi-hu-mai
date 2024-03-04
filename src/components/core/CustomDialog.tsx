import { Dialog, PaperProps, SxProps, Theme } from "@mui/material";
import { ElementType } from "react";

type Props = {
  open?: boolean;
  onClose?: (event: Event) => void;
  children?: any;
  maxWidth?: "lg" | "md" | "sm" | "xl" | "xs";
  className?: string;
  sx?: SxProps<Theme> | undefined;
  paperProps?: Partial<PaperProps<ElementType<any>>> | undefined;
};

export default function CustomDialog({
  open = false,
  className,
  onClose,
  children,
  maxWidth,
  sx = { borderRadius: 30 },
  paperProps = {
    style: {
      borderRadius: 18,
    },
  },
}: Props) {
  return (
    <Dialog
      sx={sx}
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth
      keepMounted={false}
      PaperProps={paperProps}
      scroll={"body"}
    >
      <div className={className}>{children}</div>
    </Dialog>
  );
}
