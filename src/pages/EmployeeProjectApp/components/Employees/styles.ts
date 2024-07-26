import styled from "@emotion/styled";

export const EmployeeCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 590px;
  height: 470px;
  max-height: fit-content;
  border: 1px solid #000000;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
  gap: 30px;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 65px;
  height: fit-content;
  gap: 8px;
`;

export const Title = styled.p`
  color: #6f6f6f;
  font-size: 16px;
  font-weight: 400;
`;

export const Field = styled.div`
  color: #000000;
  font-size: 28px;
  font-weight: 700;
`;
