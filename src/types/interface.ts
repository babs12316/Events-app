interface EventType {
  id: number;
  name: string;
}

interface User {
  id: number;
  userId: string;
  name: string;
  surName: string;
  email: string;
  password: string;
  role: string;
}

interface Event {
  id: number;
  eventTypeId: number;
  userId: string[];
  name: string;
  description: string;
  start: string;
  end: string;
  status: boolean;
}

export interface Events {
  eventType: EventType[];
  event: Event[];
  user: User[];
}
