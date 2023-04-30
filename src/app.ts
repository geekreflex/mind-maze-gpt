import express, { Application } from 'express';
import path from 'path';

const app: Application = express();
const port = process.env.PORT || 9000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get(`/`, (req: express.Request, res: express.Response) => {
  res.send('API is running...');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
