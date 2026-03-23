function loadImages() {
  if (isLoading) return;

  isLoading = true;

  // Always generate next batch (looping data)
  const nextBatch = [];

  for (let i = 0; i < batchSize; i++) {
    const index = (currentIndex + i) % filteredData.length;
    nextBatch.push(filteredData[index]);
  }

  nextBatch.forEach(item => {
    const img = document.createElement("img");
    img.src = item.url;
    img.loading = "lazy";
    gallery.appendChild(img);
  });

  currentIndex += batchSize;
  isLoading = false;
}