import useRouteElements from '../routes/index.jsx';

function App() {
    const routeElements = useRouteElements()
    return (
        <>
            {routeElements}
        </>
    )
}

export default App
