import sections from  './data/sections.json'

export const Sections = () => {
    return (
        sections.map((section, index) => {
            const isOdd = index % 2 === 0;
            return <section key={section.id} id={section.id} data-testid={section.id} className={`section ${section.id}${isOdd ? " odd": ""}`}>
                <h2>{section.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: section.content }}></div>
            </section>
        })
    );
};
