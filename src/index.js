import { fetchPosters, submitForm } from './movies';
import { initSortable } from './plugins/sortable';
import { initMarkdown } from './plugins/markdown';
import { initSelect2 } from './plugins/select';

initSortable();
initMarkdown();
initSelect2();

fetchPosters('Harry Potter');

const form = document.getElementById('search');
form.addEventListener('submit', submitForm);
