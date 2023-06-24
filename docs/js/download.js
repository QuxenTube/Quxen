async function startDownload() {
    // get data using axios
    let results = await axios({
       url: 'https://github.com/c6b28401-9df2-447e-9d25-7216fc22752a',
       method: 'GET',
       responseType: 'blob'
    })
    let hidden_a = document.createElement('a');
    hidden_a.href = window.URL.createObjectURL(new Blob([results.data]));
    hidden_a.setAttribute('download', 'download_image.jpg');
    document.body.appendChild(hidden_a);
    hidden_a.click();
 }


 // blob:https://github.com/c6b28401-9df2-447e-9d25-7216fc22752a