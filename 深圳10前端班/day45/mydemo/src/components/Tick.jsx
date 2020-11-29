export default function Tick() {

  const element = (
    <div>
      <h3>hello world</h3>
      <p> It is { new Date().toDateString() }</p>
    </div>
  )
  return element

}