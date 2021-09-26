type EventType = {
  id: number;
  name: string;
};

export interface Events {
  eventType: EventType[];
  event: [
    {
      id: number;
      eventTypeId: number;
      userId: string[];
      name: string;
      description: string;
      start: string;
      end: string;
      status: boolean;
    }
  ];

  user: [
    {
      id: number;
      userId: string;
      name: string;
      surName: string;
      email: string;
      password: string;
      role: string;
    }
  ];
}
