import { render, screen, waitFor  } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  let meta = '';
  ["description", "twitter:description"].forEach((name) => {
    meta = document.createElement("meta");
    meta.name = name;
    meta.content = "Default description";
    document.head.appendChild(meta);
  });

  meta = document.createElement("meta");
  meta.setAttribute("property", "og:description");
  meta.content = "Default description";
  document.head.appendChild(meta);

  const title = document.createElement('title');
  title.textContent = 'web3';
  document.head.appendChild(title);

  meta = document.createElement("meta");
  meta.name = "twitter:title";
  meta.content = "Web3";
  document.head.appendChild(meta);

  meta = document.createElement("meta");
  meta.setAttribute("property", "og:title");
  meta.content = "Web3";
  document.head.appendChild(meta);

  meta = document.createElement("meta");
  meta.setAttribute("property", "og:locale");
  meta.content = "en-US";
  document.head.appendChild(meta);
});

afterEach(() => {
  document.head.innerHTML = "";
});

test('Check Sections', async() => {
  render(<App />);
  const sections = ['decentralization', 'data', 'transparency', 'contracts', 'tokenization', 'interoperability', 'censorship', 'security', 'financial', 'governance'];
  for (const element of sections) {
    const section = await waitFor(() => screen.getByTestId(element));
    expect(section).toBeInTheDocument();
  }
});
