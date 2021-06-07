- Los estilos en jsx se pasan como un objeto 
```jsx
const Result = (props) =>{
    console.log(props)

    return (
        <h1 style={{ color: props.color }}>
            {props.messages}
        </h1>
    )
}
```
- Los nombres de los componentes: La primera letra tiene que estar en mayusculas
- Lo mas recomendable y buena practica, es crear los componentes en funciones y no en clases
