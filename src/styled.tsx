import styled, { css } from "styled-components";

export const InterBoldBracken14px = css`
  color: var(--bracken);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-m);
  font-weight: 700;
  font-style: normal;
`;

export const InterBoldRustyNail14px = css`
  color: var(--rusty-nail);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-m);
  font-weight: 700;
  font-style: normal;
`;

export const Border3pxGravel = css`
  border: 3px solid var(--gravel);
`;

export const Border2pxSeashell = css`
  border: 2px solid var(--seashell);
`;



export const Place = styled.h1`
  min-height: 51px;
  margin-right: 479px;
  min-width: 167px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: #181818;
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

export const Place1 = styled.div`
  min-height: 19px;
  margin-top: 5px;
  margin-right: 581px;
  min-width: 65px;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: #d1d1d1;
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

export const OverlapGroup = styled.div`
  width: 760px;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  padding: 51px 50px;
  align-items: center;
  min-height: 277px;
  background-color: var(--desert-storm);
  border-radius: 14px;
`;

export const FlexRow = styled.div`
  height: 90px;
  position: relative;
  align-self: flex-start;
  display: flex;
  align-items: center;
  min-width: 188px;
`;

export const Number = styled.div`
  min-height: 56px;
  margin-left: 21px;
  margin-bottom: 2px;
  min-width: 62px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--gravel);
  font-size: var(--font-size-xxl);
  text-align: center;
  letter-spacing: 0;
`;

export const Ellipse1 = styled.div`
  ${Border3pxGravel}
  width: 12px;
  height: 12px;
  margin-left: 3px;
  margin-bottom: 24px;
  border-radius: 6px;
`;

export const OverlapGroup1 = styled.div`
  ${Border2pxSeashell}
  height: 30px;
  margin-top: 34px;
  margin-left: 2px;
  display: flex;
  padding: 3px 14px;
  align-items: flex-start;
  min-width: 648px;
  border-radius: 10px;
`;

export const Nem = styled.div`
  ${InterBoldBracken14px}
  width: 153px;
  min-height: 17px;
  letter-spacing: 0;
`;

export const Number1 = styled.div`
  ${InterBoldRustyNail14px}
  width: 75px;
  min-height: 17px;
  margin-left: 388px;
  text-align: right;
  letter-spacing: 0;
`;

export const FlexRow1 = styled.div`
  height: 17px;
  margin-top: 4px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 616px;
`;

export const Rzgar = styled.div`
  ${InterBoldBracken14px}
  width: 228px;
  min-height: 17px;
  letter-spacing: 0;
`;

export const Address = styled.div`
  ${InterBoldRustyNail14px}
  width: 202px;
  min-height: 17px;
  margin-left: 186px;
  text-align: right;
  letter-spacing: 0;
`;

export const IconBrightness = styled.img`
  width: 90px;
  height: 90px;
`;
