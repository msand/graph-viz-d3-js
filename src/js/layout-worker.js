importScripts('../../lib/requirejs/require.js');

require({
    baseUrl: "./",
    paths: {
      viz: '../lib/viz',
      parser: '../../parser'
    }
  },
  ["require", "transformer"],
  function(require, d3dot) {

    onmessage = function(event) {
      var data = {
        type: "stage",
        body: d3dot.generate(event.data)
      };
      postMessage(data);
    };

    postMessage({
      type: "ready"
    });
  }
);