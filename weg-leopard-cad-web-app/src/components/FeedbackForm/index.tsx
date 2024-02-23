import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { StyledForm } from "./styles";
import EmailService, {
  EmailOptions,
} from "../../backend/services/EmailServices";

const FeedbackForm: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selection, setSelection] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Configurar as opções do e-mail
    const emailOptions: EmailOptions = {
      from: email, // Usar o campo "Email" do formulário como remetente
      to: "lucas10@weg.net",
      // cc: ["leandrors@weg.net", "filipef@weg.net"],
      subject,
      text: `Email de: ${email}\nAssunto: ${subject}\nMensagem: ${message}\nTipo de feedback: ${selection}`,
    };

    const emailService = new EmailService();
    await emailService.sendEmail(emailOptions);

    // Limpar o formulário após o envio
    setSubject("");
    setMessage("");
    setSelection("");
    setEmail("");

    console.log("Feedback enviado com sucesso!");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        label="Assunto"
        variant="outlined"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <TextField
        label="Mensagem"
        variant="outlined"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <TextField
        select
        label="Tipo de feedback"
        variant="outlined"
        value={selection}
        onChange={(e) => setSelection(e.target.value)}
        SelectProps={{
          native: true,
        }}
      >
        <option value="Bug">Bug</option>
        <option value="Sugestão">Sugestão</option>
        <option value="Dúvida">Dúvida</option>
      </TextField>
      <TextField
        label="Seu e-mail"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button variant="contained" color="primary" type="submit">
        Enviar Feedback
      </Button>
    </StyledForm>
  );
};

export default FeedbackForm;
