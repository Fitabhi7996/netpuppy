import styled from "styled-components";

const Mba2Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MbaRoot = styled.div`
  width: 100%;
  height: 702px;
  position: relative;
  letter-spacing: normal;
`;

const MBA = () => {
  return (
    <MbaRoot>
      <Mba2Icon alt="" src="/mba-2@2x.png" />
    </MbaRoot>
  );
};

export default MBA;
