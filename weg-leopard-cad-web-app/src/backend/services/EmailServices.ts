import nodemailer from "nodemailer";

export interface EmailOptions {
  from: string;
  to: string;
  cc?: string[];
  subject?: string;
  text?: string;
  html?: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587, // Porta do servidor SMTP (pode variar)
      secure: false, // true para usar SSL/TLS seguro
      auth: {
        user: "email_bot",
        pass: "bot@123",
      },
    });
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    try {
      await this.transporter.sendMail(options);
      console.log("E-mail enviado com sucesso.");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  }
}

export default EmailService;
