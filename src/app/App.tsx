import './App.scss';
import { AppRouter } from 'app/providers/router';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="visually-hidden">header</h1>
            </header>
            <main className="App-main">
                <h1 className="visually-hidden">main</h1>
                <AppRouter />
            </main>
            <footer className="App-footer">
                <h1 className="visually-hidden">footer</h1>
            </footer>
        </div>
    );
}

export default App;
