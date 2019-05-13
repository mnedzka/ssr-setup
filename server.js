const express = require('express');

const app = expresss();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
