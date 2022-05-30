import './index.css'
function Chart() {
    return (
        <div className='container'>
            <div className="chart-layout ">
                <div className="chart-layout__item" style={{ "--percent": "30%" } as React.CSSProperties}>30%</div>
                <div className="chart-layout__item" style={{ "--percent": "20%" } as React.CSSProperties}>20%</div>
                <div className="chart-layout__item" style={{ "--percent": "50%" } as React.CSSProperties}>50%</div>
                <div className="chart-layout__item" style={{ "--percent": "70%" } as React.CSSProperties}>70%</div>
                <div className="chart-layout__item" style={{ "--percent": "90%" } as React.CSSProperties}>90%</div>
                <div className="chart-layout__item" style={{ "--percent": "80%" } as React.CSSProperties}>80%</div>
                <div className="chart-layout__item" style={{ "--percent": "70%" } as React.CSSProperties}>70%</div>
                <div className="chart-layout__item" style={{ "--percent": "60%" } as React.CSSProperties}>60%</div>
                <div className="chart-layout__item" style={{ "--percent": "60%" } as React.CSSProperties}>60%</div>
                <div className="chart-layout__item" style={{ "--percent": "90%" } as React.CSSProperties}>90%</div>
                <div className="chart-layout__item" style={{ "--percent": "10%" } as React.CSSProperties}>10%</div>
                <div className="chart-layout__item" style={{ "--percent": "20%" } as React.CSSProperties}>20%</div>
            </div>
            <h3>Biểu đồ cột</h3>
        </div>
    );
}

export default Chart;