export default function TextField({ props }: { props: string }) {
  return (
    <>
      <input id="text" name="text" type="text" value={props} />
    </>
  )
}
