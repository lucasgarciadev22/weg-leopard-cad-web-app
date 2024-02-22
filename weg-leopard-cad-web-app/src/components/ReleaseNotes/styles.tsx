import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { ReactNode } from "react";

interface StyledTableProps {
  children: ReactNode;
}

const StyledTable = styled(Table)`
  /* Estilos globais da tabela */
  background-color: var(--gray-300);
  color: var(--text-color);
  border-radius: 8px; /* Definindo o raio de borda como 8px */

  /* Estilos para células de cabeçalho */
  th {
    background-color: var(--gray-200);
    color: var(--white-100);
  }

  /* Estilos para linhas alternadas */
  tbody tr:nth-child(even) {
    background-color: var(--gray-300);
  }

  /* Estilos para hover */
  tbody tr:hover {
    background-color: var(--yellow-200);
  }
`;

export const ReleaseNotesTable: React.FC<StyledTableProps> = ({ children }) => {
  return (
    <StyledTable striped bordered hover variant="dark">
      {children}
    </StyledTable>
  );
};

export default ReleaseNotesTable;
