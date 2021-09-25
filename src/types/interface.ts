export interface Events {
  eventType: [
    {
      id: number;
      name: string;
    }
  ];
  event: [
    {
      id: number;
      eventTypeId: number;
      userId: number[];
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
