import {
  IconChefHat,
  IconCoin,
  IconCreditCard,
  IconGiftCard,
  IconMessages,
  IconReport,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
import { ReactNode } from "react";
import { QUICK_ACTION_LABEL } from "./enum";

export type QuickAccessType = {
  label: string;
  icon: ReactNode;
};

export const QUICK_ACTION: QuickAccessType[] = [
  {
    label: QUICK_ACTION_LABEL.MENU,
    icon: <IconChefHat style={{ width: "70%", height: "70%" }} stroke={1.5} />,
  },
  {
    label: QUICK_ACTION_LABEL.CARDS,
    icon: (
      <IconCreditCard style={{ width: "70%", height: "70%" }} stroke={1.5} />
    ),
  },
  {
    label: QUICK_ACTION_LABEL.STAFFS,
    icon: (
      <IconUserCircle style={{ width: "70%", height: "70%" }} stroke={1.5} />
    ),
  },
  {
    label: QUICK_ACTION_LABEL.CARDS,
    icon: <IconGiftCard style={{ width: "70%", height: "70%" }} stroke={1.5} />,
  },
  {
    label: QUICK_ACTION_LABEL.REPORTS,
    icon: <IconReport style={{ width: "70%", height: "70%" }} stroke={1.5} />,
  },
  {
    label: QUICK_ACTION_LABEL.CUSTOMER_REGISTRATION,
    icon: <IconUser style={{ width: "70%", height: "70%" }} stroke={1.5} />,
  },
  {
    label: QUICK_ACTION_LABEL.FEEDBACK,
    icon: <IconMessages style={{ width: "70%", height: "70%" }} stroke={1.5} />,
  },
  {
    label: QUICK_ACTION_LABEL.CUSTOMER_CHARGES,
    icon: <IconCoin style={{ width: "70%", height: "70%" }} stroke={1.5} />,
  },
];
