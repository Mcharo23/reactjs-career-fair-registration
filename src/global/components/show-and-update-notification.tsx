import { notifications } from "@mantine/notifications";
import { ReactNode } from "react";

type ShowAndUpdateNotificationProps = {
  id: string;
  title: string;
  message: string;
  color: string;
};

type IconProps = {
  icon: ReactNode | null;
};

type UpdateNotificationProps = {
  delay: number;
};

const useShowAndUpdateNotification = () => {
  const loadingNotification = ({
    id,
    message,
    title,
    color,
  }: ShowAndUpdateNotificationProps) => {
    notifications.show({
      id: id,
      color: color,
      loading: true,
      title: title,
      message: message,
      autoClose: false,
      withCloseButton: false,
    });
  };

  const showNotification = ({
    id,
    message,
    title,
    color,
    icon,
  }: ShowAndUpdateNotificationProps & IconProps) => {
    notifications.show({
      id: id,
      color: color,
      title: title,
      message: message,
      icon: icon,
    });
  };

  const updateNotification = ({
    id,
    message,
    title,
    delay,
    color,
    icon,
  }: ShowAndUpdateNotificationProps & UpdateNotificationProps & IconProps) => {
    setTimeout(() => {
      notifications.update({
        id: id,
        color: color,
        title: title,
        message: message,
        icon: icon,
        autoClose: 2000,
        loading: false,
      });
    }, delay);
  };

  return { showNotification, loadingNotification, updateNotification };
};

export default useShowAndUpdateNotification;
