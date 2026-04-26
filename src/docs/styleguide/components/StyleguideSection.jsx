function StyleguideSection({ title, renderDemo }) {
  return (
    <section className="p-styleguide__section u-masonry-item">
      <h2>{title}</h2>
      <div className="p-styleguide__demo">
        {renderDemo()}
      </div>
    </section>
  );
}

export default StyleguideSection
