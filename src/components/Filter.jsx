import React from "react";
import * as Global from "../styles";

const Filter = ({ selectedTag, setSelectedTag, categories, difficulties }) => {
  return (
    <div>
      <Global.H3>Select a filter</Global.H3>
      <Global.TagsContainer>
        {categories.map((cat) => (
          <Global.Tag
            $opacity={selectedTag === cat.name || selectedTag === null}
            key={cat.id}
            onClick={() => setSelectedTag(cat.name)}
          >
            {cat.name}
          </Global.Tag>
        ))}

        {difficulties.map((diff) => (
          <Global.Tag
            $primary
            $opacity={selectedTag === diff.name || selectedTag === null}
            key={diff.id}
            onClick={() => setSelectedTag(diff.name)}
          >
            {diff.name}
          </Global.Tag>
        ))}
      </Global.TagsContainer>
      <button onClick={() => setSelectedTag(null)}>Reset</button>
    </div>
  );
};

export default Filter;
