import './Content.scss';

window.ipc.send('message', 'ping 🏓');
window.ipc.receive('reply', (args) => {
  // eslint-disable-next-line no-console
  console.log(args);
});

window.ipc.set('unicorn', 'Hello World! 🦄');
// eslint-disable-next-line no-console
console.log(window.ipc.get('unicorn'));

function Content() {
  return <div className="Content">Content</div>;
}

export default Content;
