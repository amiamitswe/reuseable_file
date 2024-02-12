const wrapper = document.getElementById('wrapper');

const convertTextFn = e => {
  const inputData = document.getElementById('text').value;
  const convertedData = inputData
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    .replace(/\s/g, '_');
    // .toUpperCase();
  const formatOutput = `const ${convertedData} = '${inputData}';`;
  document.getElementById('text').value = '';

  if (inputData) {
    document.getElementById('output').innerText = formatOutput;
    document.getElementById('originalInput').innerText = inputData;

    const get_copy_button = document.getElementById('copy_text_button');

    if (!get_copy_button && formatOutput) {
      var x = document.createElement('BUTTON');
      var t = document.createTextNode('Copy text');
      x.appendChild(t);
      x.id = 'copy_text_button';
      x.className = 'copy_button';
      x.addEventListener('click', () => copyFunction());
      wrapper.appendChild(x);
    }
  }
};

const copyFunction = () => {
  const copyText = document.getElementById('output');
  const temp = document.createElement('textarea');
  document.body.appendChild(temp);
  temp.value = copyText.innerText;
  temp.select();
  document.execCommand('copy');

  document.body.removeChild(temp);
  outFunc();
};

const outFunc = () => {
  const x = document.createElement('H2');
  x.className = 'status_class';
  x.innerText = 'Copyed !!!';
  wrapper.appendChild(x);
  setTimeout(() => wrapper.removeChild(x), 1000);
};
