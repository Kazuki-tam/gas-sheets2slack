/**
 * createMessage Function
 * @param { String } title - Title
 * @param { String } content - Content
 * @param { String } url - Url
 */
function createMessage(title: string, content: string, url: string): string {
  const message = `
  Title: ${title}
  Content: ${content}
  URL: ${url}
  `;
  return message;
}

export { createMessage };
