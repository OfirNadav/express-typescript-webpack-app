import * as express from 'express';
import { Request, Response } from 'express';
import * as colors from 'colors';

const app = express();
const { PORT = 3000 } = process.env;

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'hello world!'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    // Logging initialization
    console.log('-----');
    console.log(colors.green.underline('express-app-typescript-webpack'));
    console.log(colors.green('Environment:\t\t\t' + process.env.NODE_ENV));
    console.log(colors.green('Port:\t\t\t\t' + PORT));
    console.log('-----');
  });
}

export default app;
