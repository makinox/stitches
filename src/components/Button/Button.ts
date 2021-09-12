import { css } from '../GlobalStyles/GlobalStyles';

const Button = css({
  cursor: 'pointer',
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

export default Button;
