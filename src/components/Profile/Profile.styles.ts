import { css } from "@emotion/css";

export const profileWrapper = css`
  background-color: #fafafa;
  border: 1px solid #242424;
  border-radius: 12px;
  margin: 24px 0;
`;

export const infoWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`;

export const imgWrapper = css`
  padding-bottom: 6px;
`;

export const userPhoto = css`
  border-radius: 50%;
  object-fit: cover;
`;

export const userName = css`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 6px;
`;

export const userInfo = css`
  color: #888;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const stats = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-top: 1px solid #676767;
  background-color: #d5d5d5;
  border-radius: 0 0 12px 12px;
`;

export const statsItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #676767;
  padding: 12px;
  width: calc(100% / 3);

  &:last-child {
    border: none;
  }
`;

export const statsName = css`
  font-weight: 600;
`;

export const statsQuantity = css`
  font-weight: 700;
  font-size: 18px;
`;
