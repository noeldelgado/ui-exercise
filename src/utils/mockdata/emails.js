export default {
  // hello
  1: {
    sender: 'jane.doe@gmail.com',
    read: true,
    starred: true,
    attachments: [
      {
        type: 'other',
        path: '/assets/mockdata/attachments/data.json',
      },
    ],
  },
  // important-info-about-account
  2: {
    sender: 'noreply@google.com',
    read: true,
    starred: true,
  },
  // lorem
  3: {
    sender: 'noreply@dhl.com',
  },
  // upcomming_appointment
  4: {
    starred: true,
  },
  // breakingnews
  6: {
    starred: true,
  },
  // a spam
  7: {
    deleted: true,
  },
  // un lacinia
  9: {
    sender: 'jane.doe@gmail.com',
    tags: ['music', 'another-tag'],
    attachments: [
      {
        type: 'pdf',
        path: '/assets/mockdata/attachments/sample.pdf',
      },
    ],
  },
  // your flight confirmation
  10: {
    sender: 'noreply@nasa.gov',
    read: true,
    starred: true,
    attachments: [
      {
        type: 'image',
        path: '/assets/mockdata/attachments/image-01.jpg',
      },
      {
        type: 'image',
        path: '/assets/mockdata/attachments/image-02.jpg',
      },
      {
        type: 'image',
        path: '/assets/mockdata/attachments/image-03.jpg',
      },
      {
        type: 'pdf',
        path: '/assets/mockdata/attachments/sample.pdf',
      },
      {
        type: 'other',
        path: '/assets/mockdata/attachments/data.json',
      },
    ],
  },
};
