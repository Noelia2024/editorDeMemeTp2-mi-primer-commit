domtoimage.toBlob($card).then((blob) => {
    saveAs(blob, "my-meme.png");
});