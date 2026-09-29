type GmailComposeOptions = {
  subject?: string;
  body?: string;
};

export const gmailComposeUrl = (
  recipient: string,
  options: GmailComposeOptions = {},
) => {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: recipient });
  if (options.subject) params.set("su", options.subject);
  if (options.body) params.set("body", options.body);
  return `https://mail.google.com/mail/?${params.toString()}`;
};
