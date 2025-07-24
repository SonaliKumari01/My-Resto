import React from 'react';
import { data } from '../restApi.json';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus eligendi dolores,
            eos eaque laudantium alias aspernatur nulla quod iure.
          </p>
        </div>

        <div className="team_container">
          {data[0]?.team?.map((element) => (
            <article className="card" key={element.id}>
              <img src={element.image} alt={`Team member: ${element.name}`} />
              <h3>{element.name}</h3>
              <p>{element.designation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
