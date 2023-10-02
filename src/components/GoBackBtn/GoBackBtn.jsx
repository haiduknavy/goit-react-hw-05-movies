import { BtnWrapper, Search } from './GoBackBtn.Styled';

function GoBackBtn({ data }) {
  return (
    <BtnWrapper>
      <Search to={data}>Go back</Search>;
    </BtnWrapper>
  );
}

export default GoBackBtn;
