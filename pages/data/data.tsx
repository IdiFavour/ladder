export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "20 Steps",
    email: "2 odds",
    subject: "2 odds",
    text: "$400 entry",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["meeting", "work", "important"],
  },
];

export type Mail = (typeof mails)[number];
