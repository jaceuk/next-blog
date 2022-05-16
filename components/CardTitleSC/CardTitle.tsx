import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--size-base);
`;

const Icon = styled.div`
  background: var(--color-nearlyBlack);
  border-radius: var(--border-radius-max);
  padding: var(--size-base);
  height: 84px;
  min-width: 84px;

  svg {
    width: 100%;
    height: 100%;
    color: var(--color-white);
  }
`;

interface Props {
  text: string;
  icon: React.ReactNode;
  textSize: string;
}

export default function CardTitle({ text, icon, textSize }: Props) {
  return (
    <Container>
      <Icon>{icon}</Icon>

      {textSize !== 'small' ? <h2>{text}</h2> : <h3>{text}</h3>}
    </Container>
  );
}
