export type EventType = {
  eventId: number;
  eventName: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  location: string;
  description: string;
  capacity: number;
  numAttendees: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attendees: any[];
  outOfDate: boolean;
};
