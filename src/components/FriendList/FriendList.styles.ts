import { css } from "@emotion/css";

export const friendsList = css`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const friendsItem = css`
  margin-right: 12px;
  border-radius: 6px;
  border: 1px solid #242424;
  padding: 8px;
  width: calc(100% / 5);
  &:last-child {
    margin-right: 0;
  }
`;
