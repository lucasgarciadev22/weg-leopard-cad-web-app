import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { StyledForm } from "./styles";

const FeedbackForm: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [selection, setSelection] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados do formulário:", { subject, message, selection, email });
    setSubject("");
    setMessage("");
    setSelection("");
    setEmail("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        label="Title"
        variant="outlined"
        value={subject}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setSubject(e.target.value)
        }
        InputProps={{
          style: { backgroundColor: "var(--white-200)" },
        }}
      />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        value={message}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setMessage(e.target.value)
        }
        InputProps={{
          style: { backgroundColor: "var(--white-200)" },
        }}
      />
      <TextField
        select
        label="What's the feedback type?"
        variant="outlined"
        value={selection}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setSelection(e.target.value)
        }
        SelectProps={{
          native: true,
        }}
        InputProps={{
          style: { backgroundColor: "var(--white-200)" },
        }}
      >
        <option value="Bug">Bug</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Doubt">Doubt</option>
      </TextField>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setEmail(e.target.value)
        }
        InputProps={{
          style: { backgroundColor: "var(--white-200)" },
        }}
      />
      <Button variant="contained" color="primary" type="submit">
        Send Feedback
      </Button>
    </StyledForm>
  );
};

export default FeedbackForm;
