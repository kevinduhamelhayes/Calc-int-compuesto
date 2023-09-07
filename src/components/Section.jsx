
import './styles/Section.css';

function Section({ children }) {
    return (
        <div className="app-section">
            {children}
        </div>
    );
}

export default Section;