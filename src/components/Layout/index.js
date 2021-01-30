import s from './layout.module.css';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    return(
        <div>
            <section className = {s.root} id = {id}
                     style = {{
                         background: `url(${urlBg})`,
                         backgroundColor: colorBg,
                         backgroundSize: 'cover'
                     }}
            >
                <div className = {s.wrapper}>
                    <article>
                        <div className = {s.title}>
                            <h3>{title}</h3>
                            <span className = {s.separator}></span>
                        </div>
                        <div className = {s.descr + " " + s.full}>
                            <p className = {descr}></p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Layout;