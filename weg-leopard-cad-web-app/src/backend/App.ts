import express, { Request, Response } from "express";
import EmailService from "./services/EmailService";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes();
  }

  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send({ result: "version 0.0.2" });
    });

    this.app.post("/send-email", async (req: Request, res: Response) => {
      const message = req.body;

      const emailService = new EmailService(
        message.from,
        message.to,
        message.subject,
        message.message
      );

      try {
        emailService.sendEmail(null);
        res.status(200).json({ result: "E-mail enviado com sucesso!" });
      } catch (error) {
        res.status(500).json({ error: "Erro ao enviar e-mail" });
      }
    });
  }
}

export default new App().app;
