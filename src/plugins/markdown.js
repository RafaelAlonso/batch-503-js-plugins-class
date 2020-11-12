import MarkdownIt from 'markdown-it';

const initMarkdown = () => {
  const textarea = document.getElementById('editor');
  const preview = document.getElementById('preview');
  const md = new MarkdownIt();
  textarea.addEventListener('keyup', (event) => {
    const html = md.render(textarea.value);
    preview.innerHTML = html;
  });
};

export { initMarkdown };
