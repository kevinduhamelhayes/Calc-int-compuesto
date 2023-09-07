import './styles/Container.css';

function Container({ children }) {
    return (
        <div className="app-container">
            {children}
        </div>
    );
}

export default Container;
