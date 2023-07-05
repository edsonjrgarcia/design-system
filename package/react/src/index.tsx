import { styled } from './styles';

const Button = styled('button',{
    backgroundColor:'$ignite500',
    fontFamily: '$default',
    fontSize: '$2xl',
    padding:'$4 $2'
})

export function App() {
    return(
        <>
            <h1>Hello World!</h1>
            <Button/>
        </>
    )
}