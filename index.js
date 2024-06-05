import { Octokit } from 'https://esm.sh/octokit';
import { markedEmoji } from 'https://esm.sh/marked-emoji';
import Markdown from 'https://cdn.jsdelivr.net/npm/reveal.js@4.3.1/plugin/markdown/markdown.esm.js';
import Highlight from 'https://cdn.jsdelivr.net/npm/reveal.js@4.3.1/plugin/highlight/highlight.esm.js';
import Notes from 'https://cdn.jsdelivr.net/npm/reveal.js@4.3.1/plugin/notes/notes.esm.js';
const octokit = new Octokit();

octokit.rest.emojis.get().then(({ data: emojis }) => {
  const markedEmojiPlugin = markedEmoji({
    emojis,
    renderer: (token) => {
      return `<img alt="${token.name}" src="${token.emoji}" class="marked-emoji-img">`;
    },
  });
  console.log(markedEmojiPlugin);
  console.log('marked', marked);

  // marked.use(markedEmojiPlugin);
  // const renderer = new marked.Renderer();

  console.error('hello');
  // const foo = marked.parse('I :heart: marked! :tada:');
  // console.log('got stuff', foo);

  Reveal.initialize({
    plugins: [Markdown, Highlight, Notes],
    hash: true,
    // markdown: {
    //   renderer,
    // },
  });

  console.error('hello2');
});
