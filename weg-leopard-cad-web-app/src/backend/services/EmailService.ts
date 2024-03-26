import nodemailer from "nodemailer";
import MailConfig from "../config/MailConfig";
import { FeedbackFormData } from "../../models/Feedback";

class EmailService {
  constructor(
    public email?: string,
    public to?: string,
    public subject?: string,
    public message?: string
  ) {}

  public sendEmail(formData: FeedbackFormData | null): void {
    let mailOptions = {
      email: formData?.email ?? this.email,
      to: formData?.to ?? this.to,
      subject: formData?.subject ?? this.subject,
      html: formData?.message ?? this.message,
    };

    const transporter = nodemailer.createTransport({
      host: MailConfig.host,
      port: MailConfig.port,
      secure: MailConfig.secure,
      auth: {
        user: MailConfig.user,
        pass: MailConfig.password,
      },
      tls: { rejectUnauthorized: false },
    });

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.error("Erro ao enviar e-mail:", error);
      } else {
        console.log("E-mail enviado com sucesso!");
        console.log(mailOptions);
      }
    });
  }
}

export default EmailService;
