import style from './Landing.module.css'

const Landing = ()=>{

    return(
        <div className={style.container}>
            <img src="https://imgs.search.brave.com/67jIoM7SKadh8scgO5oAehV3oq2txB-kxNY-iqsCmxw/rs:fit:1200:1075:1/g:ce/aHR0cHM6Ly9lbHZp/YWplcm9mZWxpei5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDIvQ29taWRh/LXRpcGljYS1kZS1C/YXJiYWRvcy1fLTEw/LVBsYXRvcy1JbXBy/ZXNjaW5kaWJsZXMu/anBn" alt='foto landing'></img>
            <h1>HENRY | PI FOOD</h1>
            <h2>The best recipes can be found here.</h2>
            <p>You can find delicious recipes ideal for cooking at home or to surprise someone special.
               Also share your favorite recipe.</p>
            <a href='/home'>Start Now</a>
        </div>
    )
    
}

export default Landing;