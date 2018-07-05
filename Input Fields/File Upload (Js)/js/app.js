'use strict';


window.onload = function() {
  document.querySelector('#inputfile').addEventListener('change', changeHandler);
  
  function changeHandler(e) {
    const container = document.querySelector('.file-upload');

    let
      files = this.files,
      ul = container.querySelector('.file-upload__list');

    console.log(files);

    if (files.length) {
      if (ul) {
        container.removeChild(ul);
      }

      ul = document.createElement('ul');
      ul.className = 'file-upload__list'

      for (let i = 0; i < files.length; i++) {
        const
          file = files[i],
          li = document.createElement('li');

        li.className = 'file-upload__list-item';

        const liTpl = `<div class="file-upload__list-item-data">
                          <div class="file-upload__list-item-name">${file.name}</div>
                          <div class="file-upload__list-item-size">${(file.size / 1000).toFixed(2)} Kb</div>
                        </div>`;

        li.innerHTML = liTpl;

        ul.appendChild(li);
      }

      container.appendChild(ul);
    }
  }
};