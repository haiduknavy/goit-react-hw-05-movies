import { BtnWrapper, Search } from './GoBackBtn.Styled';

function GoBackBtn({ location }) {
  return (
    <BtnWrapper>
      <Search to={location.state?.from ?? '/'}>Go back</Search>;
    </BtnWrapper>
  );
}

export default GoBackBtn;
