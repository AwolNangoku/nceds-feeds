'user client';

const Spacer = ({py, px }: {py?: string, px?: string }) => {
  return (
    <div className={`py-[${py}] px-[${px}]`} />
  )
}
export default Spacer;