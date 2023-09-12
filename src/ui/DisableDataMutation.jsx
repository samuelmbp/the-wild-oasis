import styled from "styled-components";

const StyledDisableDataMutation = styled.div`
  background-color: var(--color-yellow-100);
  padding: 1.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

const DisableDataMutation = () => {
  return (
    <StyledDisableDataMutation>
      <span>👋🏼</span>
      <span>
        Data mutations (create, update, delete) are deactivated in this demo
        app.
      </span>
    </StyledDisableDataMutation>
  );
};

export default DisableDataMutation;
