import demoUserEmailsData from '/src/utils/mockdata/emails.js';

const extendedEmailDefaults = {
  read: false,
  starred: false,
  deleted: false,
  attachments: [],
};

export default {
  async getUser() {
    try {
      return (await fetch(`/assets/data/user.json`)).json();
    } catch (err) {
      throw new Error(err);
    }
  },
  async getUserEmails() {
    try {
      const data = await fetch(`/assets/data/emails.json`);
      const { messages } = await data.json();

      return messages.map((email) => ({
        ...email,
        ...extendedEmailDefaults,
        ...demoUserEmailsData[email.id],
      }));
    } catch (err) {
      throw new Error(err);
    }
  },
  async getSentEmails() {
    try {
      const data = await fetch(`/assets/data/sent.json`);
      const { messages } = await data.json();

      return messages.map((email) => ({
        ...extendedEmailDefaults,
        ...email,
      }));
    } catch (err) {
      throw new Error(err);
    }
  },
};
