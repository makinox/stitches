import { styled } from '../GlobalStyles/GlobalStyles';

const Button = styled('button', {
  backgroundColor: '$gray300',
  borderRadius: '9999px',
  fontSize: '$2',
  lineHeight: '1',
  fontWeight: 500,
  padding: '$2 $3',
  border: '0',

  '&:hover': {
    backgroundColor: '$gray500',
  },
});

export default Button;
