class App {
  init() {
    document
      .querySelector('#send')
      .addEventListener('click', this.send.bind(this));
  }
  post(path, body) {
    fetch(`http://localhost:9999/${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'text/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        this.render(res);
      });
  }
  send() {
    const data = document.querySelector('.requesttext').value;
    this.post('msg', data);
    document.querySelector('.requesttext').value = '';
  }
  render(response) {
    const responseSpace = document.querySelector('#responsetext');
    responseSpace.textContent = response;
  }
}

const app = new App();
app.init();
