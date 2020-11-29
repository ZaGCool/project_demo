

export default function News (props){

  // props.name = '新闻123组件'; 
  // props是只读属性

  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
    </div>
   )
}