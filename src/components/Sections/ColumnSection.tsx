interface ColumnSectionProps {
  columns: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      body: string;
      icon: {
        src: string;
        alt: string;
      };
    }[];
  }[];
}

const ColumnSection: React.FC<ColumnSectionProps> = ({ columns }) => {
  return (
    <section className="column">
      <div className="section-content">
        {columns.map((column) => (
          <div className="column-container">
            <div className="column-header">
              <h2>{column.title}</h2>
              <h3>{column.subtitle}</h3>
            </div>
            <div className="column-item-container">
              {column.items.map((item) => (
                <div className="column-item">
                  <img src={item.icon.src} alt={item.icon.alt} />
                  <p>
                    <span className="column-item-title">{item.title}</span> - {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColumnSection;
