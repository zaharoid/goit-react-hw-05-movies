import { TailSpin } from 'react-loader-spinner';

export function Spinner() {
  return (
    // <LoaderWrapper>
    <TailSpin
      height="60"
      width="60"
      color="#4d55a9"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
    />
    /* </LoaderWrapper> */
  );
}
