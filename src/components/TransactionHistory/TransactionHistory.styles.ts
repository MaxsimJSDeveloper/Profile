import { css } from "@emotion/css";

export const transactionsTable = css`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

export const transactionsName = css`
  background-color: #6d6d6d;
  color: #ebebeb;
  height: 40px;
`;

export const transactionsInfo = css`
  text-align: center;
  height: 30px;
`;

export const tableCell = css`
  border: 1px solid #242424;
`;

export const tableRowEven = css`
  &:nth-of-type(even) {
    background-color: #b0acacea;
  }
`;

export const tableHeader = css`
  width: calc(100% / 3);
  border: 1px solid #242424;
`;
