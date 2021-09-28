type EventType = {
  id: number;
  name: string;
};

type User = {
  id: number;
  userId: string;
  name: string;
  surName: string;
  email: string;
  password: string;
  role: string;
};

type Event = {
  id: number;
  eventTypeId: number;
  userId: string[];
  name: string;
  description: string;
  start: string;
  end: string;
  status: boolean;
};

export interface Events {
  eventType: EventType[];
  event: Event[];
  user: User[];
}
